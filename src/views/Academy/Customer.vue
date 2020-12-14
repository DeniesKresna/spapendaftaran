<template>
    <v-container>
      	<v-row>
        	<v-col>
        		<v-card>
				    <v-card-title>
						Akademi
				    </v-card-title>
				    <v-container>
				    	<!-- ==================================== Filtering Form ==========================-->
				    	<v-row>
				    		<v-col cols="12" md="6" sm="6">
						        <v-select
						            v-model="jaSelected"
						            :items="jaList"
						            item-text="name"
						            item-value="id"
						            label="Nama Akademi"
						          ></v-select>
						    </v-col>
						   	<v-col cols="12" md="6" sm="6">
						   		<v-menu
							        v-model="menu"
							        :close-on-content-click="false"
							        :nudge-right="40"
							        transition="scale-transition"
							        offset-y
							        min-width="290px"
							      >
							        <template v-slot:activator="{ on, attrs }">
							          <v-text-field
							            v-model="period"
							            label="Period"
							            readonly
							            v-bind="attrs"
							            v-on="on"
							          ></v-text-field>
							        </template>
							        <v-date-picker v-model="period" @input="menu = false"></v-date-picker>
							      </v-menu>	
							</v-col>
						   	<v-col cols="12" md="6" sm="6">
						   		<v-text-field
							        v-model="searchCustomer"
							        label="Customer"
							      ></v-text-field>
							</v-col>
						   	<v-col cols="12" md="6" sm="6">
						   		<v-select
						            v-model="filterSelected"
						            :items="filterList"
						            item-text="name"
						            item-value="link"
						            label="Pembayaran"
						          ></v-select>
							</v-col>
							<v-col cols="12" md="12" class="d-flex justify-space-around">
						   		<v-btn
						   			small
						   			tile
						          color="primary"
						           @click="reset"
						        >
						          <v-icon left>
						            mdi-refresh
						          </v-icon>
						          Atur
						        </v-btn>
						   		<v-btn
						   			small
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
						   		<v-btn
						   			small
						   			tile
						          color="success"
						           @click="loadData"
						        >
						          <v-icon left>
						            mdi-cloud-search-outline
						          </v-icon>
						          Filter
						        </v-btn>
						        
						   		<v-btn
						   			v-show="rowSelected.length > 0"
						   			small
						   			tile
						          color="warning"
						           @click="editDialog"
						        >
						          <v-icon left>
						            mdi-pencil
						          </v-icon>
						          Ubah
						        </v-btn>
						    	
							</v-col>
						</v-row>
				    	<!-- ==================================== End fo Filtering Form ==========================-->
						<v-row>
							<v-col col="12">
								<h6>total Data = {{pagination.totalData}} row{{pagination.totalData > 1?"s":""}}, total Price IDR {{totalPrice}} </h6>
							</v-col>
						</v-row>
						<v-row v-if="datas.length > 0">
							<v-col md="12">
								<v-data-table
								  v-model="rowSelected"
							      :headers="headers"
							      :items="datas"
							      item-key="id"
							      show-select
							      hide-default-footer
							      :items-per-page="10"
							    >
							    	<template v-slot:item.actions="{ item }">
								      <v-icon
								      	v-if="item.status != 1"
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
								      :length="pagination.last_page"
								      :total-visible="7"
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
	        <v-card-title class="headline">{{dataDialogMode == "create"? 'Tambah':'Atur'}} Pembayaran Peserta</v-card-title>

	        <v-card-text>
	          <v-container>
	            <v-row>
	              <v-col cols="12">
	              	<v-text-field v-model="payment.academy_period_customer_id" label="Id Transaksi" v-show="false"></v-text-field>
	              </v-col>
	              <v-col cols="12">
	              	<v-text-field v-model="payment.transaction_id" label="Id Transaksi" ></v-text-field>
	              </v-col>
	              <v-col cols="12">
	              	<v-text-field v-model="payment.via" label="Pembayaran Via" ></v-text-field>
	              </v-col>
	              <v-col cols="12">
	              	<v-text-field v-model="payment.amount" label="Jumlah Pembayaran" ></v-text-field>
	              </v-col>
	            </v-row>
	            <v-row>
	              <v-col cols="12">
	              </v-col>
	            </v-row>
	          </v-container>
	        </v-card-text>

	        <v-card-actions>
	          <v-spacer></v-spacer>
	          <v-btn
	            color="green darken-1"
	            text
	            @click="editData"
	          >
	            Kirim
	          </v-btn>
	          <v-btn
	            color="red darken-1"
	            text
	            @click="dataDialog = false"
	          >
	            Tunda
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
			rowSelected: [],
			jaList:[],
			jaSelected:null,
			//period: new Date().toISOString().substr(0, 10),
			period: null,
			menu: false,
			searchCustomer: '',
			filterList:[
				{name: "Semua", link: ""},
				{name: "Belum Bayar", link: "&status=0"},
				{name: "Pending Bayar", link: "&status=2"},
				{name: "Sudah Bayar", link: "&status=1"}
			],
			filterSelected: null,
			payment: {
				transaction_id: "",
				via: "",
				amount: ""
			},
			totalPrice: 0,
	        headers: [
	          { text: 'Akademi', value: 'academy_name', sortable: false},
	          { text: 'Period', value: 'period', sortable: false},
	          { text: 'Peserta', value: 'customer_name', sortable: false },
	          { text: 'Email', value: 'customer_email', sortable: false },
	          { text: 'Harga', value: 'price', sortable: false },
	          { text: 'Status', value: 'status', sortable: false },
	          { text: 'Update', value: 'updated_at', sortable: false },
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
			this.$store.commit("setPage","academy")
			let res = await this.$store.dispatch('academy/list',"?active=1");
			this.jaList = res.data;
		},
		loadData: async function(){
			let jaSelectedId = "";
			let filterSelected = "";
			let period = "";
			if(this.jaSelected != null){
				jaSelectedId = this.jaSelected;
			}
			if(this.filterSelected != null){
				filterSelected = this.filterSelected
			}
			if(this.period != null){
				period = this.period;
			}
			let qs = "?search="+this.searchCustomer+"&ja_id="+jaSelectedId+"&period="+period+filterSelected+"&page="+this.pagination.page;
			
			let res2 = await this.$store.dispatch('academy/customerShow',qs);
			this.datas = res2.data.data;
			this.pagination.page = res2.data.current_page;
			this.pagination.totalData = res2.data.total;
			this.pagination.lastPage = res2.data.last_page;
			this.totalPrice = res2.total_price;
		},
		editData: async function(){
			let res = await this.$store.dispatch('academy/paymentStore',this.payment);
			this.dataDialog = false;
			this.resetDialog();
			this.loadData();
		},
		deleteData: async function(item){
			if(confirm("Yakin akan menghapus peserta "+item.customer_name+" di Akademi "+item.academy_name+" periode "+ item.period + " ?")){
				let res = await this.$store.dispatch("academy/customerDestroy",item.id);
				this.loadData();
			}
		},
		loadSummary: async function(){

		},
		createDialog: function(){
			this.$router.push("/academy/form");
		},
		editDialog: function(item){
			this.payment.academy_period_customer_id = item.id;
			this.dataDialogMode = "edit";
			this.dataDialog = true;
		},
		reset: function(){
			this.jaSelected = null;
			this.period= null;
			this.menu= false;
			this.searchCustomer= '';
			this.filterSelected= null;
		},
		resetDialog: function(){
			this.payment.transaction_id= "";
			this.payment.via= "";
			this.payment.amount= "";
		}
	}
}
</script>