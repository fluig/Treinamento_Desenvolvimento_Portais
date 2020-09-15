var WidgetEventos = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	this.iniciarColorPicker();
    },
  
    //BIND de eventos
    bindings: {
        local: {
    		'evento-1': ['click_chamarEvento1'],
    		'evento-2': ['dblclick_chamarEvento2'],
    		'evento-3': ["mouseover_chamarEvento3"],
    		'calc-sub': ['click_subtrair'],
    		'calc-soma': ['click_somar'],
    		'calc-mult': ['click_multiplicar'],
    		'calc-div': ['click_dividir'],
    		'salvarPreferencias': ['click_salvar']
        },
        global: {}
    },
    
    chamarEvento1: function (){
    	alert("Você clicou no botão");
    },
    
    chamarEvento2: function (){
    	alert("Você clicou 2x no botão");
    },
    
    chamarEvento3: function (){
    	alert("Você passou o mouse por cima do botão");
    },
    
    subtrair: function(){
    	if(this.validarCampos()){
    		var valor1 = $("#txt_valor_1_"+this.instanceId).val();
        	var valor2 = $("#txt_valor_2_"+this.instanceId).val();
        	
        	var total = parseFloat(valor1) - parseFloat(valor2);
        	
        	$("#txt_resultado_"+this.instanceId).val(total);
    	}
    },
    
    somar: function(){
    	if(this.validarCampos()){
    		var valor1 = $("#txt_valor_1_"+this.instanceId).val();
        	var valor2 = $("#txt_valor_2_"+this.instanceId).val();
        	
        	var total = parseFloat(valor1) + parseFloat(valor2);
        	
        	$("#txt_resultado_"+this.instanceId).val(total);
    	}
    },
    
    multiplicar: function(){
    	
    	if(this.validarCampos()){
    		var valor1 = $("#txt_valor_1_"+this.instanceId).val();
        	var valor2 = $("#txt_valor_2_"+this.instanceId).val();
        	
        	var total = parseFloat(valor1) * parseFloat(valor2);
        	
        	$("#txt_resultado_"+this.instanceId).val(total);
    	}
    },
    
    dividir: function(){    	
    	if(this.validarCampos()){
    		var valor1 = $("#txt_valor_1_"+this.instanceId).val();
        	var valor2 = $("#txt_valor_2_"+this.instanceId).val();
        	
        	var total = parseFloat(valor1) / parseFloat(valor2);
        	
        	$("#txt_resultado_"+this.instanceId).val(total);
    	}
    },
    
    validarCampos: function(){
    	var valor1 = $("#txt_valor_1_"+this.instanceId).val();
    	var valor2 = $("#txt_valor_2_"+this.instanceId).val();
    	
    	if(valor1.trim() == "" || valor2.trim() == "" ){
    		FLUIGC.toast({
    			title: "",
    			message: "Por favor, preencha os valores para calcular!",
    			type: "danger"
    		});
    		
    		return false;
    	}
    	
    	return true;
    },
    
    iniciarColorPicker: function(){
    	var settings = {
		    changeDelay: 200,
		    control: 'wheel',
		    inline: false,
		    letterCase: 'lowercase',
		    opacity: true,
		    position: 'bottom left',
		    customColorNames: {
		        'mycustomcolor': '#123456'
		    }
		} 
		var myColorPicker = FLUIGC.colorpicker('#colorpicker-example-generic_'+this.instanceId, settings);
    },
    
    salvar: function(){
    	var corSelecionada = $("#colorpicker-example-generic_"+this.instanceId).val();
    	
    	var preferences = {
    	    cor: corSelecionada
    	};
    	  
    	WCMSpaceAPI.PageService.UPDATEPREFERENCES({
    	    async: true,
    	    success: function (data) {
        		FLUIGC.toast({
        			title: "",
        			message: "Os dados foram salvos com sucesso!",
        			type: "success"
        		});
    	    },
    	    
    	    fail: function (xhr, message, errorData) {
        		FLUIGC.toast({
        			title: "",
        			message: "Ops, aconteceu um erro ao salvar!",
        			type: "danger"
        		});
    	    }
    	}, this.instanceId, preferences );
    }

});

