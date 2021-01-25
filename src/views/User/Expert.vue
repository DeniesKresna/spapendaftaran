<template>
    <v-container>
      	<v-row>
        	<v-col>
        		<v-card>
				    <v-card-title>
						Expert di Jobhun Ask Career
				    </v-card-title>
				    <v-container>
				    	<!-- ==================================== Filtering Form ==========================-->
				    	<v-row>
						   	<v-col cols="8" md="4">
						   		<v-text-field v-model="filter.search" label="Cari"></v-text-field>
						    </v-col>
						    <v-col cols="4" md="2">
						   		<v-select
						            v-model="filter.active"
						            :items="activeList"
						            item-text="name"
						            item-value="value"
						            label="Status"
						          ></v-select>
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
								            :key="item.id"
								          >
								            <td>{{ item.mentor_name }}</td>
								            <td>{{ item.job }}</td>
								            <td>{{ item.price }}</td>
								            <td>{{ item.updated_at }}</td>
								            <td>{{ item.updater_name }}</td>
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
	        <v-card-title class="headline">{{dataDialogMode == "create"? 'Tambah':'Atur'}} expert</v-card-title>

	        <v-card-text>
	          <v-container>
	            <v-row>
	              <v-col cols="12">
	              	<v-autocomplete
				            v-model="expert.mentor_id"
				            :items="mentorList"
				            item-value="id"
				            item-text="name"
				            dense
				            chips
				            small-chips
				            label="Pilih mentor"
				          ></v-autocomplete>
	              </v-col>
	            </v-row>
	            <v-row>
	              <v-col cols="12">
	              	<v-text-field v-model="expert.job" label="Pekerjaan yang dimentorkan"></v-text-field>
	              </v-col>
	            </v-row>
	            <v-row>
	              <v-col cols="12">
	              	<v-text-field v-model="expert.price" type="number" label="Harga per jam"></v-text-field>
	              </v-col>
	            </v-row>
	            <v-row>
	            	<v-col cols="12">
		              	<v-checkbox v-model="expert.active" label="Aktifkan?"></v-checkbox>
		            </v-col>
	            </v-row>
	            <v-row>
					<v-col cols="12">
		              	<v-textarea
					      label="Deskripsi"
					      v-model="expert.description"
					    ></v-textarea>
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
			filter: {
				search: "",
				active: 2
			},
			activeList: [{name: 'Aktif', value: 1},{name:'Tidak Aktif', value: 0},
				{name:'Semua', value:2}],
			expert: {
				id: null,
				name: "",
				price: "",
				mentor_id: null,
				job: null,
				description: "",
				active: null
			},
	        headers: [
	          { text: 'Nama', sortable: false},
	          { text: 'Kelas Konsul', sortable: false },
	          { text: 'Harga', sortable: false },
	          { text: 'Diupdate', sortable: false },
	          { text: 'Pengupdate', sortable: false },
	          { text: 'Aksi', value: 'actions', sortable: false }
	        ],
	        datas: [],
	        pagination:{
	        	page: 1,
	        	totalData: 0,
	        	lastPage: 1
	        },
	        dataDialog:false,
	        dataDialogMode:"create",

	        mentorList: [],
	        jobList: []
		}
	},
	mounted(){
		this.setup()
	},
	methods: {
		setup: async function(){
			this.$store.commit("setPage","academy");
			let res = await this.$store.dispatch('mentor/list',"");
			this.mentorList = res.data;
		},
		loadData: async function(page=1){
			this.pagination.page = page;
			let search = "";
			if(this.filter.search != ""){
				search = this.filter.search;
			}
			let res = await this.$store.dispatch('expert/index',"?page="+this.pagination.page+"&search="+search+"&active="+this.filter.active);
			this.datas = res.data.data;
			this.pagination.page = res.data.current_page;
			this.pagination.totalData = res.data.total;
			this.pagination.lastPage = res.data.last_page;
		},
		createData: async function(){
			let objCopy = Object.assign({}, this.expert);
			let res = await this.$store.dispatch('expert/store',objCopy);
			this.dataDialog = false;
			this.resetDialog();
			this.loadData();
		},
		editData: async function(){
			let objCopy = Object.assign({}, this.expert);
			if(objCopy.active){
				objCopy.active=1;
			}else{
				objCopy.active=0;
			}
			let res = await this.$store.dispatch('expert/update',objCopy);
			this.dataDialog = false;
			this.resetDialog();
			this.loadData();
		},
		deleteData: async function(item){
			if(confirm("Yakin akan menghapus "+item.mentor_name+ " sebagai expert?")){
				let res = await this.$store.dispatch("expert/destroy",item.id);
				this.loadData();
			}
		},
		createDialog: function(){
			this.resetDialog();
			this.dataDialogMode = "create";
			this.dataDialog = true;
		},
		editDialog: function(item){
			this.expert = Object.assign({}, item);
			this.dataDialogMode = "edit";
			this.dataDialog = true;
		},
		reset: function(){
			this.search = "";
		},
		resetDialog: function(){
			this.expert = {
				id: null,
				name: "",
				price: "",
				mentor_id: null,
				job: null,
				description: "",
				active: null
			};
		}
	}
}
</script>