function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset ();

	//Cria Colunas
	dataset.addColumn("Produtos");
	dataset.addColumn("Valor");
	
	
	//Cria Linhas
	dataset.addRow(new Array("Produto 01", 1));
	dataset.addRow(new Array("Produto 02", 2));
	dataset.addRow(new Array("Produto 03", 3));
	dataset.addRow(new Array("Produto 04", 4));
	dataset.addRow(new Array("Produto 05", 5));
	dataset.addRow(new Array("Produto 06", 6));
	dataset.addRow(new Array("Produto 07", 7));
	dataset.addRow(new Array("Produto 08", 8));
	dataset.addRow(new Array("Produto 09", 9));
	dataset.addRow(new Array("Produto 10", 10));
	
	
	return dataset;	
}

function onMobileSync(user) {

}