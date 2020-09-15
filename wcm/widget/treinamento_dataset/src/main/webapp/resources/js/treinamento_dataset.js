var WidgetDataset = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	this.initFilterColleague();
    	this.initPrimeiroDataset();
    	this.initEstado();
    	this.initPais();
    	this.initProduto();
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction']
        },
        global: {}
    },
 
    initFilterColleague: function() {
    	// Busca o dataset
        var dataset = DatasetFactory.getDataset('colleague');
        var users = dataset.values;
     
        var settingsExampleDataset = {
            source: users,
            displayKey: 'colleagueName',
            multiSelect: true,
            style: {
                autocompleteTagClass: 'tag-gray',
                tableSelectedLineClass: 'info'
            },
            table: {
                header: [{
                    'title': 'colleagueName',
                    'size': 'col-xs-9',
                    'dataorder': 'colleagueName',
                    'standard': true
                }],
                renderContent: ['colleagueName']
            }
        };
     
        var filter = FLUIGC.filter('#txt_filter_colleague_'+this.instanceId, settingsExampleDataset);
    },
      
    initPrimeiroDataset: function() {
          // Busca o dataset
          var dataset = DatasetFactory.getDataset('ds_primeiroDataset');
          var dados = dataset.values;
       
          var settingsExampleDataset = {
              source: dados,
              displayKey: 'Produtos',
              multiSelect: true,
              style: {
                  autocompleteTagClass: 'tag-gray',
                  tableSelectedLineClass: 'info'
              },
              table: {
                  header: [{
                      'title': 'Produtos',
                      'size': 'col-xs-9',
                      'dataorder': 'Produtos',
                      'standard': true
                  }],
                  
                  renderContent: ['Produtos']
              }
          };
       
          var filter = FLUIGC.filter('#txt_filter_primeiro_'+this.instanceId, settingsExampleDataset);
     },
     
     initEstado: function() {
           // Busca o dataset
           var dataset = DatasetFactory.getDataset('ds_estado');
           var dados = dataset.values;
        
           var settingsExampleDataset = {
               source: dados,
               displayKey: 'estado',
               multiSelect: true,
               style: {
                   autocompleteTagClass: 'tag-gray',
                   tableSelectedLineClass: 'info'
               },
               table: {
                   header: [{
                       'title': 'estado',
                       'size': 'col-xs-9',
                       'dataorder': 'Produtos',
                       'standard': true
                   }],
                   
                   renderContent: ['estado']
               }
           };
        
           var filter = FLUIGC.filter('#txt_filter_estado_'+this.instanceId, settingsExampleDataset);
      },
      
      initPais: function() {
            // Busca o dataset
            var dataset = DatasetFactory.getDataset('ds_pais');
            var dados = dataset.values;
         
            var settingsExampleDataset = {
                source: dados,
                displayKey: 'pais',
                multiSelect: true,
                style: {
                    autocompleteTagClass: 'tag-gray',
                    tableSelectedLineClass: 'info'
                },
                table: {
                    header: [{
                        'title': 'pais',
                        'size': 'col-xs-9',
                        'dataorder': 'pais',
                        'standard': true
                    }],
                    
                    renderContent: ['pais']
                }
            };
         
            var filter = FLUIGC.filter('#txt_filter_pais_'+this.instanceId, settingsExampleDataset);
       },
       
       initProduto: function() {
             // Busca o dataset
             var dataset = DatasetFactory.getDataset('ds_produto');
             var dados = dataset.values;
          
             var settingsExampleDataset = {
                 source: dados,
                 displayKey: 'nome',
                 multiSelect: true,
                 style: {
                     autocompleteTagClass: 'tag-gray',
                     tableSelectedLineClass: 'info'
                 },
                 table: {
                     header: [{
                         'title': 'pais',
                         'size': 'col-xs-9',
                         'dataorder': 'nome',
                         'standard': true
                     }],
                     
                     renderContent: ['nome']
                 }
             };
          
             var filter = FLUIGC.filter('#txt_filter_produto_'+this.instanceId, settingsExampleDataset);
        }
});

