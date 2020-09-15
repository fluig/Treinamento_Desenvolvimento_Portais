<div id="WidgetEventos_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="WidgetEventos.instance()">
	<h1 class="text-center" style="color:${(cor!'')}">Widget Eventos</h1>
	
	<hr />
	
	<h2>Eventos</h2>

	<div class="row">
		<div class="col-md-4">
	        <button type="button" class="btn btn-info" data-evento-1>Clique aqui</button>
	    </div>
	
	    <div class="col-md-4">
	        <button type="button" class="btn btn-primary" data-evento-2>Clique 2x aqui</button>
	    </div>
	    
	    <div class="col-md-4">
	        <button type="button" class="btn btn-warning" data-evento-3>Passe o mouse aqui</button>
	    </div>
	</div>
    
    <h2>Calculadora</h2>
	
    <div class="row">
    	<div class="col-md-4">
    		<div class="form-group">
    			<label for="txt_valor_1_${instanceId}">Valor 1</label>
    			<input type="text" name="txt_valor_1_${instanceId}" id="txt_valor_1_${instanceId}" class="form-control" />
    		</div>
    	</div>
    	
    	<div class="col-md-4">
    		<div class="form-group">
    			<label for="txt_valor_2_${instanceId}">Valor 2</label>
    			<input type="text" name="txt_valor_2_${instanceId}" id="txt_valor_2_${instanceId}" class="form-control" />
    		</div>
    	</div>
    	
    	<div class="col-md-2">
			<i class="flaticon flaticon-minus icon-md botaoCalc fs fs-cursor-pointer" data-calc-sub></i>
			<i class="flaticon flaticon-add-plus icon-md botaoCalc fs-cursor-pointer" data-calc-soma></i>
			<i class="flaticon flaticon-close icon-md botaoCalc fs-cursor-pointer" data-calc-mult></i>
			<i class="flaticon flaticon-discount icon-md botaoCalc fs-cursor-pointer" data-calc-div></i>
	    </div>
	   
    </div>
    
    <div class="row form-horizontal">
    	 <div class="form-group">
	        <label for="txt_resultado_${instanceId}" class="col-md-2 control-label">Resultado</label>
	        <div class="col-md-6">
	            <input type="text" class="form-control" id="txt_resultado_${instanceId}" readonly>
	        </div>
	    </div>
    </div>
</div>

