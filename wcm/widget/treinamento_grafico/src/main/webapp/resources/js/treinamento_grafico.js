var WidgetGrafico = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	 if(WCMAPI.isEditMode == "false"){
    		 this.carregarGraficoAssincrono();
         }
    	
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction']
        },
        global: {}
    },
 
    carregarGraficoAssincrono: function(){
    	
    	var myLoading2 = FLUIGC.loading(window, {
    	    textMessage:  'Por favor, aguarde o carregamento do gráfico.', 
    	    title: null,
    	    css: {
    	        padding:        0,
    	        margin:         0,
    	        width:          '30%',
    	        top:            '40%',
    	        left:           '35%',
    	        textAlign:      'center',
    	        color:          '#000',
    	        border:         '3px solid #aaa',
    	        backgroundColor:'#fff',
    	        cursor:         'wait'
    	    },
    	    overlayCSS:  { 
    	        backgroundColor: '#000', 
    	        opacity:         0.6, 
    	        cursor:          'wait'
    	    }, 
    	    cursorReset: 'default',
    	    baseZ: 1000,
    	    centerX: true,
    	    centerY: true,
    	    bindEvents: true,
    	    fadeIn:  200,
    	    fadeOut:  400,
    	    timeout: 0,
    	    showOverlay: true, 
    	    onBlock: null,
    	    onUnblock: null,
    	    ignoreIfBlocked: false
    	});
    	
    	myLoading2.show();
    	
    	var _this = this;
    	
    	var callback = {
    			success: function(dataset){
    				
    		    	var colunas = [];
    		    	var dados = [];
    		    	
    		    	for(var i=0; i<dataset.values.length; i++){
    		    		colunas[i] = dataset.values[i]["Tipo"];
    		    		dados[i] = dataset.values[i]["Total_Tarefas"];
    		    	}
    		    	
    		    	var chart = FLUIGC.chart('#MY_SELECTOR_'+_this.instanceId);
    		    	
    		    	var data = {
    				    labels: colunas,
    				    datasets: [
    				        {
    				            label: "My Second dataset",
    				            fillColor: "rgba(151,187,205,0.2)",
    				            strokeColor: "rgba(151,187,205,1)",
    				            pointColor: "rgba(151,187,205,1)",
    				            pointStrokeColor: "#fff",
    				            pointHighlightFill: "#fff",
    				            pointHighlightStroke: "rgba(151,187,205,1)",
    				            data: dados
    				        }
    				    ]
    				};
    		    	
    		    	var options = {
    		    		datasetStroke: true,
    		    		bezierCurve: false
    		    	}
    		    	
    		    	var lineChart = chart.line(data, options);
    		    	myLoading2.hide();
    			},
    			
    			error: function(jqXHR, textStatus, errorThrown){
    				 FLUIGC.toast({
    				        title: 'Erro: ',
    				        message: 'Tivemos um problema ao realizar o carregamento do gráfico, tente mais tarde.',
    				        type: 'error'
    				    });
    		    	myLoading2.hide();
    			}
    	}
    	
    	var c1 = DatasetFactory.createConstraint("coduser", WCMAPI.userLogin, WCMAPI.userLogin, ConstraintType.MUST);
    	var dataset = DatasetFactory.getDataset("ds_grafico", null, [c1], null, callback);
    }
});

