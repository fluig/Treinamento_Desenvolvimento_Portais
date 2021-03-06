<#import "/wcm.ftl" as wcm/>
<@wcm.header authenticated="true"/>
<!-- WCM Wrapper content -->

<div class="wcm-wrapper-content fluig-style-guide">
	
	<@wcm.menu />

    <!-- Wrapper -->
    <div class="wcm-all-content">
        <div id="wcm-content" class="clearfix wcm-background">
					
			<div class="row">
				<div class="col-md-6">
					<div class="editable-slot slotfull layout-1-1" id="slotContainer001">
					    <@wcm.renderSlot id="Slot001" decorator="false" editableSlot="true" />
					</div>
				</div>
	
				<div class="col-md-6">
					<div class="editable-slot slotfull layout-1-1" id="slotContainer002">
					    <@wcm.renderSlot id="Slot002" decorator="false" editableSlot="true" />
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-6">
					<div class="editable-slot slotfull layout-1-1" id="slotContainer003">
					    <@wcm.renderSlot id="Slot003" decorator="false" editableSlot="true" />
					</div>
				</div>
	
				<div class="col-md-6">
					<div class="editable-slot slotfull layout-1-1" id="slotContainer004">
					    <@wcm.renderSlot id="Slot004" decorator="false" editableSlot="true" />
					</div>
				</div>
			</div>
			
			
            <@wcm.footer layoutuserlabel="wcm.layoutdefault.user" />
        </div>
    </div>
</div>