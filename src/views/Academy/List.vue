<template>
    <v-container>
      	<v-row>
        	<v-col>
        		<v-card>
				    <v-card-title>
						Kelas di Jobhun Academy
				    </v-card-title>
				    <v-container>
				    	<!-- ==================================== Filtering Form ==========================-->
				    	<v-row>
						   	<v-col md="6">
						   		<v-text-field v-model="search" label="Cari"></v-text-field>
						    </v-col>
						    <v-col>
						   		<v-btn
						   			tile
						          color="primary"
						           @click="loadData(1)"
						        >
						          <v-icon left>
						            mdi-cloud-search-outline
						          </v-icon>
						          Filter
						        </v-btn>
						     </v-col>
						   		<v-spacer></v-spacer>
						     <v-col>
						   		<v-btn
						   			dark
						   			tile
						          color="pink darken-1"
						           @click="createDialog"
						        >
						          <v-icon left>
						            mdi-plus
						          </v-icon>
						          Tambah
						        </v-btn>
							</v-col>
						</v-row>
				    	<!-- ==================================== End fo Filtering Form ==========================-->
						<v-row>
							<v-col col="12">
								<h6>total Data = {{pagination.totalData}} row{{pagination.totalData > 1?"s":""}}</h6>
							</v-col>
						</v-row>
						<v-row v-if="datas.length > 0">
							<v-col md="12">
								<v-data-table
							      :headers="headers"
							      hide-default-footer
							      :items-per-page="10"
							    >
							    	<template v-slot:body="{ items }" >
								        <tbody>
								          <tr
								            v-for="item in datas"
								            :key="item.name"
								          >
								            <td>{{ item.name }}</td>
								            <td>{{ item.updated_at }}</td>
								            <td>{{ item.updater.name }}</td>
								            <td>
									            <v-icon
											        small
											        class="mr-2"
											        @click="editDialog(item)"
											      >
											        mdi-pencil
											    </v-icon>
								            	<v-icon
											        small
											        @click="deleteData(item)"
											      >
											        mdi-delete
											      </v-icon>
									  		</td>
								          </tr>
								        </tbody>
							      	</template>
							    </v-data-table>
							</v-col>
						</v-row>
						<v-row v-else>
							<v-col><p>no data</p></v-col>
						</v-row>
						<v-row v-if="pagination.totalData > 0">
							<v-col>
								<div class="text-center">
								    <v-pagination
								      v-model="pagination.page"
								      :length="pagination.lastPage"
								      :total-visible="7"
								      @input = "loadData"
								    ></v-pagination>
								 </div>
							</v-col>
						</v-row>
					</v-container>
				</v-card>
        	</v-col>
    	</v-row>
    	<v-dialog
		      v-model="dataDialog"
		      persistent
		    >
	      <v-card>
	        <v-card-title class="headline">{{dataDialogMode == "create"? 'Tambah':'Atur'}} kelas</v-card-title>

	        <v-card-text>
	          <v-container>
	            <v-row>
	              <v-col cols="12">
	              	<v-text-field v-model="academy.name" label="Nama kelas" :readonly="dataDialogMode == 'edit'"></v-text-field>
	              </v-col>
	            </v-row>
				<v-col cols="12">
	              	<v-textarea
				      label="Deskripsi"
				      v-model="academy.description"
				    ></v-textarea>
	            </v-col>
	            <v-row v-if="academy.media != null">
	            	<v-col cols="12">
	            		<img :src="academy.media.url" height="200" />
	            	</v-col>
	            </v-row>
	            <v-row>
	              <v-col cols="12">
	              	<v-file-input v-model="academy.file" accept="image/*" label="Gambar File"  @change="setDataImage"></v-file-input>
	              </v-col>
	            </v-row>
	          </v-container>
	        </v-card-text>

	        <v-card-actions>
	          <v-spacer></v-spacer>
	          <v-btn
	            v-if="dataDialogMode == 'create'"
	            color="green darken-1"
	            text
	            @click="createData"
	          >
	            Tambah
	          </v-btn>
	          <v-btn
	          	v-else
	            color="green darken-1"
	            text
	            @click="editData"
	          >
	            Ubah
	          </v-btn>
	          <v-btn
	            color="red darken-1"
	            text
	            @click="dataDialog = false"
	          >
	            Tutup
	          </v-btn>
	        </v-card-actions>
	      </v-card>
	    </v-dialog>
    </v-container>
</template>
<script>
export default{
	data(){
		return{
			search: "",
			academy: {
				id: null,
				name: "",
				description: "",
				media: null,
				file: null
			},
	        headers: [
	          { text: 'Kelas', sortable: false},
	          { text: 'Ditambah', sortable: false },
	          { text: 'Penambah', sortable: false },
	          { text: 'Aksi', value: 'actions', sortable: false }
	        ],
	        datas: [],
	        pagination:{
	        	page: 1,
	        	totalData: 0,
	        	lastPage: 1
	        },
	        dataDialog:false,
	        dataDialogMode:"create"
		}
	},
	mounted(){
		this.setup()
	},
	methods: {
		setup: async function(){
			this.$store.commit("setPage","academy");
		},
		loadData: async function(page=1){
			this.pagination.page = page;
			let search = "";
			if(this.search != ""){
				search = this.search;
			}
			let res = await this.$store.dispatch('academy/index',"?page="+this.pagination.page+"&search="+search);
			this.datas = res.data.data;
			this.pagination.page = res.data.current_page;
			this.pagination.totalData = res.data.total;
			this.pagination.lastPage = res.data.last_page;
		},
		createData: async function(){
			let formData = new FormData();
			for ( let key in this.academy ) {
			    formData.append(key, this.academy[key]);
			}
			let res = await this.$store.dispatch('academy/store',formData);
			this.dataDialog = false;
			this.resetDialog();
			this.loadData();
		},
		editData: async function(){
			let formData = new FormData();
			for ( let key in this.academy ) {
			    formData.append(key, this.academy[key]);
			}
			let res = await this.$store.dispatch('academy/update',formData);
			this.dataDialog = false;
			this.resetDialog();
			this.loadData();
		},
		deleteData: async function(item){
			if(confirm("Yakin akan menghapus kelas "+item.name+ " ?")){
				let res = await this.$store.dispatch("academy/destroy",item.id);
				this.loadData();
			}
		},
		createDialog: function(){
			this.dataDialogMode = "create";
			this.dataDialog = true;
		},
		editDialog: function(item){
			this.academy = Object.assign({}, item);
			this.dataDialogMode = "edit";
			this.dataDialog = true;
		},
		reset: function(){
			this.search = "";
		},
		resetDialog: function(){
			this.academy.name= "";
			this.academy.media=null;
			this.academy.description="";
			this.academy.file=null;
		},
		setDataImage: function(img){
			if(img != null){
				this.academy.media = {};
				this.academy.file = img;
				this.academy.media.url = URL.createObjectURL(img);
			}else{
				this.academy.media = {};
			}
		}
	}
}
</script>