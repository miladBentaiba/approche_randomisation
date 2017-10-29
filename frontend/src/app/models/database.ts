 
export class DatabsModel {


	constructor(
		public _id: string,
		public name: string,
	    public type: string,
		public modality: string,  
		public sensor: string,
		public resolution: number,
		public numberTot: number,
		public numberScans: number,
		public createdBy: string,
		public  ref: string,
		public  url: string,
		public  note: string,
		public publicDatabase:boolean,
		public preTraited: boolean,
		public updatedAt: string,
        public createdAt: string  ){}
}