function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    
    dataset.addColumn("estado");
    dataset.addColumn("sigla");

    dataset.addRow(new Array("São Paulo", "BR"));
	dataset.addRow(new Array("Veracruz", "MX"));    
	dataset.addRow(new Array("Buenos Aires", "AR"));
	dataset.addRow(new Array("Santiago", "CL"));	
	dataset.addRow(new Array("Montevidéu", "UY"));	

    return dataset;
}
function onMobileSync(user) {

}