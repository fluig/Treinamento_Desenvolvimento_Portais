var WidgetProtheus = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'criar': ['click_criarProduto']
        },
        global: {}
    },
 
    criarProduto: function() {
    	
    	var loading = FLUIGC.loading("#WidgetProtheus_"+this.instanceId); 
    	
    	var codProduto = $("#txt_cod_produto_"+this.instanceId).val();
    	var descProduto = $("#txt_descricao_produto_"+this.instanceId).val();
    	
    	loading.show();
    	
    	var callback = {
			success: function(data){
				FLUIGC.toast({
					title: '',
					message: 'O produto ' +  descProduto + ' foi criado com sucesso!',
					type: 'success'
				});
				
				loading.hide();
			},
			
			error: function(jqXHR, textStatus, errorThrown){
				FLUIGC.toast({
					title: '',
					message: 'Houve um erro e o produto não foi criado.',
					type: 'danger'
				});
				
				loading.hide();
			}
    	}
    	
    	var c1 = DatasetFactory.createConstraint("ccod", codProduto, codProduto, ConstraintType.MUST);
    	var c2 = DatasetFactory.createConstraint("cdescr", descProduto, descProduto, ConstraintType.MUST);
    	var c3 = DatasetFactory.createConstraint("ctipo", "PA", "PA", ConstraintType.MUST);

    	DatasetFactory.getDataset("ds_protheus_incluir_produto", null, [c1, c2, c3], null, callback);
    }

});

