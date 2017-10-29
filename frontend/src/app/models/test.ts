 
export class TestModel {
	constructor(
		public _id: String,
		public methodNames:any[],
		public complete: boolean, 
		public needBDD: boolean, 
		public createdBy: String, 
		public numberScans: Number, 
		public numberTot: Number,
		public savingResults: Number,  
		public url: String, 
		public type: String, 
		public matcher: String, 
		public modality: String, 
		public beforeRoutine: String, 
 		public createdAt: String ){}
}
