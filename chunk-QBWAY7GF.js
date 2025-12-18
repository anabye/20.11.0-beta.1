import{a as Pt}from"./chunk-3L6YENU7.js";import{a as xt,b as St}from"./chunk-ZEM5T5RV.js";import{a as ce,b as se,c as pe,d as M,e as ie,f as ne,h as wt}from"./chunk-L2VBZWR4.js";import"./chunk-3CX5E46G.js";import"./chunk-VCC43WNO.js";import{a as Dt}from"./chunk-62RFDZXT.js";import{$ as E,$a as I,$c as B,$d as z,Aa as b,Ae as Ce,Ba as Ee,Be as vt,Bf as gt,Cb as f,Ce as y,Db as v,Dc as mt,Df as yt,Eb as g,Fa as G,Fd as bt,Ff as de,Ga as We,Hc as we,Hd as Ve,Ia as Ke,Ib as Te,If as Fe,Ja as $e,Jf as Ct,Ke as fe,Lb as tt,Ld as P,Le as le,Ma as xe,Mb as J,Na as Se,Ob as Pe,Of as Ie,Pa as Je,Pb as it,Pe as ke,Pf as ge,Qa as Ze,Qc as st,Ra as c,Sa as i,Ta as t,U as Be,Ua as o,Uf as me,V as ue,Wb as nt,Wf as Tt,X as He,Xb as ot,Xc as pt,Ya as Xe,Za as Ye,Zc as L,_ as u,_d as $,a as O,ac as Z,ad as ae,b as Q,bd as H,cd as De,dd as h,ed as K,fb as T,fd as re,fg as ee,ge as ht,hb as x,hd as ct,he as U,ia as X,ib as Y,id as Ae,jb as D,jd as qe,lb as A,ma as Ue,mb as q,mc as at,md as ut,nb as k,nd as Et,ng as te,og as N,pa as p,qc as rt,rb as W,rc as lt,rg as ye,sc as he,sf as _e,tf as ve,ug as Le,wb as e,xa as R,xb as be,xe as ft,yb as et,zc as dt}from"./chunk-MFUCCGPF.js";var Ti=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","templates-before",""]],[["","templates-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Pi=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[enums-before]","[enums-after]","[templates-before]","[templates-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],At=(()=>{let l=class l{constructor(r){this.el=r}ngAfterViewInit(){this.accordions.forEach(r=>{setTimeout(()=>{r.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(r){setTimeout(()=>{let n=this.tabs.tabs.find(a=>a.elementRef.nativeElement.className===`docs-tab-${r}`);if(n){let a=n.elementRef.nativeElement;a.textContent.trim()!==""||a.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(S=>{let C=S.querySelector(".po-tab-button-label");C&&C?.textContent?.trim().toLowerCase()===r&&S.remove()}),a.remove(),n.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(S=>!S.hide)))}},100)}};l.\u0275fac=function(n){return new(n||l)(R(X))},l.\u0275cmp=b({type:l,selectors:[["api-thf-grid"]],viewQuery:function(n,a){if(n&1&&(A(N,5),A(z,5)),n&2){let s;q(s=k())&&(a.tabs=s.first),q(s=k())&&(a.accordions=s)}},standalone:!1,ngContentSelectors:Pi,decls:7176,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Function"],[1,"language-html"],["pan","",1,"docs-api-property-type","Array<ThfTableAction>"],["href","/guides/icons"],[1,"language-typescript"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<ThfAggregateDescriptor>"],["pan","",1,"docs-api-property-type","Array<ThfGridColumn>"],[1,"docs-api-deprecated-marker"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDropdownAction>"],["pan","",1,"docs-api-property-type","{","[key:","string]:","TemplateRef<any>;","}"],["pan","",1,"docs-api-property-type","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicSearchFilters>"],["pan","",1,"docs-api-property-type","'basic'"],["pan","",1,"docs-api-property-type","'service'"],["pan","",1,"docs-api-property-type","ThfGridRowActions"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","null"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","ThfGridLiterals"],["pan","",1,"docs-api-property-type","(()","=>","ThfGridOptions)"],["pan","",1,"docs-api-property-type","Array<ThfGridOptionPaging>"],[1,"language-json"],["pan","",1,"docs-api-property-type","ThfGridDeleteService"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<ThfGridColumnSort>"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],["href","https://tdn.totvs.com/pages/releaseview.action?pageId=871520382"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type","('active'"],["pan","",1,"docs-api-property-type","'removed')"],["p-label","Interfaces"],["p-label","ThfTableAction"],["href","https://po-ui.io/icons"],["p-label","ThfAggregateDescriptor"],["pan","",1,"docs-api-property-type","'sum'"],["pan","",1,"docs-api-property-type","'average'"],["pan","",1,"docs-api-property-type","'count'"],["pan","",1,"docs-api-property-type","'min'"],["pan","",1,"docs-api-property-type","'max'"],["p-label","ThfGridColumnSort"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["p-label","ThfGridColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","PoTableDetail"],["pan","",1,"docs-api-property-type","CustomEditProperties"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["href","/documentation/po-table-cell-template"],["href","/documentation/po-table-column-template"],["p-label","CustomEditProperties"],["href","https://po-ui.io/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","'input'"],["pan","",1,"docs-api-property-type","'number'"],["pan","",1,"docs-api-property-type","'select'"],["pan","",1,"docs-api-property-type","'datepicker'"],["pan","",1,"docs-api-property-type","'switch'"],["pan","",1,"docs-api-property-type","'combo'"],["pan","",1,"docs-api-property-type","'multiselect'"],["pan","",1,"docs-api-property-type","'decimal'"],["pan","",1,"docs-api-property-type","'checkbox'"],["pan","",1,"docs-api-property-type","'lookup'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["pan","",1,"docs-api-property-type","((rowData:","any,","column?:","ThfGridColumn)","=>","boolean)"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","(value:","any)","=>","void"],["pan","",1,"docs-api-property-type","(model:","any)","=>","void"],["pan","",1,"docs-api-property-type","(error:","HttpErrorResponse)","=>","void"],["pan","",1,"docs-api-property-type","(selection:","any"],["pan","",1,"docs-api-property-type","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","'sm'"],["pan","",1,"docs-api-property-type","'md'"],["pan","",1,"docs-api-property-type","'lg'"],["pan","",1,"docs-api-property-type","'xl'"],["pan","",1,"docs-api-property-type","'auto'"],["p-label","ThfGridDeleteService"],["p-label","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","(param:","any)","=>","FormGroup"],["pan","",1,"docs-api-property-type","(data:","any,","columnProperty:","string)","=>","FormGroup"],["p-label","ThfGridLiterals"],["p-label","ThfGridOptionPaging"],["p-label","ThfGridOptions"],["p-label","ThfGridRowActions"],["pan","",1,"docs-api-property-type","(param:","any,","mode:","'edit'"],["pan","",1,"docs-api-property-type","'include')","=>","FormGroup"],["pan","",1,"docs-api-property-type","Observable<FormGroup>"],["pan","",1,"docs-api-property-type","(row:","any)","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","Observable<boolean>"],["pan","",1,"docs-api-property-type","(updatedRow:","any,","originalRow:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","(updatedRows:","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","Array<ThfGridEditModeActionType>"],["pan","",1,"docs-api-property-type","(updatedField:","any,","columnProperty:","string)","=>","boolean"],["p-label","Enums"],["p-label","ThfColumnSpacing"],["p-label","ThfGridEditModeActionType"],["p-label","Templates"],["p-label","ThfGridCellTemplateDirective"],["p-label","ThfGridColumnTemplateDirective"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(n,a){n&1&&(Y(Ti),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),D(4),t(),i(5,"po-tab",4),D(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfGridComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`O grid foi criado para que voc\xEA tenha um controle de alto desempenho, oferecendo uma performance extremamente r\xE1pida,
integrando-se perfeitamente ao seu aplicativo e sendo altamente personaliz\xE1vel.`),t(),i(19,"p"),e(20,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(21,"code"),e(22,"THF-Grid"),t(),e(23,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(24,"code"),e(25,"import { ThfGridComponent } from '@totvs/thf-components';"),t()()(),i(26,"div",11)(27,"h4",12),e(28,"Seletor"),t(),i(29,"pre",13),e(30,`<thf-grid
  t-action-delete="boolean"
  t-action-edit="Function"
  t-action-excel="boolean"
  t-action-pdf="boolean"
  t-actions-right="boolean"
  t-actions="Array<ThfTableAction>"
  t-actions-filter="boolean"
  (t-delete-items)="EventEmitter"
  t-aggregates="Array<ThfAggregateDescriptor>"
  t-allow-batch-delete="boolean"
  t-auto-size="boolean"
  t-auto-size-on-scroll="boolean"
  (t-change-fixed-columns)="EventEmitter"
  (t-change-options-column-manager)="EventEmitter"
  (t-change-row-state-filter)="EventEmitter"
  (t-change-visible-columns)="EventEmitter"
  (t-changed-density)="EventEmitter"
  (t-changed-items)="EventEmitter"
  (t-restore-column-manager)="EventEmitter"
  t-columns="Array<ThfGridColumn>"
  (t-columns-selected)="EventEmitter"
  t-components-size="string"
  t-container="boolean"
  t-custom-actions="Array<PoDropdownAction>"
  (t-custom-filter)="EventEmitter"
  t-custom-templates="{
    [key: string]: TemplateRef<any>;
}"
  (t-delete-item)="EventEmitter"
  t-disabled-include-button="boolean"
  t-draggable="boolean"
  t-edit-properties="ThfGridEditProperties"
  (t-change-page-size)="EventEmitter"
  t-fields="Array<PoPageDynamicSearchFilters>"
  t-filter-input-mode="'basic' | 'service'"
  t-grid-row-actions="ThfGridRowActions"
  t-group="Array<string>"
  t-groupable="boolean | GroupableSettings"
  t-header-template="TemplateRef<void>"
  t-headline-fixed="boolean"
  t-height="number | string | null"
  t-hide-action-fixed-columns="boolean"
  t-hide-batch-actions="boolean"
  t-hide-columns-manager="boolean"
  t-hide-select-all="boolean"
  t-hide-table-search="boolean"
  t-loading="boolean"
  t-items="Array<any>"
  (t-items-after-get)="EventEmitter"
  t-literals="ThfGridLiterals"
  t-max-columns="number"
  t-max-height="number | string | null"
  t-max-resizable-width="number"
  t-min-height="number | string | null"
  t-min-resizable-width="number"
  (t-change-group)="EventEmitter"
  t-load="string | (() => ThfGridOptions)"
  t-options-paging="Array<ThfGridOptionPaging>"
  (t-change-order-column)="EventEmitter"
  t-page-size="number"
  t-page-size-virtual="number"
  t-pageable="boolean"
  t-param-delete-api="string"
  t-resizable="boolean"
  t-row-height="number"
  (t-rows-selected)="EventEmitter"
  t-selectable="boolean"
  t-selectable-entire-line="boolean"
  t-selectable-removed="boolean"
  (t-selected)="EventEmitter"
  (t-all-selected)="EventEmitter"
  t-service-delete-api="string | ThfGridDeleteService"
  t-service-api="string"
  t-show-densification-configuration="boolean"
  t-show-draggable-icon="boolean"
  t-show-footer-aggregates="boolean"
  (t-show-more)="EventEmitter"
  t-show-more-disabled="boolean"
  t-show-more-visible="boolean"
  t-single-select="boolean"
  t-sort="Array<ThfGridColumnSort>"
  (t-change-sort-column)="EventEmitter"
  t-sortable="boolean"
  t-spacing="string"
  t-striped="boolean"
  t-text-wrap="boolean"
  (t-unselected)="EventEmitter"
  (t-all-unselected)="EventEmitter"
  t-virtual-columns="boolean"
  t-virtual-scroll="boolean" >
</thf-grid>
`),t()()(),i(31,"po-accordion-item",14)(32,"h4",15),e(33,"Propriedades"),t(),i(34,"table",16)(35,"tr",17)(36,"th",18),e(37,"Nome"),t(),i(38,"th",18),e(39,"Tipo"),t(),i(40,"th",18),e(41,"Padr\xE3o"),t(),i(42,"th",18),e(43,"Descri\xE7\xE3o"),t()(),i(44,"tr",19)(45,"td",20)(46,"div",21)(47,"span",22),e(48,"t-action-delete"),o(49,"br"),t()()(),i(50,"td",23)(51,"code",24),e(52,"boolean"),t()(),i(53,"td",25)(54,"p")(55,"code"),e(56,"false"),t()()(),i(57,"td",26)(58,"em")(59,"strong"),e(60,"(opcional)"),t()(),i(61,"p"),e(62,"Exibe o bot\xE3o de Excluir. Requer que a propriedade "),i(63,"strong"),e(64,"t-selectable"),t(),e(65," esteja habilitada."),t()()(),i(66,"tr",19)(67,"td",20)(68,"div",21)(69,"span",22),e(70,"t-action-edit"),o(71,"br"),t()()(),i(72,"td",23)(73,"code",27),e(74,"Function"),t()(),i(75,"td",25),e(76,"-"),t(),i(77,"td",26)(78,"em")(79,"strong"),e(80,"(opcional)"),t()(),i(81,"p"),e(82,`Exibe o bot\xE3o de Editar e executa a fun\xE7\xE3o definida ao clicar.
Requer que a propriedade `),i(83,"strong"),e(84,"t-selectable"),t(),e(85," esteja habilitada."),t(),i(86,"pre")(87,"code",28),e(88,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-action-edit]="myFunction.bind(this)"
 [t-selectable]-true
></thf-grid>`),t()()()(),i(89,"tr",19)(90,"td",20)(91,"div",21)(92,"span",22),e(93,"t-action-excel"),o(94,"br"),t()()(),i(95,"td",23)(96,"code",24),e(97,"boolean"),t()(),i(98,"td",25)(99,"p")(100,"code"),e(101,"false"),t()()(),i(102,"td",26)(103,"em")(104,"strong"),e(105,"(opcional)"),t()(),i(106,"p"),e(107,"Exibe o bot\xE3o de Exportar. Requer que a propriedade "),i(108,"strong"),e(109,"t-selectable"),t(),e(110,` esteja habilitada.
Permite realizar o download dos dados do grid no formato `),i(111,"code"),e(112,".xlsx"),t(),e(113,"."),t()()(),i(114,"tr",19)(115,"td",20)(116,"div",21)(117,"span",22),e(118,"t-action-pdf"),o(119,"br"),t()()(),i(120,"td",23)(121,"code",24),e(122,"boolean"),t()(),i(123,"td",25)(124,"p")(125,"code"),e(126,"false"),t()()(),i(127,"td",26)(128,"em")(129,"strong"),e(130,"(opcional)"),t()(),i(131,"p"),e(132,"Exibe o bot\xE3o de Download. Requer que a propriedade "),i(133,"strong"),e(134,"t-selectable"),t(),e(135,` esteja habilitada.
Permite realizar o download dos dados do grid no formato `),i(136,"code"),e(137,"PDF"),t(),e(138,"."),t(),i(139,"blockquote")(140,"p"),e(141,"Todos os dados exportados para PDF utilizar\xE3o a fonte 'Lato', garantindo compatibilidade com a tabela de caracteres ASCII estendida."),t()()()(),i(142,"tr",19)(143,"td",20)(144,"div",21)(145,"span",22),e(146," t-actions-right"),o(147,"br"),t()()(),i(148,"td",23)(149,"code",24),e(150,"boolean"),t()(),i(151,"td",25)(152,"p")(153,"code"),e(154,"false"),t()()(),i(155,"td",26)(156,"em")(157,"strong"),e(158,"(opcional)"),t()(),i(159,"p"),e(160,"Posiciona a coluna de a\xE7\xF5es ("),i(161,"strong"),e(162,"t-actions"),t(),e(163,") \xE0 direita."),t()()(),i(164,"tr",19)(165,"td",20)(166,"div",21)(167,"span",22),e(168,"t-actions"),o(169,"br"),t()()(),i(170,"td",23)(171,"code",29),e(172,"Array<ThfTableAction>"),t()(),i(173,"td",25),e(174,"-"),t(),i(175,"td",26)(176,"em")(177,"strong"),e(178,"(opcional)"),t()(),i(179,"p"),e(180,"Permite definir uma lista de a\xE7\xF5es que implementam a interface "),i(181,"strong"),e(182,"ThfTableAction"),t(),e(183,`, adicionando uma coluna
ao grid. Se houver apenas uma a\xE7\xE3o v\xE1lida, ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrupar m\xFAltiplas a\xE7\xF5es e exibe o \xEDcone `),i(184,"a",30)(185,"strong"),e(186,"an an-caret-circle-right"),t()(),e(187,`. Ao
pressionar o \xEDcone, todas as a\xE7\xF5es ser\xE3o listadas.`),t(),i(188,"p")(189,"strong"),e(190,"A coluna n\xE3o ser\xE1 exibida se:"),t()(),i(191,"ul")(192,"li"),e(193,"a lista contiver valores inv\xE1lidos ou indefinidos;"),t(),i(194,"li"),e(195,"houver apenas uma a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),t()(),i(196,"pre")(197,"code",28),e(198,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-actions]="actionsGrid"
></thf-grid>`),t()(),i(199,"pre")(200,"code",31),e(201,`actionsGrid: Array<ThfTableAction> = [
 {
   label: '',
   action: (e: any) => {
     this.poNotification.information(\`\${e.id} - \${e.name} \`);
   },
   icon: 'ICON_MENU_OPEN',
   fixed: true
 },
];

constructor(private poNotification: PoNotificationService) {}`),t()()()(),i(202,"tr",19)(203,"td",20)(204,"div",21)(205,"span",22),e(206,"t-actions-filter"),o(207,"br"),t()()(),i(208,"td",23)(209,"code",24),e(210,"boolean"),t()(),i(211,"td",25)(212,"p")(213,"code"),e(214,"true"),t()()(),i(215,"td",26)(216,"em")(217,"strong"),e(218,"(opcional)"),t()(),i(219,"p"),e(220,`Exibe o bot\xE3o de Filtros.
Habilita um modal com op\xE7\xF5es adicionais de filtro, caso o output `),i(221,"strong"),e(222,"t-custom-filter"),t(),e(223," n\xE3o esteja em uso."),t()()(),i(224,"tr",19)(225,"td",20)(226,"div",32)(227,"span",33),e(228," (t-delete-items)"),o(229,"br"),t()()(),i(230,"td",23)(231,"code",34),e(232,"EventEmitter"),t()(),i(233,"td",25),e(234,"-"),t(),i(235,"td",26)(236,"em")(237,"strong"),e(238,"(opcional)"),t()(),i(239,"p"),e(240,`Evento disparado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado.
Retorna os itens que permanecem dispon\xEDveis.`),t()()(),i(241,"tr",19)(242,"td",20)(243,"div",21)(244,"span",22),e(245," t-aggregates"),o(246,"br"),t()()(),i(247,"td",23)(248,"code",35),e(249,"Array<ThfAggregateDescriptor>"),t()(),i(250,"td",25)(251,"p")(252,"code"),e(253,"[]"),t()()(),i(254,"td",26)(255,"em")(256,"strong"),e(257,"(opcional)"),t()(),i(258,"p"),e(259,`Possibilita apresentar totalizadores de uma ou mais colunas ao utilizar o recurso de agrupamento de colunas.
Esta propriedade recebe um array com a lista de objetos com formato da interface `),i(260,"code"),e(261,"ThfAggregateDescriptor"),t(),e(262,"."),t()()(),i(263,"tr",19)(264,"td",20)(265,"div",21)(266,"span",22),e(267," t-allow-batch-delete"),o(268,"br"),t()()(),i(269,"td",23)(270,"code",24),e(271,"boolean"),t()(),i(272,"td",25)(273,"p")(274,"code"),e(275,"false"),t()()(),i(276,"td",26)(277,"em")(278,"strong"),e(279,"(opcional)"),t()(),i(280,"p"),e(281,`Habilita a exclus\xE3o em lote dos itens selecionados na grid. Quando ativado, permite que m\xFAltiplos itens sejam exclu\xEDdos de uma vez
ao utilizar `),i(282,"strong"),e(283,"t-service-api"),t(),e(284," e/ou "),i(285,"strong"),e(286,"t-service-delete-api"),t(),e(287,", desde que o servi\xE7o implemente o m\xE9todo "),i(288,"code"),e(289,"deleteBatchItems"),t(),e(290," da interface "),i(291,"code"),e(292,"ThfGridDeleteService"),t(),e(293,"."),t()()(),i(294,"tr",19)(295,"td",20)(296,"div",21)(297,"span",22),e(298,"t-auto-size"),o(299,"br"),t()()(),i(300,"td",23)(301,"code",24),e(302,"boolean"),t()(),i(303,"td",25)(304,"p")(305,"code"),e(306,"false"),t()()(),i(307,"td",26)(308,"em")(309,"strong"),e(310,"(opcional)"),t()(),i(311,"p"),e(312,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(313,"strong"),e(314,"t-resizable"),t(),e(315," esteja habilitada."),t(),i(316,"blockquote")(317,"p"),e(318,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.
Esta propriedade \xE9 incompat\xEDvel quando t-grid-row-actions est\xE1 habilitado.`),t()()()(),i(319,"tr",19)(320,"td",20)(321,"div",21)(322,"span",22),e(323,"t-auto-size-on-scroll"),o(324,"br"),t()()(),i(325,"td",23)(326,"code",24),e(327,"boolean"),t()(),i(328,"td",25)(329,"p")(330,"code"),e(331,"false"),t()()(),i(332,"td",26)(333,"em")(334,"strong"),e(335,"(opcional)"),t()(),i(336,"p"),e(337,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(338,"p"),e(339,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(340,"p"),e(341,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(342,"code"),e(343,"t-page-size-virtual"),t(),e(344," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(345,"blockquote")(346,"p")(347,"strong"),e(348,"Pr\xE9-requisitos"),t(),e(349,": Requer que as propriedades "),i(350,"code"),e(351,"t-auto-size"),t(),e(352,", "),i(353,"code"),e(354,"t-resizable"),t(),e(355,`
e `),i(356,"code"),e(357,"t-virtual-scroll"),t(),e(358," (ou altura fixa via "),i(359,"code"),e(360,"[t-height]"),t(),e(361,") estejam habilitadas."),t()(),i(362,"blockquote")(363,"p")(364,"strong"),e(365,"Incompatibilidade"),t(),e(366,": N\xE3o funciona com "),i(367,"code"),e(368,"t-grid-row-actions"),t(),e(369," habilitado;"),t()(),i(370,"p")(371,"strong"),e(372,"Exemplo de uso:"),t()(),i(373,"pre")(374,"code",28),e(375,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>`),t()()()(),i(376,"tr",19)(377,"td",20)(378,"div",32)(379,"span",33),e(380," (t-change-fixed-columns)"),o(381,"br"),t()()(),i(382,"td",23)(383,"code",34),e(384,"EventEmitter"),t()(),i(385,"td",25),e(386,"-"),t(),i(387,"td",26)(388,"em")(389,"strong"),e(390,"(opcional)"),t()(),i(391,"p"),e(392,`Evento disparado ao fechar o Gerenciar Tabela ap\xF3s alterar as colunas fixas.
Retorna um array de strings com as colunas fixas atualizadas.`),t()()(),i(393,"tr",19)(394,"td",20)(395,"div",32)(396,"span",33),e(397," (t-change-options-column-manager)"),o(398,"br"),t()()(),i(399,"td",23)(400,"code",34),e(401,"EventEmitter"),t()(),i(402,"td",25),e(403,"-"),t(),i(404,"td",26)(405,"em")(406,"strong"),e(407,"(opcional)"),t()(),i(408,"p"),e(409,`Evento disparado ao selecionar a op\xE7\xE3o draggable ou groupable no Gerenciar Tabela.
Retorna um array de strings contendo as a\xE7\xF5es habilitadas.`),t()()(),i(410,"tr",19)(411,"td",20)(412,"div",32)(413,"span",33),e(414," (t-change-row-state-filter)"),o(415,"br"),t()()(),i(416,"td",23)(417,"code",34),e(418,"EventEmitter"),t()(),i(419,"td",25),e(420,"-"),t(),i(421,"td",26)(422,"em")(423,"strong"),e(424,"(opcional)"),t()(),i(425,"p"),e(426,"Evento disparado quando h\xE1 altera\xE7\xE3o no estado de um filtro de linha."),t()()(),i(427,"tr",19)(428,"td",20)(429,"div",32)(430,"span",33),e(431," (t-change-visible-columns)"),o(432,"br"),t()()(),i(433,"td",23)(434,"code",34),e(435,"EventEmitter"),t()(),i(436,"td",25),e(437,"-"),t(),i(438,"td",26)(439,"em")(440,"strong"),e(441,"(opcional)"),t()(),i(442,"p"),e(443,`Evento disparado ao fechar o Gerenciar Tabela ap\xF3s alterar as colunas vis\xEDveis.
Retorna um array de strings com as colunas vis\xEDveis atualizadas.`),t()()(),i(444,"tr",19)(445,"td",20)(446,"div",32)(447,"span",33),e(448," (t-changed-density)"),o(449,"br"),t()()(),i(450,"td",23)(451,"code",34),e(452,"EventEmitter"),t()(),i(453,"td",25),e(454,"-"),t(),i(455,"td",26)(456,"em")(457,"strong"),e(458,"(opcional)"),t()(),i(459,"p"),e(460,"Evento disparado ao selecionar o tipo de densidade no Gerenciar Tabela. Retorna a densidade aplicada."),t()()(),i(461,"tr",19)(462,"td",20)(463,"div",32)(464,"span",33),e(465," (t-changed-items)"),o(466,"br"),t()()(),i(467,"td",23)(468,"code",34),e(469,"EventEmitter"),t()(),i(470,"td",25),e(471,"-"),t(),i(472,"td",26)(473,"em")(474,"strong"),e(475,"(opcional)"),t()(),i(476,"p"),e(477,"Evento emitido quando ocorre uma altera\xE7\xE3o em alguma linha da grid."),t()()(),i(478,"tr",19)(479,"td",20)(480,"div",32)(481,"span",33),e(482," (t-restore-column-manager)"),o(483,"br"),t()()(),i(484,"td",23)(485,"code",34),e(486,"EventEmitter"),t()(),i(487,"td",25),e(488,"-"),t(),i(489,"td",26)(490,"em")(491,"strong"),e(492,"(opcional)"),t()(),i(493,"p"),e(494,`Evento disparado quando pressionado o bot\xE3o 'Restaurar padr\xE3o' no Gerenciar Tabela.
Retorna um array de strings com as colunas vis\xEDveis por padr\xE3o.`),t()()(),i(495,"tr",19)(496,"td",20)(497,"div",21)(498,"span",22),e(499,"t-columns"),o(500,"br"),t()()(),i(501,"td",23)(502,"code",36),e(503,"Array<ThfGridColumn>"),t()(),i(504,"td",25),e(505,"-"),t(),i(506,"td",26)(507,"em")(508,"strong"),e(509,"(opcional)"),t()(),i(510,"p"),e(511,"Permite definir e configurar as colunas do grid que implementam a interface "),i(512,"strong"),e(513,"ThfGridColumn"),t(),e(514,"."),t(),i(515,"pre")(516,"code",28),e(517,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-columns]="columns"
></thf-grid>`),t()(),i(518,"pre")(519,"code",31),e(520,`columns: Array<ThfGridColumn> = [
 { property: 'id', visible: false },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(521,"tr",19)(522,"td",20)(523,"div",32)(524,"span",33),e(525," (t-columns-selected)"),o(526,"br"),t()(),i(527,"div",37),e(528,"Deprecated"),t()(),i(529,"td",23)(530,"code",34),e(531,"EventEmitter"),t()(),i(532,"td",25),e(533,"-"),t(),i(534,"td",26)(535,"p"),e(536,"Retorna um array indicando quais s\xE3o as linhas selecionadas no momento."),t(),i(537,"blockquote")(538,"p")(539,"strong"),e(540,"Nota"),t(),e(541,`: Este evento est\xE1 depreciado e ser\xE1 removido na vers\xE3o 21. Recomendamos
utilizar o evento `),i(542,"code"),e(543,"t-rows-selected"),t(),e(544,", que j\xE1 est\xE1 dispon\xEDvel e oferece a mesma funcionalidade."),t()()()(),i(545,"tr",19)(546,"td",20)(547,"div",21)(548,"span",22),e(549,"t-components-size"),o(550,"br"),t()()(),i(551,"td",23)(552,"code",38),e(553,"string"),t()(),i(554,"td",25)(555,"p")(556,"code"),e(557,"medium"),t()()(),i(558,"td",26)(559,"em")(560,"strong"),e(561,"(opcional)"),t()(),i(562,"p"),e(563,"Define o tamanho dos componentes de formul\xE1rio no grid:"),t(),i(564,"ul")(565,"li")(566,"code"),e(567,"small"),t(),e(568,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(569,"li")(570,"code"),e(571,"medium"),t(),e(572,": aplica a medida medium de cada componente."),t()(),i(573,"blockquote")(574,"p"),e(575,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(576,"code"),e(577,"medium"),t(),e(578,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(579,"a",39),e(580,"po-theme"),t(),e(581,"."),t()()()(),i(582,"tr",19)(583,"td",20)(584,"div",21)(585,"span",22),e(586,"t-container"),o(587,"br"),t()()(),i(588,"td",23)(589,"code",24),e(590,"boolean"),t()(),i(591,"td",25)(592,"p")(593,"code"),e(594,"true"),t()()(),i(595,"td",26)(596,"em")(597,"strong"),e(598,"(opcional)"),t()(),i(599,"p"),e(600,"Adiciona um contorno arredondado ao "),i(601,"code"),e(602,"thf-grid"),t(),e(603,"."),t()()(),i(604,"tr",19)(605,"td",20)(606,"div",21)(607,"span",22),e(608,"t-custom-actions"),o(609,"br"),t()()(),i(610,"td",23)(611,"code",40),e(612,"Array<PoDropdownAction>"),t()(),i(613,"td",25),e(614,"-"),t(),i(615,"td",26)(616,"em")(617,"strong"),e(618,"(opcional)"),t()(),i(619,"p"),e(620,"Permite adicionar a\xE7\xF5es customizadas que implementam a interface "),i(621,"strong"),e(622,"PoDropdownAction"),t(),e(623,`.
Essas a\xE7\xF5es ser\xE3o exibidas no dropdown 'Mais a\xE7\xF5es' ao selecionar um item.
Requer que a propriedade `),i(624,"strong"),e(625,"t-selectable"),t(),e(626," esteja habilitada."),t(),i(627,"pre")(628,"code",28),e(629,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-custom-actions]="customActions"
 [t-selectable]="true"></thf-grid>`),t()(),i(630,"pre")(631,"code",31),e(632,`customActions: Array<PoDropdownAction> = [
 { label: 'Hist\xF3rico', action: this.myAction.bind(this) }];

myAction() {
 window.alert('voce clicou em hist\xF3rico!');
}`),t()()()(),i(633,"tr",19)(634,"td",20)(635,"div",32)(636,"span",33),e(637," (t-custom-filter)"),o(638,"br"),t()()(),i(639,"td",23)(640,"code",34),e(641,"EventEmitter"),t()(),i(642,"td",25),e(643,"-"),t(),i(644,"td",26)(645,"em")(646,"strong"),e(647,"(opcional)"),t()(),i(648,"p"),e(649,"Evento disparado ao clicar no menu Filtros."),t()()(),i(650,"tr",19)(651,"td",20)(652,"div",21)(653,"span",22),e(654,"t-custom-templates"),o(655,"br"),t()()(),i(656,"td",23)(657,"code",41),e(658,`{ [key: string]: TemplateRef<any>;
}`),t()(),i(659,"td",25),e(660,"-"),t(),i(661,"td",26)(662,"em")(663,"strong"),e(664,"(opcional)"),t()(),i(665,"p"),e(666,"Permite a cria\xE7\xE3o de templates customizados para a edi\xE7\xE3o flu\xEDda da grid, como por exemplo:"),t(),i(667,"pre")(668,"code",28),e(669,`// Exemplo de uso:
<thf-grid
 ...
[t-custom-templates]="{ name: customTemplate }"
></thf-grid>
<ng-template #customTemplate let-formControl="formControl">
  <po-input [formControl]="formControl" p-placeholder="CPF" [p-required]="true"></po-input>
</ng-template>`),t()(),i(670,"p"),e(671,"\xC9 obrigat\xF3rio passar o formControl como par\xE2metro do template."),t(),i(672,"p"),e(673,`Os eventos de validate, keydown, blur, additional-help, onChangeModel e change n\xE3o s\xE3o emitidos com o uso de templates customizados,
sendo necess\xE1rio o controle desses eventos dentro do pr\xF3prio componente.`),t(),i(674,"p"),e(675,`Caso utilize a propriedade controlValueWithLabel,
\xE9 necess\xE1rio continuar passando no editProperties em columns, em conjunto com fieldLabel, fieldValue e options caso esteja utilizando.`),t(),i(676,"p"),e(677,"Caso o template n\xE3o seja passado, o componente ser\xE1 renderizado de forma padr\xE3o."),t(),i(678,"p"),e(679,"Caso esteja utilizando o componente po-decimal e esteja configurando a propriedade "),i(680,"code"),e(681,"p-decimals-length"),t(),e(682,`, \xE9 necess\xE1rio continuar
enviando via columns em editProperties.`),t(),i(683,"p"),e(684,'Para que o grid exiba a label "(Obrigat\xF3rio)" na coluna, defina em '),i(685,"code"),e(686,"editProperties"),t(),e(687," a propriedade "),i(688,"code"),e(689,"required"),t(),e(690," como "),i(691,"code"),e(692,"true"),t(),e(693,"."),t(),i(694,"blockquote")(695,"p"),e(696,"Para mais detalhes, consulte o exemplo na aba Overview - Edi\xE7\xE3o flu\xEDda."),t()()()(),i(697,"tr",19)(698,"td",20)(699,"div",32)(700,"span",33),e(701," (t-delete-item)"),o(702,"br"),t()()(),i(703,"td",23)(704,"code",34),e(705,"EventEmitter"),t()(),i(706,"td",25),e(707,"-"),t(),i(708,"td",26)(709,"em")(710,"strong"),e(711,"(opcional)"),t()(),i(712,"p"),e(713,"Evento disparado ao excluir um item. Retorna o item exclu\xEDdo."),t()()(),i(714,"tr",19)(715,"td",20)(716,"div",21)(717,"span",22),e(718,"t-disabled-include-button"),o(719,"br"),t()()(),i(720,"td",23)(721,"code",24),e(722,"boolean"),t()(),i(723,"td",25)(724,"p")(725,"code"),e(726,"false"),t()()(),i(727,"td",26)(728,"em")(729,"strong"),e(730,"(opcional)"),t()(),i(731,"p"),e(732,`Desabilita o bot\xE3o de Incluir. Ao definir como true, o bot\xE3o ser\xE1 desabilitado.
Ideal para cen\xE1rios onde a inclus\xE3o de novas linhas deve ser restrita.`),t()()(),i(733,"tr",19)(734,"td",20)(735,"div",21)(736,"span",22),e(737,"t-draggable"),o(738,"br"),t()()(),i(739,"td",23)(740,"code",24),e(741,"boolean"),t()(),i(742,"td",25)(743,"p")(744,"code"),e(745,"false"),t()()(),i(746,"td",26)(747,"em")(748,"strong"),e(749,"(opcional)"),t()(),i(750,"p"),e(751,"Habilita o Drag and Drop nas colunas."),t()()(),i(752,"tr",19)(753,"td",20)(754,"div",21)(755,"span",22),e(756,"t-edit-properties"),o(757,"br"),t()()(),i(758,"td",23)(759,"code",42),e(760,"ThfGridEditProperties"),t()(),i(761,"td",25),e(762,"-"),t(),i(763,"td",26)(764,"em")(765,"strong"),e(766,"(opcional)"),t()(),i(767,"p"),e(768,"Permite configurar a edi\xE7\xE3o em linha, implementando a interface "),i(769,"strong"),e(770,"ThfGridEditProperties"),t(),e(771,`.
Exemplo de uso na aba Interfaces >> ThfGridEditProperties.`),t(),i(772,"blockquote")(773,"p"),e(774,"Para garantir o correto funcionamento da conclus\xE3o da edi\xE7\xE3o dos dados, \xE9 necess\xE1rio que os dados contenham uma coluna de ID ou que pelo menos uma coluna tenha a propriedade KEY definida como true."),t()()()(),i(775,"tr",19)(776,"td",20)(777,"div",32)(778,"span",33),e(779," (t-change-page-size)"),o(780,"br"),t()()(),i(781,"td",23)(782,"code",34),e(783,"EventEmitter"),t()(),i(784,"td",25),e(785,"-"),t(),i(786,"td",26)(787,"em")(788,"strong"),e(789,"(opcional)"),t()(),i(790,"p"),e(791,"Evento disparado ao alterar a quantidade de itens por p\xE1gina. Retorna um objeto com o page-size atual."),t()()(),i(792,"tr",19)(793,"td",20)(794,"div",21)(795,"span",22),e(796,"t-fields"),o(797,"br"),t()()(),i(798,"td",23)(799,"code",43),e(800,"Array<PoPageDynamicSearchFilters>"),t()(),i(801,"td",25),e(802,"-"),t(),i(803,"td",26)(804,"em")(805,"strong"),e(806,"(opcional)"),t()(),i(807,"p"),e(808,"Permite definir os campos filtr\xE1veis na janela 'Filtros', implementando a interface "),i(809,"strong"),e(810,"PoPageDynamicSearchFilters"),t(),e(811,"."),t(),i(812,"pre")(813,"code",28),e(814,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-fields]="customFields"
></thf-grid>`),t()(),i(815,"pre")(816,"code",31),e(817,"customFields: Array<PoPageDynamicSearchFilters> = [{ property: 'name', required: true, showRequired: true }]"),t()()()(),i(818,"tr",19)(819,"td",20)(820,"div",21)(821,"span",22),e(822,"t-filter-input-mode"),o(823,"br"),t()()(),i(824,"td",23)(825,"code",44),e(826,"'basic' "),t(),i(827,"code",45),e(828," 'service'"),t()(),i(829,"td",25)(830,"p")(831,"code"),e(832,"basic"),t()()(),i(833,"td",26)(834,"em")(835,"strong"),e(836,"(opcional)"),t()(),i(837,"p"),e(838,"Define o modo do filtro para o input de pesquisa."),t()()(),i(839,"tr",19)(840,"td",20)(841,"div",21)(842,"span",22),e(843,"t-grid-row-actions"),o(844,"br"),t()()(),i(845,"td",23)(846,"code",46),e(847,"ThfGridRowActions"),t()(),i(848,"td",25),e(849,"-"),t(),i(850,"td",26)(851,"em")(852,"strong"),e(853,"(opcional)"),t()(),i(854,"p"),e(855,"Configura a edi\xE7\xE3o flu\xEDda, implementando a interface "),i(856,"strong"),e(857,"ThfGridRowActions"),t(),e(858,`.
Permite manipular o comportamento das a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o de itens.
\xC9 poss\xEDvel definir fun\xE7\xF5es espec\xEDficas para controlar as a\xE7\xF5es antes e depois das opera\xE7\xF5es.
Fundamental para implementar um fluxo de manipula\xE7\xE3o de dados totalmente personalizado.`),t(),i(859,"blockquote")(860,"p"),e(861,`Ao habilitar t-grid-row-actions a propriedade t-auto-size \xE9 desabilitada para manter a padroniza\xE7\xE3o das larguras das colunas edit\xE1veis.
Quando o t-grid-row-actions \xE9 habilitado, a propriedade t-resizable \xE9 ativada automaticamente.`),t()()()(),i(862,"tr",19)(863,"td",20)(864,"div",21)(865,"span",22),e(866," t-group"),o(867,"br"),t()()(),i(868,"td",23)(869,"code",47),e(870,"Array<string>"),t()(),i(871,"td",25),e(872,"-"),t(),i(873,"td",26)(874,"em")(875,"strong"),e(876,"(opcional)"),t()(),i(877,"p"),e(878,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(879,"strong"),e(880,"t-groupable"),t(),e(881," esteja habilitada."),t()()(),i(882,"tr",19)(883,"td",20)(884,"div",21)(885,"span",22),e(886,"t-groupable"),o(887,"br"),t()()(),i(888,"td",23)(889,"code",24),e(890,"boolean "),t(),i(891,"code",48),e(892," GroupableSettings"),t()(),i(893,"td",25)(894,"p")(895,"code"),e(896,"false"),t()()(),i(897,"td",26)(898,"em")(899,"strong"),e(900,"(opcional)"),t()(),i(901,"p"),e(902,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(903,"tr",19)(904,"td",20)(905,"div",21)(906,"span",22),e(907,"t-header-template"),o(908,"br"),t()()(),i(909,"td",23)(910,"code",49),e(911,"TemplateRef<void>"),t()(),i(912,"td",25),e(913,"-"),t(),i(914,"td",26)(915,"em")(916,"strong"),e(917,"(opcional)"),t()(),i(918,"p"),e(919,"Container aberto para adicionar conte\xFAdo entre o cabe\xE7alho de a\xE7\xF5es e a lista do grid."),t(),i(920,"pre")(921,"code",28),e(922,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-header-template]="template"
></thf-grid>

<ng-template #template>
 <div style="display: flex; gap: 8px; align-items: center;">
   <po-tag [p-type]="tagTypeDanger" p-value="Remover todos"> </po-tag>
   <po-tag [p-type]="tagTypeInfo" [p-removable]="true" p-value="Brasil"> </po-tag>
   <po-tag [p-type]="tagTypeInfo" [p-removable]="true" p-value="College"> </po-tag>
 </div>
</ng-template>`),t()()()(),i(923,"tr",19)(924,"td",20)(925,"div",21)(926,"span",22),e(927,"t-headline-fixed"),o(928,"br"),t()()(),i(929,"td",23)(930,"code",24),e(931,"boolean"),t()(),i(932,"td",25)(933,"p")(934,"code"),e(935,"false"),t()()(),i(936,"td",26)(937,"em")(938,"strong"),e(939,"(opcional)"),t()(),i(940,"p"),e(941,"Define o cabe\xE7alho do grid como fixo, desde que a altura ("),i(942,"strong"),e(943,"t-height"),t(),e(944,") n\xE3o esteja definida."),t()()(),i(945,"tr",19)(946,"td",20)(947,"div",21)(948,"span",22),e(949,"t-height"),o(950,"br"),t()()(),i(951,"td",23)(952,"code",50),e(953,"number "),t(),i(954,"code",38),e(955," string "),t(),i(956,"code",51),e(957," null"),t()(),i(958,"td",25)(959,"p"),e(960,"100%"),t()(),i(961,"td",26)(962,"em")(963,"strong"),e(964,"(opcional)"),t()(),i(965,"p"),e(966,"Define a altura da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(967,"code"),e(968,'"<n\xFAmero>%"'),t(),e(969,")."),t(),i(970,"ul")(971,"li"),e(972,"Se "),i(973,"strong"),e(974,"n\xE3o informado"),t(),e(975,", a altura da tabela ser\xE1 ajustada automaticamente pela quantidade de itens."),t(),i(976,"li"),e(977,"Caso seja informado um valor inv\xE1lido, ser\xE1 aplicado "),i(978,"strong"),e(979,"100%"),t(),e(980," como padr\xE3o."),t(),i(981,"li"),e(982,"Se "),i(983,"code"),e(984,"t-height"),t(),e(985," for menor que "),i(986,"code"),e(987,"t-min-height"),t(),e(988,", a altura m\xEDnima ser\xE1 aplicada."),t(),i(989,"li"),e(990,"Se "),i(991,"code"),e(992,"t-height"),t(),e(993," for maior que "),i(994,"code"),e(995,"t-max-height"),t(),e(996,", a altura m\xE1xima ser\xE1 aplicada."),t()(),i(997,"blockquote")(998,"p")(999,"strong"),e(1e3,"Observa\xE7\xE3o:"),t(),e(1001," Quando definido, o "),i(1002,"strong"),e(1003,"virtual scroll"),t(),e(1004," ser\xE1 ativado automaticamente. Consulte a documenta\xE7\xE3o da propriedade "),i(1005,"strong"),e(1006,"t-virtual-scroll"),t(),e(1007," para mais detalhes."),t()()()(),i(1008,"tr",19)(1009,"td",20)(1010,"div",21)(1011,"span",22),e(1012,"t-hide-action-fixed-columns"),o(1013,"br"),t()()(),i(1014,"td",23)(1015,"code",24),e(1016,"boolean"),t()(),i(1017,"td",25)(1018,"p")(1019,"code"),e(1020,"false"),t()()(),i(1021,"td",26)(1022,"em")(1023,"strong"),e(1024,"(opcional)"),t()(),i(1025,"p"),e(1026,`Controla a visibilidade da op\xE7\xE3o de fixar colunas no Gerenciar Tabela.
Se alguma coluna j\xE1 estiver fixa quando essa propriedade for habilitada,
ela permanecer\xE1 fixa, garantindo que ocultar as op\xE7\xF5es de fixar n\xE3o afete o estado das colunas j\xE1 fixadas.`),t()()(),i(1027,"tr",19)(1028,"td",20)(1029,"div",21)(1030,"span",22),e(1031," t-hide-batch-actions"),o(1032,"br"),t()()(),i(1033,"td",23)(1034,"code",24),e(1035,"boolean"),t()(),i(1036,"td",25)(1037,"p")(1038,"code"),e(1039,"false"),t()()(),i(1040,"td",26)(1041,"em")(1042,"strong"),e(1043,"(opcional)"),t()(),i(1044,"p"),e(1045,"Permite ocultar as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens."),t()()(),i(1046,"tr",19)(1047,"td",20)(1048,"div",21)(1049,"span",22),e(1050,"t-hide-columns-manager"),o(1051,"br"),t()()(),i(1052,"td",23)(1053,"code",24),e(1054,"boolean"),t()(),i(1055,"td",25)(1056,"p")(1057,"code"),e(1058,"false"),t()()(),i(1059,"td",26)(1060,"em")(1061,"strong"),e(1062,"(opcional)"),t()(),i(1063,"p"),e(1064,"Permite ocultar o bot\xE3o Gerenciar Tabela."),t()()(),i(1065,"tr",19)(1066,"td",20)(1067,"div",21)(1068,"span",22),e(1069,"t-hide-select-all"),o(1070,"br"),t()()(),i(1071,"td",23)(1072,"code",24),e(1073,"boolean"),t()(),i(1074,"td",25)(1075,"p")(1076,"code"),e(1077,"false"),t()()(),i(1078,"td",26)(1079,"em")(1080,"strong"),e(1081,"(opcional)"),t()(),i(1082,"p"),e(1083,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1084,"tr",19)(1085,"td",20)(1086,"div",21)(1087,"span",22),e(1088,"t-hide-table-search"),o(1089,"br"),t()()(),i(1090,"td",23)(1091,"code",24),e(1092,"boolean"),t()(),i(1093,"td",25)(1094,"p")(1095,"code"),e(1096,"false"),t()()(),i(1097,"td",26)(1098,"em")(1099,"strong"),e(1100,"(opcional)"),t()(),i(1101,"p"),e(1102,"Permite ocultar o campo de pesquisa."),t()()(),i(1103,"tr",19)(1104,"td",20)(1105,"div",21)(1106,"span",22),e(1107," t-loading"),o(1108,"br"),t()()(),i(1109,"td",23)(1110,"code",24),e(1111,"boolean"),t()(),i(1112,"td",25)(1113,"p")(1114,"code"),e(1115,"false"),t()()(),i(1116,"td",26)(1117,"em")(1118,"strong"),e(1119,"(opcional)"),t()(),i(1120,"p"),e(1121,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados do grid."),t()()(),i(1122,"tr",19)(1123,"td",20)(1124,"div",21)(1125,"span",22),e(1126,"t-items"),o(1127,"br"),t()()(),i(1128,"td",23)(1129,"code",52),e(1130,"Array<any>"),t()(),i(1131,"td",25),e(1132,"-"),t(),i(1133,"td",26)(1134,"em")(1135,"strong"),e(1136,"(opcional)"),t()(),i(1137,"p"),e(1138,`Permite listar os itens no grid.
Cada item do array representa uma linha no grid e deve conter as propriedades
que correspondem \xE0s colunas definidas no grid.`),t(),i(1139,"pre")(1140,"code",28),e(1141,`// Exemplo de uso:
<thf-grid
 [t-items]="[{ name: 'M\xF4nica'}, { name: 'Cebolinha'}]"
></thf-grid>`),t()()()(),i(1142,"tr",19)(1143,"td",20)(1144,"div",32)(1145,"span",33),e(1146," (t-items-after-get)"),o(1147,"br"),t()()(),i(1148,"td",23)(1149,"code",34),e(1150,"EventEmitter"),t()(),i(1151,"td",25),e(1152,"-"),t(),i(1153,"td",26)(1154,"em")(1155,"strong"),e(1156,"(opcional)"),t()(),i(1157,"p"),e(1158,`Evento disparado ap\xF3s finaliza\xE7\xE3o das requisi\xE7\xF5es de GET.
Dispara no GET inicial caso esteja utilizando `),i(1159,"strong"),e(1160,"t-service-api"),t(),e(1161,`.
Dispara tamb\xE9m no GET de filtros caso esteja utilizando a propriedade `),i(1162,"strong"),e(1163,"t-actions-filter"),t(),e(1164,`
ou no GET do input de pesquisa quando a propriedade `),i(1165,"strong"),e(1166,"t-filter-input-mode"),t(),e(1167," estiver como "),i(1168,"code"),e(1169,"service"),t(),e(1170,`.
Retorna os itens atuais da tabela, o total de itens, n\xFAmero da p\xE1gina atual e pageSize.`),t()()(),i(1171,"tr",19)(1172,"td",20)(1173,"div",21)(1174,"span",22),e(1175,"t-literals"),o(1176,"br"),t()()(),i(1177,"td",23)(1178,"code",53),e(1179,"ThfGridLiterals"),t()(),i(1180,"td",25),e(1181,"-"),t(),i(1182,"td",26)(1183,"em")(1184,"strong"),e(1185,"(opcional)"),t()(),i(1186,"p"),e(1187,"Permite definir literais personalizados para o componente, conforme a interface "),i(1188,"strong"),e(1189,"ThfGridLiterals"),t(),e(1190,"."),t(),i(1191,"pre")(1192,"code",28),e(1193,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-literals]="customLiterals"
></thf-grid>`),t()(),i(1194,"pre")(1195,"code",31),e(1196,"customLiterals: ThfGridLiterals = { advancedSearch: 'Mais filtros' };"),t()()()(),i(1197,"tr",19)(1198,"td",20)(1199,"div",21)(1200,"span",22),e(1201,"t-max-columns"),o(1202,"br"),t()()(),i(1203,"td",23)(1204,"code",50),e(1205,"number"),t()(),i(1206,"td",25),e(1207,"-"),t(),i(1208,"td",26)(1209,"em")(1210,"strong"),e(1211,"(opcional)"),t()(),i(1212,"p"),e(1213,`Define a quantidade m\xE1xima de colunas que ser\xE3o exibidas no grid.
Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o desabilitadas e
caso houver mais colunas vis\xEDveis do que o permitido, as excedentes ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),t()()(),i(1214,"tr",19)(1215,"td",20)(1216,"div",21)(1217,"span",22),e(1218," t-max-height"),o(1219,"br"),t()()(),i(1220,"td",23)(1221,"code",50),e(1222,"number "),t(),i(1223,"code",38),e(1224," string "),t(),i(1225,"code",51),e(1226," null"),t()(),i(1227,"td",25),e(1228,"-"),t(),i(1229,"td",26)(1230,"em")(1231,"strong"),e(1232,"(opcional)"),t()(),i(1233,"p"),e(1234,"Define a "),i(1235,"strong"),e(1236,"altura m\xE1xima"),t(),e(1237," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1238,"code"),e(1239,'"<n\xFAmero>%"'),t(),e(1240,")."),t(),i(1241,"ul")(1242,"li"),e(1243,"Se "),i(1244,"strong"),e(1245,"n\xE3o informado"),t(),e(1246,", a altura m\xE1xima ser\xE1 definida pela propriedade "),i(1247,"code"),e(1248,"t-height"),t(),e(1249,", se existir."),t(),i(1250,"li"),e(1251,"Caso "),i(1252,"code"),e(1253,"t-height"),t(),e(1254," seja "),i(1255,"strong"),e(1256,"maior"),t(),e(1257," que "),i(1258,"code"),e(1259,"t-max-height"),t(),e(1260,", o grid usar\xE1 "),i(1261,"code"),e(1262,"t-max-height"),t(),e(1263," como limite superior."),t(),i(1264,"li"),e(1265,"Caso o valor passado seja inv\xE1lido, "),i(1266,"strong"),e(1267,"nenhuma altura m\xE1xima ser\xE1 aplicada"),t(),e(1268,"."),t()()()(),i(1269,"tr",19)(1270,"td",20)(1271,"div",21)(1272,"span",22),e(1273,"t-max-resizable-width"),o(1274,"br"),t()()(),i(1275,"td",23)(1276,"code",50),e(1277,"number"),t()(),i(1278,"td",25),e(1279,"-"),t(),i(1280,"td",26)(1281,"em")(1282,"strong"),e(1283,"(opcional)"),t()(),i(1284,"p"),e(1285,"Define a largura m\xE1xima para redimensionar uma coluna. Requer que a propriedade "),i(1286,"strong"),e(1287,"t-resizable"),t(),e(1288," esteja habilitada."),t()()(),i(1289,"tr",19)(1290,"td",20)(1291,"div",21)(1292,"span",22),e(1293," t-min-height"),o(1294,"br"),t()()(),i(1295,"td",23)(1296,"code",50),e(1297,"number "),t(),i(1298,"code",38),e(1299," string "),t(),i(1300,"code",51),e(1301," null"),t()(),i(1302,"td",25),e(1303,"-"),t(),i(1304,"td",26)(1305,"em")(1306,"strong"),e(1307,"(opcional)"),t()(),i(1308,"p"),e(1309,"Define a "),i(1310,"strong"),e(1311,"altura m\xEDnima"),t(),e(1312," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1313,"code"),e(1314,'"<n\xFAmero>%"'),t(),e(1315,")."),t(),i(1316,"ul")(1317,"li"),e(1318,"Se "),i(1319,"strong"),e(1320,"n\xE3o informado"),t(),e(1321,", a altura m\xEDnima ser\xE1 definida pela propriedade "),i(1322,"code"),e(1323,"t-height"),t(),e(1324,", se existir."),t(),i(1325,"li"),e(1326,"Caso "),i(1327,"code"),e(1328,"t-height"),t(),e(1329," seja "),i(1330,"strong"),e(1331,"menor"),t(),e(1332," que "),i(1333,"code"),e(1334,"t-min-height"),t(),e(1335,", o grid usar\xE1 "),i(1336,"code"),e(1337,"t-min-height"),t(),e(1338," como limite inferior."),t(),i(1339,"li"),e(1340,"Caso o valor passado seja inv\xE1lido, "),i(1341,"strong"),e(1342,"nenhuma altura m\xEDnima ser\xE1 aplicada"),t(),e(1343,"."),t()()()(),i(1344,"tr",19)(1345,"td",20)(1346,"div",21)(1347,"span",22),e(1348,"t-min-resizable-width"),o(1349,"br"),t()()(),i(1350,"td",23)(1351,"code",50),e(1352,"number"),t()(),i(1353,"td",25)(1354,"p")(1355,"code"),e(1356,"10"),t()()(),i(1357,"td",26)(1358,"em")(1359,"strong"),e(1360,"(opcional)"),t()(),i(1361,"p"),e(1362,"Define a largura m\xEDnima para redimensionar uma coluna. Requer que a propriedade "),i(1363,"strong"),e(1364,"t-resizable"),t(),e(1365," esteja habilitada."),t()()(),i(1366,"tr",19)(1367,"td",20)(1368,"div",32)(1369,"span",33),e(1370," (t-change-group)"),o(1371,"br"),t()()(),i(1372,"td",23)(1373,"code",34),e(1374,"EventEmitter"),t()(),i(1375,"td",25),e(1376,"-"),t(),i(1377,"td",26)(1378,"em")(1379,"strong"),e(1380,"(opcional)"),t()(),i(1381,"p"),e(1382,"Evento disparado quando ocorre o agrupamento no grid. Retorna um array de strings das colunas agrupadas."),t()()(),i(1383,"tr",19)(1384,"td",20)(1385,"div",21)(1386,"span",22),e(1387," t-load"),o(1388,"br"),t()()(),i(1389,"td",23)(1390,"code",38),e(1391,"string "),t(),i(1392,"code",54),e(1393," (() => ThfGridOptions)"),t()(),i(1394,"td",25),e(1395,"-"),t(),i(1396,"td",26)(1397,"em")(1398,"strong"),e(1399,"(opcional)"),t()(),i(1400,"p"),e(1401,`Define dinamicamente as colunas e a\xE7\xF5es do grid ap\xF3s o carregamento inicial dos dados.
Pode ser uma URL que retorna a configura\xE7\xE3o via GET ou uma fun\xE7\xE3o que retorna a configura\xE7\xE3o diretamente.
Quando fun\xE7\xE3o, a propriedade deve implementar a interface `),i(1402,"strong"),e(1403,"ThfGridOptions"),t(),e(1404,"."),t()()(),i(1405,"tr",19)(1406,"td",20)(1407,"div",21)(1408,"span",22),e(1409,"t-options-paging"),o(1410,"br"),t()()(),i(1411,"td",23)(1412,"code",55),e(1413,"Array<ThfGridOptionPaging>"),t()(),i(1414,"td",25),e(1415,"-"),t(),i(1416,"td",26)(1417,"em")(1418,"strong"),e(1419,"(opcional)"),t()(),i(1420,"p"),e(1421,"Define as op\xE7\xF5es de itens por p\xE1gina, implementando a interface "),i(1422,"strong"),e(1423,"ThfGridOptionPaging"),t(),e(1424,`.
Requer que a propriedade `),i(1425,"strong"),e(1426,"t-pageable"),t(),e(1427," esteja habilitada."),t()()(),i(1428,"tr",19)(1429,"td",20)(1430,"div",32)(1431,"span",33),e(1432," (t-change-order-column)"),o(1433,"br"),t()()(),i(1434,"td",23)(1435,"code",34),e(1436,"EventEmitter"),t()(),i(1437,"td",25),e(1438,"-"),t(),i(1439,"td",26)(1440,"em")(1441,"strong"),e(1442,"(opcional)"),t()(),i(1443,"p"),e(1444,`Evento disparado quando a ordem das colunas \xE9 alterada atrav\xE9s do Gerenciar Tabela ou pelo Draggable.
Retorna um array de strings.`),t()()(),i(1445,"tr",19)(1446,"td",20)(1447,"div",21)(1448,"span",22),e(1449,"t-page-size"),o(1450,"br"),t()()(),i(1451,"td",23)(1452,"code",50),e(1453,"number"),t()(),i(1454,"td",25)(1455,"p")(1456,"code"),e(1457,"10"),t()()(),i(1458,"td",26)(1459,"em")(1460,"strong"),e(1461,"(opcional)"),t()(),i(1462,"p"),e(1463,"Define a quantidade de itens default na p\xE1gina. Requer que a propriedade "),i(1464,"strong"),e(1465,"t-pageable"),t(),e(1466," esteja habilitada."),t()()(),i(1467,"tr",19)(1468,"td",20)(1469,"div",21)(1470,"span",22),e(1471,"t-page-size-virtual"),o(1472,"br"),t()()(),i(1473,"td",23)(1474,"code",50),e(1475,"number"),t()(),i(1476,"td",25)(1477,"p")(1478,"code"),e(1479,"60"),t()()(),i(1480,"td",26)(1481,"em")(1482,"strong"),e(1483,"(opcional)"),t()(),i(1484,"p"),e(1485,`Necess\xE1rio quando o virtual scroll est\xE1 habilitado para evitar comportamentos inesperados durante a rolagem.
Recomenda-se que o valor seja pelo menos 3 vezes o n\xFAmero de itens vis\xEDveis no grid.`),t()()(),i(1486,"tr",19)(1487,"td",20)(1488,"div",21)(1489,"span",22),e(1490,"t-pageable"),o(1491,"br"),t()()(),i(1492,"td",23)(1493,"code",24),e(1494,"boolean"),t()(),i(1495,"td",25)(1496,"p")(1497,"code"),e(1498,"false"),t()()(),i(1499,"td",26)(1500,"em")(1501,"strong"),e(1502,"(opcional)"),t()(),i(1503,"p"),e(1504,"Exibe o bot\xE3o 'Carregar mais resultados' e habilita a pagina\xE7\xE3o no Gerenciar Tabela."),t()()(),i(1505,"tr",19)(1506,"td",20)(1507,"div",21)(1508,"span",22),e(1509,"t-param-delete-api"),o(1510,"br"),t()()(),i(1511,"td",23)(1512,"code",38),e(1513,"string"),t()(),i(1514,"td",25),e(1515,"-"),t(),i(1516,"td",26)(1517,"em")(1518,"strong"),e(1519,"(opcional)"),t()(),i(1520,"p"),e(1521,"Define o par\xE2metro para a requisi\xE7\xE3o de DELETE ou POST(caso a propriedade "),i(1522,"code"),e(1523,"t-allow-batch-delete"),t(),e(1524," seja definida)."),t(),i(1525,"p"),e(1526,"Quando "),i(1527,"strong"),e(1528,"t-service-delete-api"),t(),e(1529," estiver configurado e o valor de "),i(1530,"strong"),e(1531,"t-param-delete-api"),t(),e(1532,` n\xE3o for informado,
por padr\xE3o, ser\xE1 enviado `),i(1533,"code"),e(1534,"key"),t(),e(1535," (definido ao usar "),i(1536,"strong"),e(1537,"ThfGridColumn"),t(),e(1538,") ou, na aus\xEAncia, "),i(1539,"code"),e(1540,"id"),t(),e(1541,`. Caso
`),i(1542,"strong"),e(1543,"t-service-delete-api"),t(),e(1544," n\xE3o esteja definido, ser\xE1 considerada a URL de "),i(1545,"strong"),e(1546,"t-service-api"),t(),e(1547,"."),t(),i(1548,"blockquote")(1549,"p"),e(1550,"Durante a exclus\xE3o de um \xFAnico item, ele ser\xE1 enviado como par\xE2metro na URL, conforme o exemplo abaixo:"),t(),i(1551,"pre")(1552,"code"),e(1553,`// Considerando t-param-delete-api="email"
DELETE /items?email=email1@example.com`),t()(),i(1554,"p"),e(1555,"Caso o valor n\xE3o seja uma propriedade v\xE1lida do item, o grid ir\xE1 considerar as keys definidas na coluna"),t(),i(1556,"pre")(1557,"code"),e(1558,`// Considerando t-param-delete-api="propriedadeInexistente" e as colunas "id" e "email" com keys definidas
DELETE /items?propriedadeInexistente=1|email1@example.com`),t()(),i(1559,"p"),e(1560,"Na aus\xEAncia do t-param-delete-api e das keys, o grid ir\xE1 considerar o id do item e enviar diretamente como par\xE2metro na URL:"),t(),i(1561,"pre")(1562,"code"),e(1563,`// Considerando t-param-delete-api="email" e sem keys definidas
DELETE /items/1`),t()()(),i(1564,"blockquote")(1565,"p"),e(1566,"Durante a exclus\xE3o em lote, ele ser\xE1 enviado no corpo da requisi\xE7\xE3o POST como o \xEDndice "),i(1567,"code"),e(1568,"paramDelete"),t(),e(1569,", conforme o exemplo abaixo:"),t(),i(1570,"pre")(1571,"code",56),e(1572,`// Considerando t-param-delete-api="email"
{
  items: [
    { id: '1', email: 'email1@example.com' },
    { id: '2', email: 'email2@example.com' }
  ],
  keys: ['email1@example.com', 'email2@example.com'],
  total: 2,
  paramDelete: "email"
}`),t()()()()(),i(1573,"tr",19)(1574,"td",20)(1575,"div",21)(1576,"span",22),e(1577,"t-resizable"),o(1578,"br"),t()()(),i(1579,"td",23)(1580,"code",24),e(1581,"boolean"),t()(),i(1582,"td",25)(1583,"p")(1584,"code"),e(1585,"false"),t()()(),i(1586,"td",26)(1587,"em")(1588,"strong"),e(1589,"(opcional)"),t()(),i(1590,"p"),e(1591,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1592,"tr",19)(1593,"td",20)(1594,"div",21)(1595,"span",22),e(1596,"t-row-height"),o(1597,"br"),t()()(),i(1598,"td",23)(1599,"code",50),e(1600,"number"),t()(),i(1601,"td",25),e(1602,"-"),t(),i(1603,"td",26)(1604,"em")(1605,"strong"),e(1606,"(opcional)"),t()(),i(1607,"p"),e(1608,`Define a altura da linha quando o virtual scroll est\xE1 habilitado.
Necess\xE1ria para calcular corretamente o n\xFAmero de itens vis\xEDveis e evitar comportamentos inesperados durante a rolagem.
Recomenda-se o uso dessa propriedade ao utilizar colunas com templates personalizados
(`),i(1609,"code"),e(1610,"columnTemplate"),t(),e(1611," e "),i(1612,"code"),e(1613,"cellTemplate"),t(),e(1614,")."),t()()(),i(1615,"tr",19)(1616,"td",20)(1617,"div",32)(1618,"span",33),e(1619," (t-rows-selected)"),o(1620,"br"),t()()(),i(1621,"td",23)(1622,"code",34),e(1623,"EventEmitter"),t()(),i(1624,"td",25),e(1625,"-"),t(),i(1626,"td",26)(1627,"p"),e(1628,"Retorna um array indicando quais s\xE3o as linhas selecionadas no momento."),t()()(),i(1629,"tr",19)(1630,"td",20)(1631,"div",21)(1632,"span",22),e(1633,"t-selectable"),o(1634,"br"),t()()(),i(1635,"td",23)(1636,"code",24),e(1637,"boolean"),t()(),i(1638,"td",25)(1639,"p")(1640,"code"),e(1641,"false"),t()()(),i(1642,"td",26)(1643,"em")(1644,"strong"),e(1645,"(opcional)"),t()(),i(1646,"p"),e(1647,`Habilita a sele\xE7\xE3o de itens, adicionando uma coluna com checkbox.
A sele\xE7\xE3o padr\xE3o \xE9 m\xFAltipla, permitindo selecionar v\xE1rios itens ao mesmo tempo.`),t()()(),i(1648,"tr",19)(1649,"td",20)(1650,"div",21)(1651,"span",22),e(1652,"t-selectable-entire-line"),o(1653,"br"),t()()(),i(1654,"td",23)(1655,"code",24),e(1656,"boolean"),t()(),i(1657,"td",25)(1658,"p")(1659,"code"),e(1660,"true"),t()()(),i(1661,"td",26)(1662,"em")(1663,"strong"),e(1664,"(opcional)"),t()(),i(1665,"p"),e(1666,"Permite selecionar o item ao clicar na linha. Requer que a propriedade "),i(1667,"strong"),e(1668,"t-selectable"),t(),e(1669," esteja habilitada."),t()()(),i(1670,"tr",19)(1671,"td",20)(1672,"div",21)(1673,"span",22),e(1674,"t-selectable-removed"),o(1675,"br"),t()()(),i(1676,"td",23)(1677,"code",24),e(1678,"boolean"),t()(),i(1679,"td",25)(1680,"p")(1681,"code"),e(1682,"false"),t()()(),i(1683,"td",26)(1684,"em")(1685,"strong"),e(1686,"(opcional)"),t()(),i(1687,"p"),e(1688,"Controla se os itens exibidos quando o filtro de estado estiver em 'removed' poder\xE3o ser selecionados."),t()()(),i(1689,"tr",19)(1690,"td",20)(1691,"div",32)(1692,"span",33),e(1693," (t-selected)"),o(1694,"br"),t()()(),i(1695,"td",23)(1696,"code",34),e(1697,"EventEmitter"),t()(),i(1698,"td",25),e(1699,"-"),t(),i(1700,"td",26)(1701,"em")(1702,"strong"),e(1703,"(opcional)"),t()(),i(1704,"p"),e(1705,"Evento disparado quando selecionado um item. Retorna o item selecionado."),t()()(),i(1706,"tr",19)(1707,"td",20)(1708,"div",32)(1709,"span",33),e(1710," (t-all-selected)"),o(1711,"br"),t()()(),i(1712,"td",23)(1713,"code",34),e(1714,"EventEmitter"),t()(),i(1715,"td",25),e(1716,"-"),t(),i(1717,"td",26)(1718,"em")(1719,"strong"),e(1720,"(opcional)"),t()(),i(1721,"p"),e(1722,"Evento disparado quando selecionado todos os itens. Retorna todos os itens selecionados."),t()()(),i(1723,"tr",19)(1724,"td",20)(1725,"div",21)(1726,"span",22),e(1727,"t-service-delete-api"),o(1728,"br"),t()()(),i(1729,"td",23)(1730,"code",38),e(1731,"string "),t(),i(1732,"code",57),e(1733," ThfGridDeleteService"),t()(),i(1734,"td",25),e(1735,"-"),t(),i(1736,"td",26)(1737,"em")(1738,"strong"),e(1739,"(opcional)"),t()(),i(1740,"p"),e(1741,`Respons\xE1vel por excluir o item. Aceita um servi\xE7o que implementa a interface
`),i(1742,"strong"),e(1743,"ThfGridDeleteService"),t(),e(1744," ou uma URL."),t(),i(1745,"p"),e(1746,`Ao selecionar o bot\xE3o de excluir, essa URL ou servi\xE7o ser\xE1 chamado, enviando o par\xE2metro definido na propriedade
`),i(1747,"strong"),e(1748,"t-param-delete-api"),t(),e(1749,". Se configurado e "),i(1750,"strong"),e(1751,"t-param-delete-api"),t(),e(1752," n\xE3o for informado, ser\xE1 enviado "),i(1753,"code"),e(1754,"key"),t(),e(1755,`
(definido ao usar `),i(1756,"strong"),e(1757,"ThfGridColumn"),t(),e(1758,") ou, na aus\xEAncia, "),i(1759,"code"),e(1760,"id"),t(),e(1761,"."),t(),i(1762,"p"),e(1763,"Por padr\xE3o, a exclus\xE3o \xE9 feita item a item. No entanto, ao habilitar a propriedade "),i(1764,"strong"),e(1765,"t-allow-batch-delete"),t(),e(1766,` e utilizar
um servi\xE7o com o m\xE9todo `),i(1767,"code"),e(1768,"deleteBatchItems"),t(),e(1769,", a exclus\xE3o em lote ser\xE1 permitida."),t(),i(1770,"blockquote")(1771,"p"),e(1772,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(1773,"a",58),e(1774,"API do PO UI"),t()()(),i(1775,"blockquote")(1776,"p"),e(1777,"Caso utilize um servi\xE7o "),i(1778,"strong"),e(1779,"ThfGridDeleteService"),t(),e(1780,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(1781,"tr",19)(1782,"td",20)(1783,"div",21)(1784,"span",22),e(1785," t-service-api"),o(1786,"br"),t()()(),i(1787,"td",23)(1788,"code",38),e(1789,"string"),t()(),i(1790,"td",25),e(1791,"-"),t(),i(1792,"td",26)(1793,"em")(1794,"strong"),e(1795,"(opcional)"),t()(),i(1796,"p"),e(1797,"Define a rota da "),i(1798,"code"),e(1799,"API"),t(),e(1800,` para realizar o GET dos itens e popular o grid.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(1801,"code"),e(1802,"API"),t(),e(1803,` esteja preparada para receber uma ou
mais `),i(1804,"code"),e(1805,"keys"),t(),e(1806," concatenadas para identifica\xE7\xE3o do registro. Caso n\xE3o haja "),i(1807,"code"),e(1808,"keys"),t(),e(1809,`,
que implementa a interface `),i(1810,"strong"),e(1811,"ThfGridColumn"),t(),e(1812,", a requisi\xE7\xE3o de exclus\xE3o ocorrer\xE1 pelo "),i(1813,"code"),e(1814,"id"),t(),e(1815,"."),t()()(),i(1816,"tr",19)(1817,"td",20)(1818,"div",21)(1819,"span",22),e(1820,"t-show-densification-configuration"),o(1821,"br"),t()()(),i(1822,"td",23)(1823,"code",24),e(1824,"boolean"),t()(),i(1825,"td",25)(1826,"p")(1827,"code"),e(1828,"false"),t()()(),i(1829,"td",26)(1830,"em")(1831,"strong"),e(1832,"(opcional)"),t()(),i(1833,"p"),e(1834,"Habilita um atalho para alternar o espa\xE7amento das linhas do grid entre os modos "),i(1835,"code"),e(1836,"Compacto"),t(),e(1837," e "),i(1838,"code"),e(1839,"Espa\xE7oso"),t(),e(1840,` no
Gerenciar Tabela.`),t(),i(1841,"blockquote")(1842,"p"),e(1843,"Em n\xEDvel de acessibilidade "),i(1844,"strong"),e(1845,"AA"),t(),e(1846,", a op\xE7\xE3o "),i(1847,"code"),e(1848,"Extra Compacto"),t(),e(1849," tamb\xE9m \xE9 exibida."),t()()()(),i(1850,"tr",19)(1851,"td",20)(1852,"div",21)(1853,"span",22),e(1854,"t-show-draggable-icon"),o(1855,"br"),t()()(),i(1856,"td",23)(1857,"code",24),e(1858,"boolean"),t()(),i(1859,"td",25)(1860,"p")(1861,"code"),e(1862,"false"),t()()(),i(1863,"td",26)(1864,"em")(1865,"strong"),e(1866,"(opcional)"),t()(),i(1867,"p"),e(1868,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1869,"tr",19)(1870,"td",20)(1871,"div",21)(1872,"span",22),e(1873," t-show-footer-aggregates"),o(1874,"br"),t()()(),i(1875,"td",23)(1876,"code",24),e(1877,"boolean"),t()(),i(1878,"td",25)(1879,"p")(1880,"code"),e(1881,"false"),t()()(),i(1882,"td",26)(1883,"em")(1884,"strong"),e(1885,"(opcional)"),t()(),i(1886,"p"),e(1887,"Quando definido true, exibir\xE1 no rodap\xE9 da tabela os totalizadores que foram definidos na propriedade "),i(1888,"code"),e(1889,"t-aggregates"),t(),e(1890,"."),t()()(),i(1891,"tr",19)(1892,"td",20)(1893,"div",32)(1894,"span",33),e(1895," (t-show-more)"),o(1896,"br"),t()()(),i(1897,"td",23)(1898,"code",34),e(1899,"EventEmitter"),t()(),i(1900,"td",25),e(1901,"-"),t(),i(1902,"td",26)(1903,"em")(1904,"strong"),e(1905,"(opcional)"),t()(),i(1906,"p"),e(1907,"Evento disparado quando pressionado o bot\xE3o 'Carregar mais'. Retorna um array do tipo "),i(1908,"strong"),e(1909,"ThfGridColumnSort"),t(),e(1910,`,
caso existam colunas ordenadas definidas.`),t(),i(1911,"blockquote")(1912,"p"),e(1913,"Caso "),i(1914,"strong"),e(1915,"t-items"),t(),e(1916," esteja definido, o uso desse evento se torna obrigat\xF3rio caso queira exibir o bot\xE3o 'Carregar mais'."),t()()()(),i(1917,"tr",19)(1918,"td",20)(1919,"div",21)(1920,"span",22),e(1921,"t-show-more-disabled"),o(1922,"br"),t()()(),i(1923,"td",23)(1924,"code",24),e(1925,"boolean"),t()(),i(1926,"td",25)(1927,"p")(1928,"code"),e(1929,"false"),t()()(),i(1930,"td",26)(1931,"em")(1932,"strong"),e(1933,"(opcional)"),t()(),i(1934,"p"),e(1935,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1936,"tr",19)(1937,"td",20)(1938,"div",21)(1939,"span",22),e(1940,"t-show-more-visible"),o(1941,"br"),t()()(),i(1942,"td",23)(1943,"code",24),e(1944,"boolean"),t()(),i(1945,"td",25)(1946,"p")(1947,"code"),e(1948,"true"),t()()(),i(1949,"td",26)(1950,"em")(1951,"strong"),e(1952,"(opcional)"),t()(),i(1953,"p"),e(1954,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(1955,"strong"),e(1956,"t-pageable"),t(),e(1957," esteja habilitada, ou seja utilizado o evento "),i(1958,"code"),e(1959,"t-show-more"),t(),e(1960," em conjunto com a propriedade "),i(1961,"strong"),e(1962,"t-items"),t(),e(1963,"."),t(),i(1964,"blockquote")(1965,"p"),e(1966,"Caso seja utilizado em conjunto com "),i(1967,"strong"),e(1968,"t-show-more-disabled"),t(),e(1969,", a propriedade "),i(1970,"strong"),e(1971,"t-show-more-visible"),t(),e(1972," ter\xE1 prioridade."),t()()()(),i(1973,"tr",19)(1974,"td",20)(1975,"div",21)(1976,"span",22),e(1977,"t-single-select"),o(1978,"br"),t()()(),i(1979,"td",23)(1980,"code",24),e(1981,"boolean"),t()(),i(1982,"td",25)(1983,"p")(1984,"code"),e(1985,"false"),t()()(),i(1986,"td",26)(1987,"em")(1988,"strong"),e(1989,"(opcional)"),t()(),i(1990,"p"),e(1991,"Define a sele\xE7\xE3o \xFAnica. Requer que a propriedade "),i(1992,"strong"),e(1993,"t-selectable"),t(),e(1994," esteja habilitada."),t()()(),i(1995,"tr",19)(1996,"td",20)(1997,"div",21)(1998,"span",22),e(1999,"t-sort"),o(2e3,"br"),t()()(),i(2001,"td",23)(2002,"code",59),e(2003,"Array<ThfGridColumnSort>"),t()(),i(2004,"td",25),e(2005,"-"),t(),i(2006,"td",26)(2007,"em")(2008,"strong"),e(2009,"(opcional)"),t()(),i(2010,"p"),e(2011,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(2012,"pre")(2013,"code",28),e(2014,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-sort]="sortColumns"
></thf-grid>`),t()(),i(2015,"pre")(2016,"code",31),e(2017,"sortColumns: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(2018,"tr",19)(2019,"td",20)(2020,"div",32)(2021,"span",33),e(2022," (t-change-sort-column)"),o(2023,"br"),t()()(),i(2024,"td",23)(2025,"code",34),e(2026,"EventEmitter"),t()(),i(2027,"td",25),e(2028,"-"),t(),i(2029,"td",26)(2030,"em")(2031,"strong"),e(2032,"(opcional)"),t()(),i(2033,"p"),e(2034,`Evento disparado ao alterar o sort da coluna.
Retorna um array do tipo `),i(2035,"strong"),e(2036,"ThfGridColumnSort"),t(),e(2037," com a regra de sortable e a coluna aplicada."),t()()(),i(2038,"tr",19)(2039,"td",20)(2040,"div",21)(2041,"span",22),e(2042,"t-sortable"),o(2043,"br"),t()()(),i(2044,"td",23)(2045,"code",24),e(2046,"boolean"),t()(),i(2047,"td",25)(2048,"p")(2049,"code"),e(2050,"true"),t()()(),i(2051,"td",26)(2052,"em")(2053,"strong"),e(2054,"(opcional)"),t()(),i(2055,"p"),e(2056,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(2057,"tr",19)(2058,"td",20)(2059,"div",21)(2060,"span",22),e(2061,"t-spacing"),o(2062,"br"),t()()(),i(2063,"td",23)(2064,"code",38),e(2065,"string"),t()(),i(2066,"td",25)(2067,"p")(2068,"code"),e(2069,"medium"),t()()(),i(2070,"td",26)(2071,"em")(2072,"strong"),e(2073,"(opcional)"),t()(),i(2074,"p"),e(2075,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(2076,"strong"),e(2077,"ThfColumnSpacing"),t(),e(2078,"."),t(),i(2079,"blockquote")(2080,"p"),e(2081,"Em n\xEDvel de acessibilidade "),i(2082,"strong"),e(2083,"AA"),t(),e(2084,", caso o valor de "),i(2085,"code"),e(2086,"t-spacing"),t(),e(2087," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),i(2088,"code"),e(2089,"extraSmall"),t(),e(2090,`
nos seguintes cen\xE1rios:`),t(),i(2091,"ul")(2092,"li"),e(2093,"Quando o valor de "),i(2094,"code"),e(2095,"t-components-size"),t(),e(2096," for "),i(2097,"code"),e(2098,"small"),t(),e(2099,";"),t(),i(2100,"li"),e(2101,"Quando o valor padr\xE3o dos componentes for configurado como "),i(2102,"code"),e(2103,"small"),t(),e(2104,` no
`),i(2105,"a",39),e(2106,"servi\xE7o de tema"),t(),e(2107,"."),t()()()()(),i(2108,"tr",19)(2109,"td",20)(2110,"div",21)(2111,"span",22),e(2112,"t-striped"),o(2113,"br"),t()()(),i(2114,"td",23)(2115,"code",24),e(2116,"boolean"),t()(),i(2117,"td",25)(2118,"p")(2119,"code"),e(2120,"true"),t()()(),i(2121,"td",26)(2122,"em")(2123,"strong"),e(2124,"(opcional)"),t()(),i(2125,"p"),e(2126,"Define o estilo listrado no grid (striped)."),t()()(),i(2127,"tr",19)(2128,"td",20)(2129,"div",21)(2130,"span",22),e(2131,"t-text-wrap"),o(2132,"br"),t()()(),i(2133,"td",23)(2134,"code",24),e(2135,"boolean"),t()(),i(2136,"td",25)(2137,"p")(2138,"code"),e(2139,"false"),t()()(),i(2140,"td",26)(2141,"em")(2142,"strong"),e(2143,"(opcional)"),t()(),i(2144,"p"),e(2145,`Define a quebra autom\xE1tica de texto. Quando ativada, o texto que excede o espa\xE7o dispon\xEDvel \xE9 transferido para a
pr\xF3xima linha em pontos apropriados para uma leitura clara.`),t(),i(2146,"blockquote")(2147,"p"),e(2148,"Propriedade incompat\xEDvel quando "),i(2149,"strong"),e(2150,"t-virtual-scroll"),t(),e(2151," est\xE1 habilitado."),t()()()(),i(2152,"tr",19)(2153,"td",20)(2154,"div",32)(2155,"span",33),e(2156," (t-unselected)"),o(2157,"br"),t()()(),i(2158,"td",23)(2159,"code",34),e(2160,"EventEmitter"),t()(),i(2161,"td",25),e(2162,"-"),t(),i(2163,"td",26)(2164,"em")(2165,"strong"),e(2166,"(opcional)"),t()(),i(2167,"p"),e(2168,"Evento disparado quando desselecionado um item. Retorna o item desselecionado."),t()()(),i(2169,"tr",19)(2170,"td",20)(2171,"div",32)(2172,"span",33),e(2173," (t-all-unselected)"),o(2174,"br"),t()()(),i(2175,"td",23)(2176,"code",34),e(2177,"EventEmitter"),t()(),i(2178,"td",25),e(2179,"-"),t(),i(2180,"td",26)(2181,"em")(2182,"strong"),e(2183,"(opcional)"),t()(),i(2184,"p"),e(2185,"Evento disparado quando desselecionado todos os itens. Retorna um array com todos os itens desselecionados."),t()()(),i(2186,"tr",19)(2187,"td",20)(2188,"div",21)(2189,"span",22),e(2190,"t-virtual-columns"),o(2191,"br"),t()()(),i(2192,"td",23)(2193,"code",24),e(2194,"boolean"),t()(),i(2195,"td",25)(2196,"p")(2197,"code"),e(2198,"false"),t()()(),i(2199,"td",26)(2200,"em")(2201,"strong"),e(2202,"(opcional)"),t()(),i(2203,"p"),e(2204,`Define o uso do virtual columns no grid para melhorar a performance com grande volume de colunas.
Recomendamos a utiliza\xE7\xE3o dessa propriedade somente em caso de perda de performance com grande quantidade de colunas.
Existe incompatibilidade com a propriedade `),i(2205,"strong"),e(2206,"t-auto-size"),t(),e(2207," e m\xE9todo "),i(2208,"strong"),e(2209,"autoFitColumns()"),t(),e(2210,`.
Caso a grid tenha mais de 50 colunas o virtual-columns \xE9 ativado.`),t()()(),i(2211,"tr",19)(2212,"td",20)(2213,"div",21)(2214,"span",22),e(2215,"t-virtual-scroll"),o(2216,"br"),t()()(),i(2217,"td",23)(2218,"code",24),e(2219,"boolean"),t()(),i(2220,"td",25)(2221,"p")(2222,"code"),e(2223,"true"),t()()(),i(2224,"td",26)(2225,"em")(2226,"strong"),e(2227,"(opcional)"),t()(),i(2228,"p"),e(2229,`Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados.
Requer que a propriedade `),i(2230,"strong"),e(2231,"t-height"),t(),e(2232," esteja definida."),t(),i(2233,"blockquote")(2234,"p"),e(2235,"Verificar a documenta\xE7\xE3o das seguintes propriedades: "),i(2236,"strong"),e(2237,"t-text-wrap"),t(),e(2238,", "),i(2239,"strong"),e(2240,"t-row-height"),t(),e(2241," e "),i(2242,"strong"),e(2243,"t-page-size-virtual"),t(),e(2244,"."),t()()()()()(),i(2245,"po-accordion-item",60)(2246,"table",61)(2247,"tr",19)(2248,"th",62)(2249,"div",21)(2250,"h4")(2251,"span",22),e(2252," autoFitColumns "),t()()()()(),i(2253,"tr",26)(2254,"td",26)(2255,"p"),e(2256,"Ajusta automaticamente a largura das colunas com base no conte\xFAdo atual das c\xE9lulas."),t(),i(2257,"p"),e(2258,`Este m\xE9todo calcula a largura ideal para cada coluna considerando o conte\xFAdo textual das c\xE9lulas vis\xEDveis,
cabe\xE7alhos das colunas e configura\xE7\xF5es de redimensionamento e tamanho fixo`),t(),i(2259,"p")(2260,"strong"),e(2261,"Exemplo de uso:"),t()(),i(2262,"pre")(2263,"code",31),e(2264,`// Ajusta colunas e mant\xE9m largura total da tabela
this.gridComponent.autoFitColumns(true);

// Ajusta colunas e permite redimensionamento fluido
this.gridComponent.autoFitColumns();`),t()(),i(2265,"blockquote")(2266,"p"),e(2267,"Este m\xE9todo \xE9 chamado automaticamente quando:"),t(),i(2268,"ul")(2269,"li"),e(2270,"A propriedade "),i(2271,"code"),e(2272,"t-auto-size"),t(),e(2273," \xE9 habilitada"),t(),i(2274,"li"),e(2275,"O evento "),i(2276,"code"),e(2277,"t-auto-size-on-scroll"),t(),e(2278," \xE9 disparado durante scroll virtual"),t()()()()()(),i(2279,"h5")(2280,"b"),e(2281,"Par\xE2metros"),t()(),i(2282,"table",16)(2283,"tr",17)(2284,"th",18),e(2285,"Nome"),t(),i(2286,"th",18),e(2287,"Tipo"),t(),i(2288,"th",18),e(2289,"Descri\xE7\xE3o"),t()(),i(2290,"tr",19)(2291,"td",20),e(2292," recalculate"),t(),i(2293,"td",23)(2294,"code",63),e(2295," boolean "),t()(),i(2296,"td",26)(2297,"p"),e(2298,"Quando "),i(2299,"code"),e(2300,"true"),t(),e(2301,`, mant\xE9m a largura total da tabela ap\xF3s o ajuste.
Quando `),i(2302,"code"),e(2303,"false"),t(),e(2304," ou omitido, limpa a largura fixa da tabela para permitir redimensionamento fluido."),t()()()(),o(2305,"br"),i(2306,"table",61)(2307,"tr",19)(2308,"th",62)(2309,"div",21)(2310,"h4")(2311,"span",22),e(2312," cleanRowActionsMode "),t()()()()(),i(2313,"tr",26)(2314,"td",26)(2315,"p"),e(2316,"Aplica o estado default aos itens editados, inclu\xEDdos e removidos do grid."),t(),i(2317,"p"),e(2318,`Usado para aplicar as altera\xE7\xF5es realizadas nos registros do grid, e tamb\xE9m
para remover os itens marcados para exclus\xE3o, de acordo com os par\xE2metros fornecidos.`),t(),i(2319,"pre")(2320,"code"),e(2321,`// Aplica o estado de edi\xE7\xE3o e inclus\xE3o, removendo os itens com $removed
this.cleanRowActionsMode();

// Aplica apenas as edi\xE7\xF5es, sem alterar as inclus\xF5es e exclus\xF5es
this.cleanRowActionsMode(true, false, false);

// Remove apenas os itens com $removed, sem aplicar edi\xE7\xF5es e inclus\xF5es
this.cleanRowActionsMode(false, false, true);`),t()(),i(2322,"p"),e(2323,`Exemplo de uso:
Se voc\xEA precisa aplicar o estado de todas as a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e
remo\xE7\xE3o, basta chamar esta fun\xE7\xE3o. Por exemplo, se houver uma a\xE7\xE3o de aplicar o grid ao
salvar os dados, voc\xEA pode us\xE1-lo da seguinte forma:`),t(),i(2324,"pre")(2325,"code",31),e(2326,`// Ap\xF3s salvar os dados na API, voc\xEA pode limpar todos os estados de a\xE7\xE3o de linha
this.myService.saveData(this.thfGrid.getChangedItems()).subscribe(() => {
  this.thfGrid.cleanRowActionsMode(); // Limpa todas as a\xE7\xF5es de linha ap\xF3s salvar
  console.log('A\xE7\xF5es de linha limpas.');
});`),t()()()()(),i(2327,"h5")(2328,"b"),e(2329,"Par\xE2metros"),t()(),i(2330,"table",16)(2331,"tr",17)(2332,"th",18),e(2333,"Nome"),t(),i(2334,"th",18),e(2335,"Tipo"),t(),i(2336,"th",18),e(2337,"Descri\xE7\xE3o"),t()(),i(2338,"tr",19)(2339,"td",20),e(2340," edit"),t(),i(2341,"td",23)(2342,"code",63),e(2343," boolean "),t()(),i(2344,"td",26)(2345,"p"),e(2346,"Indica se deve aplicar as edi\xE7\xF5es realizadas nas linhas."),t()()(),i(2347,"tr",19)(2348,"td",20),e(2349," include"),t(),i(2350,"td",23)(2351,"code",63),e(2352," boolean "),t()(),i(2353,"td",26)(2354,"p"),e(2355,"Indica se deve aplicar as inclus\xF5es de novas linhas."),t()()(),i(2356,"tr",19)(2357,"td",20),e(2358," del"),t(),i(2359,"td",23)(2360,"code",63),e(2361," boolean "),t()(),i(2362,"td",26)(2363,"p"),e(2364,"Indica se deve remover as linhas marcadas para exclus\xE3o."),t()()()(),o(2365,"br"),i(2366,"table",61)(2367,"tr",19)(2368,"th",62)(2369,"div",21)(2370,"h4")(2371,"span",22),e(2372," deleteItems "),t()()()()(),i(2373,"tr",26)(2374,"td",26)(2375,"p"),e(2376,"Respons\xE1vel pela exclus\xE3o de itens selecionados."),t(),i(2377,"p"),e(2378,"Quando "),i(2379,"strong"),e(2380,"t-items"),t(),e(2381,` est\xE1 definido, a remo\xE7\xE3o pode ser feita em lote, excluindo todas as linhas selecionadas localmente.
Se utilizado com um servi\xE7o (`),i(2382,"strong"),e(2383,"t-service-api"),t(),e(2384," e/ou "),i(2385,"strong"),e(2386,"t-service-delete-api"),t(),e(2387,"), a exclus\xE3o permitida \xE9 de um item por vez."),t(),i(2388,"blockquote")(2389,"p"),e(2390,'Caso utilizado com a "edi\xE7\xE3o flu\xEDda offline via formul\xE1rio (propriedade '),i(2391,"strong"),e(2392,"t-grid-row-actions"),t(),e(2393,`)" remove localmente
as linhas sinalizadas com `),i(2394,"code"),e(2395,"$removed"),t(),e(2396,"."),t()(),i(2397,"blockquote")(2398,"p"),e(2399,"\xC9 poss\xEDvel habilitar a exclus\xE3o em lote com servi\xE7os remotos utilizando a propriedade "),i(2400,"strong"),e(2401,"t-allow-batch-delete"),t(),e(2402," em conjunto com "),i(2403,"strong"),e(2404,"t-service-api"),t(),e(2405," e/ou "),i(2406,"strong"),e(2407,"t-service-delete-api"),t(),e(2408,"."),t()()()()(),o(2409,"br"),i(2410,"table",61)(2411,"tr",19)(2412,"th",62)(2413,"div",21)(2414,"h4")(2415,"span",22),e(2416," getChangedItems "),t()()()()(),i(2417,"tr",26)(2418,"td",26)(2419,"p"),e(2420,"Retorna uma lista dos itens que foram modificados no grid, com a propriedade "),i(2421,"code"),e(2422,"op"),t(),e(2423,` indicando
a a\xE7\xE3o executada sobre cada item, podendo ser 'remove', 'add' ou 'replace'.`),t(),i(2424,"pre")(2425,"code"),e(2426,`// Exemplo de uso:
const changedItems = this.getChangedItems();
console.log(changedItems);
// Sa\xEDda esperada: [{ id: 1, name: 'Item 1', op: 'replace' }, { id: 2, name: 'Item 2', op: 'remove' }]`),t()()()()(),i(2427,"h5")(2428,"b"),e(2429,"Retorno"),t()(),i(2430,"table",16)(2431,"tr",17)(2432,"th",18),e(2433,"Tipo"),t(),i(2434,"th",18),e(2435,"Descri\xE7\xE3o"),t()(),i(2436,"tr",19)(2437,"td",23)(2438,"code",63),e(2439,"Array<any>"),t()(),i(2440,"td",26)(2441,"p"),e(2442,"Uma lista de objetos representando os itens modificados. Cada objeto ter\xE1 a propriedade "),i(2443,"code"),e(2444,"op"),t(),e(2445," que indica a a\xE7\xE3o realizada"),t()()()(),o(2446,"br"),i(2447,"table",61)(2448,"tr",19)(2449,"th",62)(2450,"div",21)(2451,"h4")(2452,"span",22),e(2453," getSelectedRows "),t()()()()(),i(2454,"tr",26)(2455,"td",26)(2456,"p"),e(2457,"Respons\xE1vel por retornar os itens do grid que est\xE3o selecionadas."),t()()()(),o(2458,"br"),i(2459,"table",61)(2460,"tr",19)(2461,"th",62)(2462,"div",21)(2463,"h4")(2464,"span",22),e(2465," showAdditionalHelp "),t()()()()(),i(2466,"tr",26)(2467,"td",26)(2468,"p"),e(2469,"Exibe o conte\xFAdo da propriedade "),i(2470,"code"),e(2471,"helper"),t(),e(2472," durante a edi\xE7\xE3o ("),i(2473,"code"),e(2474,"t-edit-properties"),t(),e(2475," ou "),i(2476,"code"),e(2477,"t-grid-row-actions"),t(),e(2478,`) do grid.
Para isso, ser\xE1 necess\xE1rio ter uma inst\xE2ncia do componente no DOM e configurar uma tecla de atalho utilizando o evento `),i(2479,"code"),e(2480,"t-keydown"),t(),e(2481,"."),t(),i(2482,"pre")(2483,"code"),e(2484,`import { ThfGridComponent } from '@totvs/thf-components';
...
@ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

columns: Array<ThfGridColumn> = [
 ...
 {
   property: 'name',
   label: 'Nome',
   editProperties: {
     componentEditable: 'input',
     helper: 'Nome completo',
     keydown: this.onkeydown.bind(this, 'name')
    }
 },
]

onkeydown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.thfGrid.showAdditionalHelp(property);
 }
}`),t()(),i(2485,"blockquote")(2486,"p"),e(2487,`Com t-grid-row-actions: Alguns atalhos j\xE1 est\xE3o em uso, ent\xE3o, evite sobrescrev\xEA-los. Para mais detalhes,
consulte o `),i(2488,"a",64),e(2489,"TDN"),t(),e(2490,"."),t()()()()(),i(2491,"h5")(2492,"b"),e(2493,"Par\xE2metros"),t()(),i(2494,"table",16)(2495,"tr",17)(2496,"th",18),e(2497,"Nome"),t(),i(2498,"th",18),e(2499,"Tipo"),t(),i(2500,"th",18),e(2501,"Descri\xE7\xE3o"),t()(),i(2502,"tr",19)(2503,"td",20),e(2504," property"),t(),i(2505,"td",23)(2506,"code",63),e(2507," string "),t()(),i(2508,"td",26)(2509,"p"),e(2510,"Identificador da coluna."),t()()()(),o(2511,"br"),i(2512,"table",61)(2513,"tr",19)(2514,"th",62)(2515,"div",21)(2516,"h4")(2517,"span",22),e(2518," selectRowItem "),t()()()()(),i(2519,"tr",26)(2520,"td",26)(2521,"p"),e(2522,"Seleciona um item do grid."),t()()()(),i(2523,"h5")(2524,"b"),e(2525,"Par\xE2metros"),t()(),i(2526,"table",16)(2527,"tr",17)(2528,"th",18),e(2529,"Nome"),t(),i(2530,"th",18),e(2531,"Tipo"),t(),i(2532,"th",18),e(2533,"Descri\xE7\xE3o"),t()(),i(2534,"tr",19)(2535,"td",20),e(2536," item"),t(),i(2537,"td",23)(2538,"code",65),e(2539," { key: value } "),t(),i(2540,"code",27),e(2541," Function "),t()(),i(2542,"td",26)(2543,"p"),e(2544,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),o(2545,"br"),i(2546,"table",61)(2547,"tr",19)(2548,"th",62)(2549,"div",21)(2550,"h4")(2551,"span",22),e(2552," unselectRowItem "),t()()()()(),i(2553,"tr",26)(2554,"td",26)(2555,"p"),e(2556,"Desmarca o item que est\xE1 selecionado."),t()()()(),i(2557,"h5")(2558,"b"),e(2559,"Par\xE2metros"),t()(),i(2560,"table",16)(2561,"tr",17)(2562,"th",18),e(2563,"Nome"),t(),i(2564,"th",18),e(2565,"Tipo"),t(),i(2566,"th",18),e(2567,"Descri\xE7\xE3o"),t()(),i(2568,"tr",19)(2569,"td",20),e(2570," item"),t(),i(2571,"td",23)(2572,"code",65),e(2573," { key: value } "),t(),i(2574,"code",27),e(2575," Function "),t()(),i(2576,"td",26)(2577,"p"),e(2578,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),o(2579,"br"),i(2580,"table",61)(2581,"tr",19)(2582,"th",62)(2583,"div",21)(2584,"h4")(2585,"span",22),e(2586," applyFilters "),t()()()()(),i(2587,"tr",26)(2588,"td",26)(2589,"p"),e(2590,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza o grid."),t(),i(2591,"p"),e(2592,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),t(),i(2593,"pre")(2594,"code"),e(2595,"url + ?page=1&pageSize=10"),t()(),i(2596,"blockquote")(2597,"p"),e(2598,"Obs: os par\xE2metros "),i(2599,"code"),e(2600,"page"),t(),e(2601," e "),i(2602,"code"),e(2603,"pageSize"),t(),e(2604," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),t()(),i(2605,"p"),e(2606,"Caso sejam informados os par\xE2metros "),i(2607,"code"),e(2608,"{ name: 'JOHN', age: '23' }"),t(),e(2609,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),t(),i(2610,"pre")(2611,"code"),e(2612,"url + ?page=1&pageSize=10&name=JOHN&age=23"),t()()()()(),i(2613,"h5")(2614,"b"),e(2615,"Par\xE2metros"),t()(),i(2616,"table",16)(2617,"tr",17)(2618,"th",18),e(2619,"Nome"),t(),i(2620,"th",18),e(2621,"Tipo"),t(),i(2622,"th",18),e(2623,"Descri\xE7\xE3o"),t()(),i(2624,"tr",19)(2625,"td",20),e(2626," queryParams"),t(),i(2627,"td",23)(2628,"code",65),e(2629," { key: value } "),t()(),i(2630,"td",26)(2631,"p"),e(2632,"Formato do objeto a ser enviado."),t(),i(2633,"blockquote")(2634,"p"),e(2635,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),t()()()()(),o(2636,"br"),i(2637,"table",61)(2638,"tr",19)(2639,"th",62)(2640,"div",21)(2641,"h4")(2642,"span",22),e(2643," calculateHeightDynamically "),t()()()()(),i(2644,"tr",26)(2645,"td",26)(2646,"p"),e(2647,"Mant\xE9m compatibilidade com vers\xF5es anteriores, chamando "),i(2648,"code"),e(2649,"calculateDynamicSize"),t(),e(2650," com a propriedade "),i(2651,"code"),e(2652,"'height'"),t(),e(2653,"."),t()()()(),i(2654,"h5")(2655,"b"),e(2656,"Par\xE2metros"),t()(),i(2657,"table",16)(2658,"tr",17)(2659,"th",18),e(2660,"Nome"),t(),i(2661,"th",18),e(2662,"Tipo"),t(),i(2663,"th",18),e(2664,"Descri\xE7\xE3o"),t()(),i(2665,"tr",19)(2666,"td",20),e(2667," callRowHeight"),t(),o(2668,"td",23),i(2669,"td",26)(2670,"p"),e(2671,"Define se o "),i(2672,"code"),e(2673,"calculateRowHeight"),t(),e(2674," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),o(2675,"br"),i(2676,"table",61)(2677,"tr",19)(2678,"th",62)(2679,"div",21)(2680,"h4")(2681,"span",22),e(2682," removeItem "),t()()()()(),i(2683,"tr",26)(2684,"td",26)(2685,"p"),e(2686,"Remove um item localmente do grid."),t()()()(),i(2687,"h5")(2688,"b"),e(2689,"Par\xE2metros"),t()(),i(2690,"table",16)(2691,"tr",17)(2692,"th",18),e(2693,"Nome"),t(),i(2694,"th",18),e(2695,"Tipo"),t(),i(2696,"th",18),e(2697,"Descri\xE7\xE3o"),t()(),i(2698,"tr",19)(2699,"td",20),e(2700," item"),t(),i(2701,"td",23)(2702,"code",50),e(2703," number "),t(),i(2704,"code",65),e(2705," { key: value } "),t()(),i(2706,"td",26)(2707,"p"),e(2708,"\xCDndice ou item que ser\xE1 removido."),t(),i(2709,"blockquote")(2710,"p"),e(2711,"Ao remover o item, a linha que o representa ser\xE1 removida do grid."),t()()()()(),o(2712,"br"),i(2713,"table",61)(2714,"tr",19)(2715,"th",62)(2716,"div",21)(2717,"h4")(2718,"span",22),e(2719," unselectRows "),t()()()()(),i(2720,"tr",26)(2721,"td",26)(2722,"p"),e(2723,"M\xE9todo respons\xE1vel por desmarcar as linhas que est\xE3o selecionadas."),t()()()(),o(2724,"br"),i(2725,"table",61)(2726,"tr",19)(2727,"th",62)(2728,"div",21)(2729,"h4")(2730,"span",22),e(2731," getInfoProperties "),t()()()()(),i(2732,"tr",26)(2733,"td",26)(2734,"p"),e(2735,"M\xE9todo que retorna informa\xE7\xF5es sobre os itens atuais da tabela."),t(),i(2736,"p"),e(2737,"Inclui:"),t(),i(2738,"ul")(2739,"li")(2740,"code"),e(2741,"items"),t(),e(2742,": lista de itens atualmente carregados na tabela."),t(),i(2743,"li")(2744,"code"),e(2745,"total"),t(),e(2746,": total de itens informado pela API atrav\xE9s da propriedade "),i(2747,"code"),e(2748,"total"),t(),e(2749,"; pode ser "),i(2750,"code"),e(2751,"undefined"),t(),e(2752," caso a API n\xE3o informe."),t(),i(2753,"li")(2754,"code"),e(2755,"page"),t(),e(2756,": n\xFAmero da p\xE1gina atual informado pela API ("),i(2757,"code"),e(2758,"itemsByApi.page"),t(),e(2759,"); se n\xE3o existir, utiliza a propriedade local "),i(2760,"code"),e(2761,"page"),t(),e(2762,"."),t(),i(2763,"li")(2764,"code"),e(2765,"pageSize"),t(),e(2766,": quantidade de itens por p\xE1gina informada pela API ("),i(2767,"code"),e(2768,"itemsByApi.pageSize"),t(),e(2769,"); se n\xE3o existir, utiliza a propriedade local "),i(2770,"code"),e(2771,"pageSize"),t(),e(2772,"."),t()()()()(),o(2773,"br"),i(2774,"table",61)(2775,"tr",19)(2776,"th",62)(2777,"div",21)(2778,"h4")(2779,"span",22),e(2780," updateItem "),t()()()()(),i(2781,"tr",26)(2782,"td",26)(2783,"p"),e(2784,"Atualiza um item do grid quando utilizado "),i(2785,"strong"),e(2786,"t-itens"),t(),e(2787,"."),t()()()(),i(2788,"h5")(2789,"b"),e(2790,"Par\xE2metros"),t()(),i(2791,"table",16)(2792,"tr",17)(2793,"th",18),e(2794,"Nome"),t(),i(2795,"th",18),e(2796,"Tipo"),t(),i(2797,"th",18),e(2798,"Descri\xE7\xE3o"),t()(),i(2799,"tr",19)(2800,"td",20),e(2801," item"),t(),i(2802,"td",23)(2803,"code",50),e(2804," number "),t(),i(2805,"code",65),e(2806," { key: value } "),t()(),i(2807,"td",26)(2808,"p"),e(2809,"\xCDndice ou o item que ser\xE1 atualizado."),t()()(),i(2810,"tr",19)(2811,"td",20),e(2812," updatedItem"),t(),i(2813,"td",23)(2814,"code",65),e(2815," { key: value } "),t()(),i(2816,"td",26)(2817,"p"),e(2818,"Item que foi atualizado."),t(),i(2819,"blockquote")(2820,"p"),e(2821,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada no grid."),t()()()()(),o(2822,"br"),i(2823,"table",61)(2824,"tr",19)(2825,"th",62)(2826,"div",21)(2827,"h4")(2828,"span",22),e(2829," calculateDynamicSize "),t()()()()(),i(2830,"tr",26)(2831,"td",26)(2832,"p"),e(2833,"calcula dinamicamente o tamanho da grid com base na porcentagem definida nas propriedades "),i(2834,"strong"),e(2835,"t-height"),t(),e(2836,`,
`),i(2837,"strong"),e(2838,"t-min-height"),t(),e(2839," e "),i(2840,"strong"),e(2841,"t-max-height"),t(),e(2842,"."),t(),i(2843,"p"),e(2844,`Caso a grid esteja dentro de um componente ou elemento que altere sua visibilidade,
\xE9 necess\xE1rio chamar esta fun\xE7\xE3o para garantir um c\xE1lculo correto. Exemplo:`),t(),i(2845,"pre")(2846,"code",28),e(2847,`<po-tabs>
 <po-tab (p-click)="emitClickTab()" p-label="PO Tabs">
   <thf-grid #thfGrid> </thf-grid>
 </po-tab>
</po-tabs>`),t()(),i(2848,"pre")(2849,"code",31),e(2850,`@ViewChild('thfGrid') thfGrid: ThfGridComponent;

emitClickTab() {
 // Time-out necess\xE1rio para garantir que o DOM foi atualizado antes do c\xE1lculo da altura.
 setTimeout(() => {
   this.thfGrid.calculateDynamicSize('height', true);
 }, 100);
}`),t()()()()(),i(2851,"h5")(2852,"b"),e(2853,"Par\xE2metros"),t()(),i(2854,"table",16)(2855,"tr",17)(2856,"th",18),e(2857,"Nome"),t(),i(2858,"th",18),e(2859,"Tipo"),t(),i(2860,"th",18),e(2861,"Descri\xE7\xE3o"),t()(),i(2862,"tr",19)(2863,"td",20),e(2864," property"),t(),o(2865,"td",23),i(2866,"td",26)(2867,"p"),e(2868,"Define qual propriedade ser\xE1 calculada: "),i(2869,"code"),e(2870,"'height'"),t(),e(2871,", "),i(2872,"code"),e(2873,"'minHeight'"),t(),e(2874," ou "),i(2875,"code"),e(2876,"'maxHeight'"),t(),e(2877,"."),t()()(),i(2878,"tr",19)(2879,"td",20),e(2880," callRowHeight"),t(),o(2881,"td",23),i(2882,"td",26)(2883,"p"),e(2884,"Define se o m\xE9todo "),i(2885,"code"),e(2886,"calculateRowHeight"),t(),e(2887," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),o(2888,"br"),i(2889,"table",61)(2890,"tr",19)(2891,"th",62)(2892,"div",21)(2893,"h4")(2894,"span",22),e(2895," isColumnRequired "),t()()()()(),i(2896,"tr",26)(2897,"td",26)(2898,"p"),e(2899,"Verifica se uma coluna \xE9 obrigat\xF3ria na propriedade "),i(2900,"code"),e(2901,"editProperties"),t(),e(2902," ou no "),i(2903,"code"),e(2904,"formGroupIntern"),t()()()()(),o(2905,"br"),i(2906,"table",61)(2907,"tr",19)(2908,"th",62)(2909,"div",21)(2910,"h4")(2911,"span",22),e(2912," setRowStateFilter "),t()()()()(),i(2913,"tr",26)(2914,"td",26)(2915,"p"),e(2916,"Define o filtro de estado das linhas a ser aplicado na exibi\xE7\xE3o da grid."),t(),i(2917,"p"),e(2918,`Este m\xE9todo permite alternar entre a visualiza\xE7\xE3o de itens ativos (n\xE3o removidos) e itens removidos,
filtrando a grid com base na propriedade `),i(2919,"code"),e(2920,"$removed"),t(),e(2921,` dos itens. \xC9 utilizado principalmente em conjunto
com o recurso de edi\xE7\xE3o fluida offline (`),i(2922,"strong"),e(2923,"t-grid-row-actions"),t(),e(2924,")."),t(),i(2925,"p"),e(2926,"Quando o filtro \xE9 alterado:"),t(),i(2927,"ul")(2928,"li"),e(2929,"A grid \xE9 filtrada para exibir apenas os itens que correspondem ao estado selecionado"),t(),i(2930,"li"),e(2931,"A pagina\xE7\xE3o \xE9 reiniciada ("),i(2932,"code"),e(2933,"skip = 0"),t(),e(2934,")"),t(),i(2935,"li"),e(2936,"O label do filtro \xE9 atualizado"),t(),i(2937,"li"),e(2938,"Os agregados totais s\xE3o recalculados"),t(),i(2939,"li"),e(2940,"A sele\xE7\xE3o pode ser desabilitada (no caso de itens removidos)"),t()(),i(2941,"pre")(2942,"code",31),e(2943,`// Exibe apenas itens ativos (n\xE3o removidos)
this.thfGrid.setRowStateFilter('active');

// Exibe apenas itens removidos, for\xE7ando recarregamento da grid
this.thfGrid.setRowStateFilter('removed', true);

// Exibe apenas itens ativos (n\xE3o removidos), sem emitir evento
this.thfGrid.setRowStateFilter('active', false, false);`),t()(),i(2944,"blockquote")(2945,"p"),e(2946,"Quando o filtro \xE9 alterado para "),i(2947,"code"),e(2948,"'removed'"),t(),e(2949,", a sele\xE7\xE3o de linhas \xE9 desabilitada automaticamente."),t(),i(2950,"p"),e(2951,"Ao retornar para "),i(2952,"code"),e(2953,"'active'"),t(),e(2954,", a sele\xE7\xE3o \xE9 restaurada ao seu estado inicial."),t()()()()(),i(2955,"h5")(2956,"b"),e(2957,"Par\xE2metros"),t()(),i(2958,"table",16)(2959,"tr",17)(2960,"th",18),e(2961,"Nome"),t(),i(2962,"th",18),e(2963,"Tipo"),t(),i(2964,"th",18),e(2965,"Descri\xE7\xE3o"),t()(),i(2966,"tr",19)(2967,"td",20),e(2968," filter"),t(),i(2969,"td",23)(2970,"code",66),e(2971," ('active' "),t(),i(2972,"code",67),e(2973," 'removed') "),t()(),i(2974,"td",26)(2975,"p"),e(2976,"Define qual filtro ser\xE1 aplicado:"),t(),i(2977,"ul")(2978,"li")(2979,"code"),e(2980,"'active'"),t(),e(2981,": Exibe apenas itens n\xE3o removidos ("),i(2982,"code"),e(2983,"$removed !== true"),t(),e(2984,")"),t(),i(2985,"li")(2986,"code"),e(2987,"'removed'"),t(),e(2988,": Exibe apenas itens marcados para remo\xE7\xE3o ("),i(2989,"code"),e(2990,"$removed === true"),t(),e(2991,")"),t()()()(),i(2992,"tr",19)(2993,"td",20),e(2994," reloadGrid"),t(),i(2995,"td",23)(2996,"code",63),e(2997," boolean "),t()(),i(2998,"td",26)(2999,"p"),e(3e3,"Indica se a grid deve ser recarregada visualmente:"),t(),i(3001,"ul")(3002,"li"),e(3003,"Quando "),i(3004,"code"),e(3005,"true"),t(),e(3006,", desmarca todas as sele\xE7\xF5es, limpa itens selecionados e for\xE7a uma renderiza\xE7\xE3o completa da grid"),t(),i(3007,"li"),e(3008,"Quando "),i(3009,"code"),e(3010,"false"),t(),e(3011,", apenas aplica o filtro sem recarregar a grid"),t()()()(),i(3012,"tr",19)(3013,"td",20),e(3014," emitEvent"),t(),i(3015,"td",23)(3016,"code",63),e(3017," boolean "),t()(),i(3018,"td",26)(3019,"p"),e(3020,"Indica se o evento "),i(3021,"code"),e(3022,"changeRowStateFilter"),t(),e(3023," deve ser emitido ap\xF3s a altera\xE7\xE3o do filtro:"),t(),i(3024,"ul")(3025,"li"),e(3026,"Quando "),i(3027,"code"),e(3028,"true"),t(),e(3029,", o evento \xE9 emitido com o novo valor do filtro"),t(),i(3030,"li"),e(3031,"Quando "),i(3032,"code"),e(3033,"false"),t(),e(3034,", o evento n\xE3o \xE9 emitido"),t()()()()(),o(3035,"br"),i(3036,"table",61)(3037,"tr",19)(3038,"th",62)(3039,"div",21)(3040,"h4")(3041,"span",22),e(3042," getDestructiveModalTitle "),t()()()()(),i(3043,"tr",26)(3044,"td",26)(3045,"p"),e(3046,"Retorna o t\xEDtulo do modal destrutivo com base no tipo de a\xE7\xE3o"),t()()()(),o(3047,"br"),t()()(),D(3048,2),t(),i(3049,"po-tab",68),D(3050,3),i(3051,"po-container",5)(3052,"po-accordion",6)(3053,"po-accordion-item",69)(3054,"h4",9)(3055,"code"),e(3056,"ThfTableAction"),t()(),i(3057,"div",10)(3058,"p"),e(3059," Interface para configura\xE7\xE3o das a\xE7\xF5es."),t()(),i(3060,"h4",15),e(3061,"Propriedades"),t(),i(3062,"table",16)(3063,"tr",17)(3064,"th",18),e(3065,"Nome"),t(),i(3066,"th",18),e(3067,"Tipo"),t(),i(3068,"th",18),e(3069,"Descri\xE7\xE3o"),t()(),i(3070,"tr",19)(3071,"td",20)(3072,"div",21)(3073,"span",22),e(3074," action"),o(3075,"br"),t()()(),i(3076,"td",23)(3077,"code",27),e(3078,"Function"),t()(),i(3079,"td",26)(3080,"em")(3081,"strong"),e(3082,"(opcional)"),t()(),i(3083,"p"),e(3084,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),i(3085,"p"),e(3086,"No componente "),i(3087,"code"),e(3088,"po-dropdown"),t(),e(3089,", a action tamb\xE9m pode ser executada para o agrupador de subitens."),t(),i(3090,"blockquote")(3091,"p"),e(3092,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),i(3093,"em"),e(3094,"bind"),t(),e(3095,"."),t()(),i(3096,"p"),e(3097,"Exemplo: "),i(3098,"code"),e(3099,"action: this.myFunction.bind(this)"),t()()()(),i(3100,"tr",19)(3101,"td",20)(3102,"div",21)(3103,"span",22),e(3104," disabled"),o(3105,"br"),t()()(),i(3106,"td",23)(3107,"code",24),e(3108,"boolean "),t(),i(3109,"code",27),e(3110," Function"),t()(),i(3111,"td",26)(3112,"em")(3113,"strong"),e(3114,"(opcional)"),t()(),i(3115,"p"),e(3116,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),i(3117,"p"),e(3118,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),i(3119,"tr",19)(3120,"td",20)(3121,"div",21)(3122,"span",22),e(3123," fixed"),o(3124,"br"),t()()(),i(3125,"td",23)(3126,"code",24),e(3127,"boolean"),t()(),i(3128,"td",26)(3129,"em")(3130,"strong"),e(3131,"(opcional)"),t()(),i(3132,"p"),e(3133,"Propriedade para fixar a a\xE7\xE3o"),t()()(),i(3134,"tr",19)(3135,"td",20)(3136,"div",21)(3137,"span",22),e(3138," icon"),o(3139,"br"),t()()(),i(3140,"td",23)(3141,"code",38),e(3142,"string "),t(),i(3143,"code",49),e(3144," TemplateRef<void>"),t()(),i(3145,"td",26)(3146,"em")(3147,"strong"),e(3148,"(opcional)"),t()(),i(3149,"p"),e(3150,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),i(3151,"p"),e(3152,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),i(3153,"a",70),e(3154,"Biblioteca de \xEDcones"),t(),e(3155,". conforme exemplo abaixo:"),t(),i(3156,"pre")(3157,"code"),e(3158,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>`),t()(),i(3159,"p"),e(3160,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),i(3161,"pre")(3162,"code"),e(3163,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>`),t()(),i(3164,"p"),e(3165,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),i(3166,"code"),e(3167,"TemplateRef"),t(),e(3168,`, conforme exemplo abaixo:
component.html:`),t(),i(3169,"pre")(3170,"code"),e(3171,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>`),t()(),i(3172,"p"),e(3173,"component.ts:"),t(),i(3174,"pre")(3175,"code"),e(3176,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];`),t()()()(),i(3177,"tr",19)(3178,"td",20)(3179,"div",21)(3180,"span",22),e(3181," label"),o(3182,"br"),t()()(),i(3183,"td",23)(3184,"code",38),e(3185,"string"),t()(),i(3186,"td",26)(3187,"p"),e(3188,"R\xF3tulo da a\xE7\xE3o."),t(),i(3189,"p"),e(3190,"No componente "),i(3191,"code"),e(3192,"po-dropdown"),t(),e(3193,", a label tamb\xE9m pode representar o agrupador de subitens."),t()()(),i(3194,"tr",19)(3195,"td",20)(3196,"div",21)(3197,"span",22),e(3198," selected"),o(3199,"br"),t()()(),i(3200,"td",23)(3201,"code",24),e(3202,"boolean"),t()(),i(3203,"td",26)(3204,"em")(3205,"strong"),e(3206,"(opcional)"),t()(),i(3207,"p"),e(3208,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),i(3209,"tr",19)(3210,"td",20)(3211,"div",21)(3212,"span",22),e(3213," separator"),o(3214,"br"),t()()(),i(3215,"td",23)(3216,"code",24),e(3217,"boolean"),t()(),i(3218,"td",26)(3219,"em")(3220,"strong"),e(3221,"(opcional)"),t()(),i(3222,"p"),e(3223,"Atribui uma linha separadora acima do item."),t()()(),i(3224,"tr",19)(3225,"td",20)(3226,"div",21)(3227,"span",22),e(3228," type"),o(3229,"br"),t()()(),i(3230,"td",23)(3231,"code",38),e(3232,"string"),t()(),i(3233,"td",26)(3234,"em")(3235,"strong"),e(3236,"(opcional)"),t()(),i(3237,"p"),e(3238,"Define a cor do item, sendo "),i(3239,"code"),e(3240,"default"),t(),e(3241," o padr\xE3o."),t(),i(3242,"p"),e(3243,"Valores v\xE1lidos:"),t(),i(3244,"ul")(3245,"li")(3246,"code"),e(3247,"default"),t()(),i(3248,"li")(3249,"code"),e(3250,"danger"),t(),e(3251," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),i(3252,"tr",19)(3253,"td",20)(3254,"div",21)(3255,"span",22),e(3256," url"),o(3257,"br"),t()()(),i(3258,"td",23)(3259,"code",38),e(3260,"string"),t()(),i(3261,"td",26)(3262,"em")(3263,"strong"),e(3264,"(opcional)"),t()(),i(3265,"p"),e(3266,"URL utilizada para redirecionamento das p\xE1ginas."),t(),i(3267,"p"),e(3268,"No componente "),i(3269,"code"),e(3270,"po-dropdown"),t(),e(3271,`, a url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),i(3272,"code"),e(3273,"url"),t(),e(3274," \xE9 informada em um agrupador, o clique "),i(3275,"strong"),e(3276,"n\xE3o abrir\xE1 os subitens"),t(),e(3277,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),t()()(),i(3278,"tr",19)(3279,"td",20)(3280,"div",21)(3281,"span",22),e(3282," visible"),o(3283,"br"),t()()(),i(3284,"td",23)(3285,"code",24),e(3286,"boolean "),t(),i(3287,"code",27),e(3288," Function"),t()(),i(3289,"td",26)(3290,"em")(3291,"strong"),e(3292,"(opcional)"),t()(),i(3293,"p"),e(3294,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),i(3295,"blockquote")(3296,"p"),e(3297,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),i(3298,"p"),e(3299,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),i(3300,"ul")(3301,"li")(3302,"p"),e(3303,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),i(3304,"li")(3305,"p"),e(3306,"Informar diretamente um valor booleano."),t()()()()()()(),i(3307,"po-accordion-item",71)(3308,"h4",9)(3309,"code"),e(3310,"ThfAggregateDescriptor"),t()(),i(3311,"div",10)(3312,"p"),e(3313,"Recebe um objeto contendo a coluna, uma label e a fun\xE7\xE3o que ser\xE1 aplicada para o c\xE1lculo do totalizador."),t()(),i(3314,"h4",15),e(3315,"Propriedades"),t(),i(3316,"table",16)(3317,"tr",17)(3318,"th",18),e(3319,"Nome"),t(),i(3320,"th",18),e(3321,"Tipo"),t(),i(3322,"th",18),e(3323,"Descri\xE7\xE3o"),t()(),i(3324,"tr",19)(3325,"td",20)(3326,"div",21)(3327,"span",22),e(3328," aggregate"),o(3329,"br"),t()()(),i(3330,"td",23)(3331,"code",72),e(3332,"'sum' "),t(),i(3333,"code",73),e(3334," 'average' "),t(),i(3335,"code",74),e(3336," 'count' "),t(),i(3337,"code",75),e(3338," 'min' "),t(),i(3339,"code",76),e(3340," 'max'"),t()(),i(3341,"td",26)(3342,"p"),e(3343,"Propriedade que recebe a fun\xE7\xE3o para o c\xE1lculo."),t()()(),i(3344,"tr",19)(3345,"td",20)(3346,"div",21)(3347,"span",22),e(3348," field"),o(3349,"br"),t()()(),i(3350,"td",23)(3351,"code",38),e(3352,"string"),t()(),i(3353,"td",26)(3354,"p"),e(3355,"Coluna que ser\xE1 utilizada pelo totalizador."),t()()(),i(3356,"tr",19)(3357,"td",20)(3358,"div",21)(3359,"span",22),e(3360," label"),o(3361,"br"),t()()(),i(3362,"td",23)(3363,"code",38),e(3364,"string"),t()(),i(3365,"td",26)(3366,"em")(3367,"strong"),e(3368,"(opcional)"),t()(),i(3369,"p"),e(3370,"Texto que ser\xE1 exibido junto ao resultado."),t()()()()(),i(3371,"po-accordion-item",77)(3372,"h4",9)(3373,"code"),e(3374,"ThfGridColumnSort"),t()(),i(3375,"div",10)(3376,"p"),e(3377,"Interface para definir a ordena\xE7\xE3o das colunas ("),i(3378,"strong"),e(3379,"t-sort"),t(),e(3380,")."),t()(),i(3381,"h4",15),e(3382,"Propriedades"),t(),i(3383,"table",16)(3384,"tr",17)(3385,"th",18),e(3386,"Nome"),t(),i(3387,"th",18),e(3388,"Tipo"),t(),i(3389,"th",18),e(3390,"Descri\xE7\xE3o"),t()(),i(3391,"tr",19)(3392,"td",20)(3393,"div",21)(3394,"span",22),e(3395," dir"),o(3396,"br"),t()()(),i(3397,"td",23)(3398,"code",78),e(3399,"'asc' "),t(),i(3400,"code",79),e(3401," 'desc'"),t()(),i(3402,"td",26)(3403,"em")(3404,"strong"),e(3405,"(opcional)"),t()(),i(3406,"p"),e(3407,"Dire\xE7\xE3o da coluna:"),t(),i(3408,"ul")(3409,"li")(3410,"code"),e(3411,"asc"),t()(),i(3412,"li")(3413,"code"),e(3414,"desc"),t()()()()(),i(3415,"tr",19)(3416,"td",20)(3417,"div",21)(3418,"span",22),e(3419," field"),o(3420,"br"),t()()(),i(3421,"td",23)(3422,"code",38),e(3423,"string"),t()(),i(3424,"td",26)(3425,"p"),e(3426,"Coluna"),t()()()()(),i(3427,"po-accordion-item",80)(3428,"h4",9)(3429,"code"),e(3430,"ThfGridColumn"),t()(),i(3431,"div",10)(3432,"p"),e(3433,"Interface para configura\xE7\xE3o das colunas ("),i(3434,"strong"),e(3435,"t-columns"),t(),e(3436,")."),t()(),i(3437,"h4",15),e(3438,"Propriedades"),t(),i(3439,"table",16)(3440,"tr",17)(3441,"th",18),e(3442,"Nome"),t(),i(3443,"th",18),e(3444,"Tipo"),t(),i(3445,"th",18),e(3446,"Descri\xE7\xE3o"),t()(),i(3447,"tr",19)(3448,"td",20)(3449,"div",21)(3450,"span",22),e(3451," action"),o(3452,"br"),t()()(),i(3453,"td",23)(3454,"code",27),e(3455,"Function"),t()(),i(3456,"td",26)(3457,"em")(3458,"strong"),e(3459,"(opcional)"),t()(),i(3460,"p"),e(3461,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),i(3462,"code"),e(3463,"link"),t(),e(3464," ou "),i(3465,"code"),e(3466,"icon"),t(),e(3467,"."),t(),i(3468,"blockquote")(3469,"p"),e(3470,"Quando for do tipo "),i(3471,"code"),e(3472,"link"),t(),e(3473,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),t()(),i(3474,"blockquote")(3475,"p"),e(3476,"Quando for do tipo "),i(3477,"code"),e(3478,"icon"),t(),e(3479," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),t()()()(),i(3480,"tr",19)(3481,"td",20)(3482,"div",21)(3483,"span",22),e(3484," boolean"),o(3485,"br"),t()()(),i(3486,"td",23)(3487,"code",81),e(3488,"PoTableBoolean"),t()(),i(3489,"td",26)(3490,"em")(3491,"strong"),e(3492,"(opcional)"),t()(),i(3493,"p"),e(3494,"Define um objeto do tipo "),i(3495,"code"),e(3496,"PoTableBoolean"),t(),e(3497," para as colunas do tipo "),i(3498,"em"),e(3499,"boolean"),t(),e(3500,". Por exemplo:"),t(),i(3501,"pre")(3502,"code"),e(3503,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(3504,"blockquote")(3505,"p"),e(3506,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(3507,"em"),e(3508,"boolean"),t(),e(3509,`,
esta exibir\xE1 por padr\xE3o `),i(3510,"code"),e(3511,"Sim"),t(),e(3512," e "),i(3513,"code"),e(3514,"N\xE3o"),t(),e(3515," de acordo com os valores "),i(3516,"em"),e(3517,"booleanos"),t(),e(3518,"."),t()()()(),i(3519,"tr",19)(3520,"td",20)(3521,"div",21)(3522,"span",22),e(3523," booleanFalse"),o(3524,"br"),t()()(),i(3525,"td",23)(3526,"code",38),e(3527,"string"),t()(),i(3528,"td",26)(3529,"em")(3530,"strong"),e(3531,"(opcional)"),t()(),i(3532,"p"),e(3533,"Texto exibido quando o valor da coluna for "),i(3534,"em"),e(3535,"false"),t(),e(3536,"."),t()()(),i(3537,"tr",19)(3538,"td",20)(3539,"div",21)(3540,"span",22),e(3541," booleanTrue"),o(3542,"br"),t()()(),i(3543,"td",23)(3544,"code",38),e(3545,"string"),t()(),i(3546,"td",26)(3547,"em")(3548,"strong"),e(3549,"(opcional)"),t()(),i(3550,"p"),e(3551,"Texto exibido quando o valor da coluna for "),i(3552,"em"),e(3553,"true"),t(),e(3554,"."),t()()(),i(3555,"tr",19)(3556,"td",20)(3557,"div",21)(3558,"span",22),e(3559," color"),o(3560,"br"),t()()(),i(3561,"td",23)(3562,"code",38),e(3563,"string "),t(),i(3564,"code",27),e(3565," Function"),t()(),i(3566,"td",26)(3567,"em")(3568,"strong"),e(3569,"(opcional)"),t()(),i(3570,"p"),e(3571,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),t(),i(3572,"p"),e(3573,"Valores v\xE1lidos:"),t(),i(3574,"ul")(3575,"li"),o(3576,"span",82),i(3577,"code"),e(3578,"color-01"),t()(),i(3579,"li"),o(3580,"span",83),i(3581,"code"),e(3582,"color-02"),t()(),i(3583,"li"),o(3584,"span",84),i(3585,"code"),e(3586,"color-03"),t()(),i(3587,"li"),o(3588,"span",85),i(3589,"code"),e(3590,"color-04"),t()(),i(3591,"li"),o(3592,"span",86),i(3593,"code"),e(3594,"color-05"),t()(),i(3595,"li"),o(3596,"span",87),i(3597,"code"),e(3598,"color-06"),t()(),i(3599,"li"),o(3600,"span",88),i(3601,"code"),e(3602,"color-07"),t()(),i(3603,"li"),o(3604,"span",89),i(3605,"code"),e(3606,"color-08"),t()(),i(3607,"li"),o(3608,"span",90),i(3609,"code"),e(3610,"color-09"),t()(),i(3611,"li"),o(3612,"span",91),i(3613,"code"),e(3614,"color-10"),t()(),i(3615,"li"),o(3616,"span",92),i(3617,"code"),e(3618,"color-11"),t()(),i(3619,"li"),o(3620,"span",93),i(3621,"code"),e(3622,"color-12"),t()()(),i(3623,"blockquote")(3624,"p"),e(3625,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),t()(),i(3626,"pre")(3627,"code"),e(3628,"(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }"),t()(),i(3629,"blockquote")(3630,"p"),e(3631,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),i(3632,"code"),e(3633,"icons"),t(),e(3634,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),t()(),i(3635,"pre")(3636,"code"),e(3637,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},`),t()()()(),i(3638,"tr",19)(3639,"td",20)(3640,"div",21)(3641,"span",22),e(3642," detail"),o(3643,"br"),t()()(),i(3644,"td",23)(3645,"code",94),e(3646,"PoTableDetail"),t()(),i(3647,"td",26)(3648,"em")(3649,"strong"),e(3650,"(opcional)"),t()(),i(3651,"p"),e(3652,"Define um objeto que segue a interface "),i(3653,"code"),e(3654,"PoTableDetail"),t(),e(3655,", para as colunas de detalhes. Por exemplo:"),t(),i(3656,"pre")(3657,"code"),e(3658,"{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }"),t()()()(),i(3659,"tr",19)(3660,"td",20)(3661,"div",21)(3662,"span",22),e(3663," disabled"),o(3664,"br"),t()()(),i(3665,"td",23)(3666,"code",27),e(3667,"Function"),t()(),i(3668,"td",26)(3669,"em")(3670,"strong"),e(3671,"(opcional)"),t()(),i(3672,"p"),e(3673,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(3674,"em"),e(3675,"link"),t(),e(3676," e sua a\xE7\xE3o."),t(),i(3677,"blockquote")(3678,"p"),e(3679,"Propriedade dispon\xEDvel nas colunas do tipo "),i(3680,"code"),e(3681,"link"),t(),e(3682,"."),t()()()(),i(3683,"tr",19)(3684,"td",20)(3685,"div",21)(3686,"span",22),e(3687," editProperties"),o(3688,"br"),t()()(),i(3689,"td",23)(3690,"code",95),e(3691,"CustomEditProperties"),t()(),i(3692,"td",26)(3693,"em")(3694,"strong"),e(3695,"(opcional)"),t()(),i(3696,"p"),e(3697,"Propriedade para customizar as colunas edit\xE1veis"),t()()(),i(3698,"tr",19)(3699,"td",20)(3700,"div",21)(3701,"span",22),e(3702," fixed"),o(3703,"br"),t()()(),i(3704,"td",23)(3705,"code",24),e(3706,"boolean"),t()(),i(3707,"td",26)(3708,"em")(3709,"strong"),e(3710,"(opcional)"),t()(),i(3711,"p"),e(3712,"Propriedade para fixar a coluna inicialmente."),t(),i(3713,"blockquote")(3714,"p"),e(3715,`No momento, \xE9 poss\xEDvel fixar apenas 2 colunas e garantir o funcionamento correto.
Caso a coluna de a\xE7\xF5es esteja fixa, \xE9 poss\xEDvel fixar somente 1 coluna corretamente.`),t()()()(),i(3716,"tr",19)(3717,"td",20)(3718,"div",21)(3719,"span",22),e(3720," format"),o(3721,"br"),t()()(),i(3722,"td",23)(3723,"code",38),e(3724,"string"),t()(),i(3725,"td",26)(3726,"em")(3727,"strong"),e(3728,"(opcional)"),t()(),i(3729,"p"),e(3730,"Formato de exibi\xE7\xE3o do valor da coluna."),t(),i(3731,"table")(3732,"thead")(3733,"tr")(3734,"th"),e(3735,"Formata\xE7\xE3o"),t(),i(3736,"th"),e(3737,"Type da Coluna"),t(),i(3738,"th"),e(3739,"Descri\xE7\xE3o"),t(),i(3740,"th"),e(3741,"Exemplos"),t()()(),i(3742,"tbody")(3743,"tr")(3744,"td"),e(3745,"Monet\xE1rio"),t(),i(3746,"td")(3747,"code"),e(3748,"currency"),t()(),i(3749,"td"),e(3750,"Formato para valores monet\xE1rios. Espera um c\xF3digo de moeda no padr\xE3o ISO 4217, e caso n\xE3o informado, ser\xE1 utilizado "),i(3751,"code"),e(3752,"'USD'"),t(),e(3753," por padr\xE3o"),t(),i(3754,"td")(3755,"code"),e(3756,"'BRL'"),t(),e(3757,", "),i(3758,"code"),e(3759,"'USD'"),t(),e(3760,", "),i(3761,"code"),e(3762,"'EUR'"),t(),e(3763,", "),i(3764,"code"),e(3765,"'RUB'"),t()()(),i(3766,"tr")(3767,"td"),e(3768,"Data"),t(),i(3769,"td")(3770,"code"),e(3771,"date"),t()(),i(3772,"td"),e(3773,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),t(),i(3774,"td")(3775,"code"),e(3776,"'dd/MM/yyyy'"),t(),e(3777,", "),i(3778,"code"),e(3779,"'dd-MM-yy'"),t(),e(3780,", "),i(3781,"code"),e(3782,"'mm/dd/yyyy'"),t()()(),i(3783,"tr")(3784,"td"),e(3785,"Hora"),t(),i(3786,"td")(3787,"code"),e(3788,"time"),t()(),i(3789,"td"),e(3790,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),t(),i(3791,"td")(3792,"code"),e(3793,"'HH:mm'"),t(),e(3794,", "),i(3795,"code"),e(3796,"'HH:mm:ss.ffffff'"),t(),e(3797,", "),i(3798,"code"),e(3799,"'HH:mm:ss.ff'"),t(),e(3800,", "),i(3801,"code"),e(3802,"'mm:ss.fff'"),t()()(),i(3803,"tr")(3804,"td"),e(3805,"N\xFAmero"),t(),i(3806,"td")(3807,"code"),e(3808,"number"),t()(),i(3809,"td"),e(3810,"Aceita um valor seguindo o padr\xE3o "),i(3811,"a",96)(3812,"strong"),e(3813,"DecimalPipe"),t()(),e(3814," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),t(),i(3815,"td")(3816,"code"),e(3817,"'1.2-5'"),t(),e(3818," (ex.: "),i(3819,"code"),e(3820,"50"),t(),e(3821," \u2192 "),i(3822,"code"),e(3823,"50.00"),t(),e(3824,")"),t()()()(),i(3825,"p"),e(3826,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),t(),i(3827,"blockquote")(3828,"p"),e(3829,`Na formata\xE7\xE3o do tipo currency, caso o valor informado seja diferente do padr\xE3o ISO 4217, ser\xE1 exibido o alerta "Currency formatting failed. Using fallback." no console do navegador.
Exemplos de formato inv\xE1lido: 'ABCD', '123'.`),t()()()(),i(3830,"tr",19)(3831,"td",20)(3832,"div",21)(3833,"span",22),e(3834," icons"),o(3835,"br"),t()()(),i(3836,"td",23)(3837,"code",97),e(3838,"Array<PoTableColumnIcon>"),t()(),i(3839,"td",26)(3840,"em")(3841,"strong"),e(3842,"(opcional)"),t()(),i(3843,"p"),e(3844,"Define um "),i(3845,"em"),e(3846,"array"),t(),e(3847," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),i(3848,"code"),e(3849,"action"),t(),e(3850," e "),i(3851,"code"),e(3852,"color"),t(),e(3853,`
definidos na coluna, \xE0 partir do `),i(3854,"em"),e(3855,"value"),t(),e(3856," da "),i(3857,"a",98)(3858,"code"),e(3859,"PoTableColumnIcon"),t()(),e(3860,", por exemplo:"),t(),i(3861,"pre")(3862,"code"),e(3863,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},`),t()(),i(3864,"pre")(3865,"code"),e(3866,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...`),t()()()(),i(3867,"tr",19)(3868,"td",20)(3869,"div",21)(3870,"span",22),e(3871," key"),o(3872,"br"),t()()(),i(3873,"td",23)(3874,"code",24),e(3875,"boolean "),t(),i(3876,"code",50),e(3877," number"),t()(),i(3878,"td",26)(3879,"em")(3880,"strong"),e(3881,"(opcional)"),t()(),i(3882,"p"),e(3883,`Indica se a coluna faz parte da chave composta para exclus\xE3o de registros.
Pode ser do tipo num\xE9rico ou booleano. Os valores num\xE9ricos sempre ser\xE3o priorizados em rela\xE7\xE3o aos booleanos.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(3884,"code"),e(3885,"API"),t(),e(3886," esteja preparada para receber uma ou mais "),i(3887,"code"),e(3888,"keys"),t(),e(3889," concatenadas com pipe '|' para identifica\xE7\xE3o do registro. ex.: DELETE {end-point}/{keys}"),t(),i(3890,"blockquote")(3891,"p"),e(3892,`Exemplo de keys: [{ property: 'id', key: 1 }, { property: 'name', key: true }, { property: 'email', key: 2 }].
Resposta do exemplo: 'valor de id|valor de email|valor de name'`),t()()()(),i(3893,"tr",19)(3894,"td",20)(3895,"div",21)(3896,"span",22),e(3897," label"),o(3898,"br"),t()()(),i(3899,"td",23)(3900,"code",38),e(3901,"string"),t()(),i(3902,"td",26)(3903,"em")(3904,"strong"),e(3905,"(opcional)"),t()(),i(3906,"p"),e(3907,"Texto para t\xEDtulo da coluna."),t(),i(3908,"p"),e(3909,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(3910,"em"),e(3911,"label"),t(),e(3912," o valor da propriedade "),i(3913,"em"),e(3914,"property"),t(),e(3915," com a primeira letra em mai\xFAsculo."),t()()(),i(3916,"tr",19)(3917,"td",20)(3918,"div",21)(3919,"span",22),e(3920," labels"),o(3921,"br"),t()()(),i(3922,"td",23)(3923,"code",99),e(3924,"Array<PoTableColumnLabel>"),t()(),i(3925,"td",26)(3926,"em")(3927,"strong"),e(3928,"(opcional)"),t()(),i(3929,"p"),e(3930,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(3931,"code"),e(3932,"PoTableColumnLabel"),t(),e(3933," na qual devem ser definidas os labels. Por exemplo:"),t(),i(3934,"pre")(3935,"code"),e(3936,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(3937,"tr",19)(3938,"td",20)(3939,"div",21)(3940,"span",22),e(3941," link"),o(3942,"br"),t()()(),i(3943,"td",23)(3944,"code",38),e(3945,"string"),t()(),i(3946,"td",26)(3947,"em")(3948,"strong"),e(3949,"(opcional)"),t()(),i(3950,"p"),e(3951,"Define o nome da propriedade que conter\xE1 o "),i(3952,"code"),e(3953,"link"),t(),e(3954," a ser redirecionado."),t()()(),i(3955,"tr",19)(3956,"td",20)(3957,"div",21)(3958,"span",22),e(3959," locale"),o(3960,"br"),t()()(),i(3961,"td",23)(3962,"code",38),e(3963,"string"),t()(),i(3964,"td",26)(3965,"em")(3966,"strong"),e(3967,"(opcional)"),t()(),i(3968,"p"),e(3969,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o e edi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(3970,"a",100)(3971,"code"),e(3972,"I18n"),t()()(),i(3973,"p"),e(3974,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(3975,"pre")(3976,"code"),e(3977,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},`),t()(),i(3978,"blockquote")(3979,"p"),e(3980,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(3981,"p"),e(3982,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(3983,"p"),e(3984,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(3985,"a",100)(3986,"code"),e(3987,"I18n"),t()()()(),i(3988,"p"),e(3989,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(3990,"pre")(3991,"code"),e(3992,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}`),t()(),i(3993,"blockquote")(3994,"p"),e(3995,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(3996,"code"),e(3997,"number"),t(),e(3998," e "),i(3999,"code"),e(4e3,"currency"),t(),e(4001,"."),t()(),i(4002,"blockquote")(4003,"p"),e(4004,"No modo edi\xE7\xE3o, a propriedade ser\xE1 repassada para os componentes que suportam a mesma."),t(),i(4005,"p")(4006,"strong"),e(4007,"Componentes compat\xEDveis"),t(),e(4008,": "),i(4009,"code"),e(4010,"decimal"),t()()()()(),i(4011,"tr",19)(4012,"td",20)(4013,"div",21)(4014,"span",22),e(4015," mask"),o(4016,"br"),t()()(),i(4017,"td",23)(4018,"code",38),e(4019,"string"),t()(),i(4020,"td",26)(4021,"em")(4022,"strong"),e(4023,"(opcional)"),t()(),i(4024,"p"),e(4025,`Indica uma m\xE1scara para a coluna
Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
Aplic\xE1vel nas colunas do tipo `),i(4026,"code"),e(4027,"number"),t(),e(4028," e "),i(4029,"code"),e(4030,"string"),t(),e(4031,`
Nas colunas do tipo `),i(4032,"code"),e(4033,"number"),t(),e(4034," a propriedade "),i(4035,"code"),e(4036,"mask"),t(),e(4037," ter\xE1 prioridade sob "),i(4038,"code"),e(4039,"format"),t()()()(),i(4040,"tr",19)(4041,"td",20)(4042,"div",21)(4043,"span",22),e(4044," property"),o(4045,"br"),t()()(),i(4046,"td",23)(4047,"code",38),e(4048,"string"),t()(),i(4049,"td",26)(4050,"p"),e(4051,"Identificador da coluna."),t()()(),i(4052,"tr",19)(4053,"td",20)(4054,"div",21)(4055,"span",22),e(4056," resizable"),o(4057,"br"),t()()(),i(4058,"td",23)(4059,"code",24),e(4060,"boolean"),t()(),i(4061,"td",26)(4062,"em")(4063,"strong"),e(4064,"(opcional)"),t()(),i(4065,"p"),e(4066,"Define se a coluna pode ser redimensionada pelo usu\xE1rio."),t()()(),i(4067,"tr",19)(4068,"td",20)(4069,"div",21)(4070,"span",22),e(4071," sortable"),o(4072,"br"),t()()(),i(4073,"td",23)(4074,"code",24),e(4075,"boolean"),t()(),i(4076,"td",26)(4077,"em")(4078,"strong"),e(4079,"(opcional)"),t()(),i(4080,"p"),e(4081,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),t()()(),i(4082,"tr",19)(4083,"td",20)(4084,"div",21)(4085,"span",22),e(4086," subtitles"),o(4087,"br"),t()()(),i(4088,"td",23)(4089,"code",101),e(4090,"Array<PoTableSubtitleColumn>"),t()(),i(4091,"td",26)(4092,"em")(4093,"strong"),e(4094,"(opcional)"),t()(),i(4095,"p"),e(4096,"Define um array de objetos para as colunas de legenda. Onde, "),i(4097,"code"),e(4098,"subtitles"),t(),e(4099,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),t(),i(4100,"pre")(4101,"code"),e(4102,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', content: '2' }
}`),t()(),i(4103,"p"),e(4104,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),t()()(),i(4105,"tr",19)(4106,"td",20)(4107,"div",21)(4108,"span",22),e(4109," tooltip"),o(4110,"br"),t()()(),i(4111,"td",23)(4112,"code",38),e(4113,"string"),t()(),i(4114,"td",26)(4115,"em")(4116,"strong"),e(4117,"(opcional)"),t()(),i(4118,"p"),e(4119,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),i(4120,"em"),e(4121,"mouse"),t(),e(4122," sobre um texto."),t(),i(4123,"blockquote")(4124,"p"),e(4125,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),i(4126,"em"),e(4127,"link"),t(),e(4128,"."),t()(),i(4129,"blockquote")(4130,"p"),e(4131,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),i(4132,"em"),e(4133,"tooltip"),t(),e(4134," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),t()()()(),i(4135,"tr",19)(4136,"td",20)(4137,"div",21)(4138,"span",22),e(4139," type"),o(4140,"br"),t()()(),i(4141,"td",23)(4142,"code",38),e(4143,"string"),t()(),i(4144,"td",26)(4145,"em")(4146,"strong"),e(4147,"(opcional)"),t()(),i(4148,"p"),e(4149,"Tipo da coluna."),t(),i(4150,"p"),e(4151,"Valores v\xE1lidos:"),t(),i(4152,"ul")(4153,"li")(4154,"p")(4155,"code"),e(4156,"boolean"),t(),e(4157,": Exibir\xE1 por padr\xE3o "),i(4158,"code"),e(4159,"Sim"),t(),e(4160," e "),i(4161,"code"),e(4162,"N\xE3o"),t(),e(4163," de acordo com os valores "),i(4164,"em"),e(4165,"booleanos"),t(),e(4166,"."),t(),i(4167,"blockquote")(4168,"p"),e(4169,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),i(4170,"code"),e(4171,"boolean"),t(),e(4172," desta interface."),t()()(),i(4173,"li")(4174,"p")(4175,"code"),e(4176,"currency"),t(),e(4177,": valores monet\xE1rios."),t()(),i(4178,"li")(4179,"p")(4180,"code"),e(4181,"date"),t(),e(4182,": valor de datas."),t(),i(4183,"ul")(4184,"li"),e(4185,"Aceita os tipos "),i(4186,"em"),e(4187,"string"),t(),e(4188," e "),i(4189,"em"),e(4190,"Date"),t(),e(4191,` padr\xE3o do Javascript,
por exemplo: `),i(4192,"code"),e(4193,"'2017-11-28'"),t(),e(4194," ou "),i(4195,"code"),e(4196,"new Date(2017, 10, 28)"),t(),e(4197,"."),t()()(),i(4198,"li")(4199,"p")(4200,"code"),e(4201,"dateTime"),t(),e(4202,": valor de data com hor\xE1rio."),t(),i(4203,"ul")(4204,"li"),e(4205,"Aceita o tipo "),i(4206,"em"),e(4207,"string"),t(),e(4208," no formato "),i(4209,"strong"),e(4210,"ISO-8601"),t(),e(4211," extendido "),i(4212,"strong"),e(4213,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4214,`
e o tipo `),i(4215,"em"),e(4216,"Date"),t(),e(4217," padr\xE3o do Javascript, por exemplo: "),i(4218,"code"),e(4219,"'2017-11-28T00:00:00-02:00'"),t(),e(4220," ou "),i(4221,"code"),e(4222,"new Date(2017, 10, 28)"),t(),e(4223,"."),t()()(),i(4224,"li")(4225,"p")(4226,"code"),e(4227,"detail"),t(),e(4228,": array de objetos para o master-detail."),t(),i(4229,"ul")(4230,"li"),e(4231,"Incompat\xEDvel com "),i(4232,"code"),e(4233,"virtual-scroll"),t(),e(4234,", que requer altura fixa nas linhas."),t()()(),i(4235,"li")(4236,"p")(4237,"code"),e(4238,"icon"),t(),e(4239,": "),i(4240,"em"),e(4241,"array"),t(),e(4242," de "),i(4243,"em"),e(4244,"string"),t(),e(4245," ou objetos para a coluna de \xEDcones."),t()(),i(4246,"li")(4247,"p")(4248,"code"),e(4249,"label"),t(),e(4250,": texto com destaque."),t()(),i(4251,"li")(4252,"p")(4253,"code"),e(4254,"link"),t(),e(4255,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),t()(),i(4256,"li")(4257,"p")(4258,"code"),e(4259,"number"),t(),e(4260,": valores num\xE9ricos."),t()(),i(4261,"li")(4262,"p")(4263,"code"),e(4264,"string"),t(),e(4265,": textos."),t()(),i(4266,"li")(4267,"p")(4268,"code"),e(4269,"subtitle"),t(),e(4270,": array de objetos para a coluna de legenda."),t()(),i(4271,"li")(4272,"p")(4273,"code"),e(4274,"time"),t(),e(4275,": valor de hor\xE1rio."),t(),i(4276,"ul")(4277,"li"),e(4278,"Aceita o tipo "),i(4279,"em"),e(4280,"string"),t(),e(4281," nos formatos "),i(4282,"strong"),e(4283,"'HH:mm:ss'"),t(),e(4284," ou "),i(4285,"strong"),e(4286,"'HH:mm:ss.ffffff'"),t(),e(4287,", por exemplo: "),i(4288,"code"),e(4289,"'23:12:45'"),t(),e(4290,"."),t()()(),i(4291,"li")(4292,"p")(4293,"code"),e(4294,"cellTemplate"),t(),e(4295,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(4296,"a",102),e(4297,"PoTableCellTemplate"),t(),e(4298,"."),t()(),i(4299,"li")(4300,"p")(4301,"code"),e(4302,"columnTemplate"),t(),e(4303,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(4304,"a",103),e(4305,"PoTableColumnTemplate"),t(),e(4306,"."),t()()()()(),i(4307,"tr",19)(4308,"td",20)(4309,"div",21)(4310,"span",22),e(4311," visible"),o(4312,"br"),t()()(),i(4313,"td",23)(4314,"code",24),e(4315,"boolean"),t()(),i(4316,"td",26)(4317,"em")(4318,"strong"),e(4319,"(opcional)"),t()(),i(4320,"p"),e(4321,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(4322,"strong"),e(4323,"gerenciador de colunas"),t(),e(4324,"."),t(),i(4325,"blockquote")(4326,"p"),e(4327,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(4328,"code"),e(4329,"p-max-columns"),t(),e(4330,"."),t()()()(),i(4331,"tr",19)(4332,"td",20)(4333,"div",21)(4334,"span",22),e(4335," width"),o(4336,"br"),t()()(),i(4337,"td",23)(4338,"code",50),e(4339,"number "),t(),i(4340,"code",38),e(4341," string"),t()(),i(4342,"td",26)(4343,"em")(4344,"strong"),e(4345,"(opcional)"),t()(),i(4346,"p"),e(4347,"Caso seja passado o formato "),i(4348,"code"),e(4349,"number"),t(),e(4350,`, ser\xE1 aplicado em pixels.
A largura da coluna pode ser informada em pixels ou porcentagem.`),t(),i(4351,"blockquote")(4352,"p"),e(4353,`Exemplo Pixel: 100.
Exemplo Porcentagem: '100%'.
Apesar de atribuir largura as colunas da grid \xE9 importante ressaltar
que o componente recalcula as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis na grid,
podendo alterar as dimens\xF5es passadas proporcionalmente.`),t()()()()()(),i(4354,"po-accordion-item",104)(4355,"h4",9)(4356,"code"),e(4357,"CustomEditProperties"),t()(),i(4358,"div",10)(4359,"p"),e(4360,"Interface para configura\xE7\xE3o das colunas edit\xE1veis ("),i(4361,"strong"),e(4362,"editProperties"),t(),e(4363,`).
Al\xE9m dessas propriedades, herda as defini\xE7\xF5es da interface
`),i(4364,"a",105),e(4365,"PoDynamicFormField"),t(),e(4366,`,
permitindo definir campos de entrada que ser\xE3o criados dinamicamente.`),t()(),i(4367,"h4",15),e(4368,"Propriedades"),t(),i(4369,"table",16)(4370,"tr",17)(4371,"th",18),e(4372,"Nome"),t(),i(4373,"th",18),e(4374,"Tipo"),t(),i(4375,"th",18),e(4376,"Descri\xE7\xE3o"),t()(),i(4377,"tr",19)(4378,"td",20)(4379,"div",21)(4380,"span",22),e(4381," componentEditable"),o(4382,"br"),t()()(),i(4383,"td",23)(4384,"code",106),e(4385,"'input' "),t(),i(4386,"code",107),e(4387," 'number' "),t(),i(4388,"code",108),e(4389," 'select' "),t(),i(4390,"code",109),e(4391," 'datepicker' "),t(),i(4392,"code",110),e(4393," 'switch' "),t(),i(4394,"code",111),e(4395," 'combo' "),t(),i(4396,"code",112),e(4397," 'multiselect' "),t(),i(4398,"code",113),e(4399," 'decimal' "),t(),i(4400,"code",114),e(4401," 'checkbox' "),t(),i(4402,"code",115),e(4403," 'lookup'"),t()(),i(4404,"td",26)(4405,"em")(4406,"strong"),e(4407,"(opcional)"),t()(),i(4408,"p"),e(4409,"Propriedade para escolher qual componente ser\xE1 exibido para editar."),t(),i(4410,"blockquote")(4411,"p"),e(4412,"O valor padr\xE3o \xE9 "),i(4413,"code"),e(4414,"input"),t(),e(4415,"."),t()()()(),i(4416,"tr",19)(4417,"td",20)(4418,"div",21)(4419,"span",22),e(4420," componentSize"),o(4421,"br"),t()()(),i(4422,"td",23)(4423,"code",116),e(4424,"'small' "),t(),i(4425,"code",117),e(4426," 'medium' "),t(),i(4427,"code",118),e(4428," 'large'"),t()(),i(4429,"td",26)(4430,"em")(4431,"strong"),e(4432,"(opcional)"),t()(),i(4433,"p"),e(4434,"Define o tamanho dos componentes de formul\xE1rio no grid conforme suas respectivas documenta\xE7\xF5es:"),t(),i(4435,"ul")(4436,"li")(4437,"code"),e(4438,"small"),t(),e(4439,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(4440,"li")(4441,"code"),e(4442,"medium"),t(),e(4443,": aplica a medida medium de cada componente."),t(),i(4444,"li")(4445,"code"),e(4446,"large"),t(),e(4447,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4448,"code"),e(4449,"po-checkbox"),t(),e(4450," e "),i(4451,"code"),e(4452,"po-radio-group"),t(),e(4453,")."),i(4454,"blockquote")(4455,"p"),e(4456,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4457,"code"),e(4458,"medium"),t(),e(4459,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4460,"a",39),e(4461,"po-theme"),t(),e(4462,"."),t()()()()()(),i(4463,"tr",19)(4464,"td",20)(4465,"div",21)(4466,"span",22),e(4467," controlValueWithLabel"),o(4468,"br"),t()()(),i(4469,"td",23)(4470,"code",24),e(4471,"boolean"),t()(),i(4472,"td",26)(4473,"em")(4474,"strong"),e(4475,"(opcional)"),t()(),i(4476,"p"),e(4477,"Determina se os componentes "),i(4478,"code"),e(4479,"select"),t(),e(4480,", "),i(4481,"code"),e(4482,"combo"),t(),e(4483,", "),i(4484,"code"),e(4485,"multiselect"),t(),e(4486," e "),i(4487,"code"),e(4488,"thf-lookup"),t(),e(4489,`
devem exibir o `),i(4490,"code"),e(4491,"label"),t(),e(4492," ao inv\xE9s de "),i(4493,"code"),e(4494,"value"),t(),e(4495," na grid"),t()()(),i(4496,"tr",19)(4497,"td",20)(4498,"div",21)(4499,"span",22),e(4500," customItems"),o(4501,"br"),t()()(),i(4502,"td",23)(4503,"code",52),e(4504,"Array<any>"),t()(),i(4505,"td",26)(4506,"em")(4507,"strong"),e(4508,"(opcional)"),t()(),i(4509,"p"),e(4510,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t(),i(4511,"blockquote")(4512,"p")(4513,"strong"),e(4514,"Componente compat\xEDvel"),t(),e(4515,": "),i(4516,"code"),e(4517,"thf-lookup"),t()()()()(),i(4518,"tr",19)(4519,"td",20)(4520,"div",21)(4521,"span",22),e(4522," disabled"),o(4523,"br"),t()()(),i(4524,"td",23)(4525,"code",24),e(4526,"boolean "),t(),i(4527,"code",119),e(4528," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(4529,"td",26)(4530,"em")(4531,"strong"),e(4532,"(opcional)"),t()(),i(4533,"p"),e(4534,`Desabilita o campo. Pode ser um valor booleano fixo ou uma fun\xE7\xE3o din\xE2mica
que recebe os dados da linha e retorna um booleano`),t()()(),i(4535,"tr",19)(4536,"td",20)(4537,"div",21)(4538,"span",22),e(4539," fieldFormat"),o(4540,"br"),t()()(),i(4541,"td",23)(4542,"code",47),e(4543,"Array<string> "),t(),i(4544,"code",120),e(4545," ((item: any) => string)"),t()(),i(4546,"td",26)(4547,"em")(4548,"strong"),e(4549,"(opcional)"),t()(),i(4550,"p"),e(4551,"Formato de exibi\xE7\xE3o do campo."),t(),i(4552,"p"),e(4553,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(4554,"em"),e(4555,"string"),t(),e(4556," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(4557,"pre")(4558,"code",31),e(4559,`fieldFormat(obj) {
  return \`\${obj.id} (\${obj.name})\`;
}


Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado \` - \` como separador, por exemplo:

\`\`\`typescript
 fieldFormat]="['id','nickname']"`),t()(),i(4560,"blockquote")(4561,"p"),e(4562,"Componente compat\xEDvel: "),i(4563,"code"),e(4564,"thf-lookup"),t(),e(4565,"."),t()()()(),i(4566,"tr",19)(4567,"td",20)(4568,"div",21)(4569,"span",22),e(4570," filterSearchSelect"),o(4571,"br"),t()()(),i(4572,"td",23)(4573,"code",121),e(4574,"Array<ThfLookupFilterSearchSelect>"),t()(),i(4575,"td",26)(4576,"em")(4577,"strong"),e(4578,"(opcional)"),t()(),i(4579,"p"),e(4580,"Propriedade para listar as op\xE7\xF5es de filtro do po-search no modal."),t(),i(4581,"blockquote")(4582,"p"),e(4583,"Componente compat\xEDvel: "),i(4584,"code"),e(4585,"thf-lookup"),t(),e(4586,"."),t()()()(),i(4587,"tr",19)(4588,"td",20)(4589,"div",21)(4590,"span",22),e(4591," keysLabel"),o(4592,"br"),t()()(),i(4593,"td",23)(4594,"code",122),e(4595,"Array<ThfLookupKeysLabel>"),t()(),i(4596,"td",26)(4597,"em")(4598,"strong"),e(4599,"(opcional)"),t()(),i(4600,"p"),e(4601,"Propriedade para exibir at\xE9 3 propriedades por valor no listbox."),t(),i(4602,"blockquote")(4603,"p"),e(4604,"Componente compat\xEDvel: "),i(4605,"code"),e(4606,"thf-lookup"),t(),e(4607,"."),t()()()(),i(4608,"tr",19)(4609,"td",20)(4610,"div",21)(4611,"span",22),e(4612," locale"),o(4613,"br"),t()()(),i(4614,"td",23)(4615,"code",38),e(4616,"string"),t()(),i(4617,"td",26)(4618,"em")(4619,"strong"),e(4620,"(opcional)"),t()(),i(4621,"p"),e(4622,`Define a localidade a ser utilizada no modo de edi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(4623,"a",100)(4624,"code"),e(4625,"I18n"),t()()(),i(4626,"p"),e(4627,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(4628,"pre")(4629,"code"),e(4630,`columnWithItems: Array<ThfGridColumn> = [
 {
   property: 'currency',
   type: 'currency',
   editProperties: {
     componentEditable: 'decimal',
     locale: 'en'
   },
},`),t()(),i(4631,"blockquote")(4632,"p"),e(4633,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(4634,"p"),e(4635,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(4636,"p"),e(4637,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(4638,"a",100)(4639,"code"),e(4640,"I18n"),t()()()(),i(4641,"p"),e(4642,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(4643,"pre")(4644,"code"),e(4645,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}`),t()(),i(4646,"blockquote")(4647,"p"),e(4648,"A propriedade ser\xE1 repassada para os componentes que suportam a mesma."),t(),i(4649,"p")(4650,"strong"),e(4651,"Componentes compat\xEDveis"),t(),e(4652,": "),i(4653,"code"),e(4654,"decimal"),t()()(),i(4655,"blockquote")(4656,"p"),e(4657,"Caso seja definida em conjunto com a propriedade "),i(4658,"code"),e(4659,"locale"),t(),e(4660," da coluna, o "),i(4661,"code"),e(4662,"editProperties.locale"),t(),e(4663," ter\xE1 prioridade ao habilitar a edi\xE7\xE3o de uma linha e o "),i(4664,"code"),e(4665,"locale"),t(),e(4666," da coluna ser\xE1 utilizado apenas para exibi\xE7\xE3o."),t()()()(),i(4667,"tr",19)(4668,"td",20)(4669,"div",21)(4670,"span",22),e(4671," lookupGridProperties"),o(4672,"br"),t()()(),i(4673,"td",23)(4674,"code",123),e(4675,"ThfLookupGridProperties"),t()(),i(4676,"td",26)(4677,"em")(4678,"strong"),e(4679,"(opcional)"),t()(),i(4680,"p"),e(4681,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t(),i(4682,"blockquote")(4683,"p")(4684,"strong"),e(4685,"Componentes compat\xEDveis"),t(),e(4686,": thf-lookup`"),t()()()(),i(4687,"tr",19)(4688,"td",20)(4689,"div",21)(4690,"span",22),e(4691," onBlur"),o(4692,"br"),t()()(),i(4693,"td",23)(4694,"code",27),e(4695,"Function"),t()(),i(4696,"td",26)(4697,"em")(4698,"strong"),e(4699,"(opcional)"),t()(),i(4700,"p"),e(4701,"Evento disparado ao sair do campo."),t(),i(4702,"blockquote")(4703,"p")(4704,"strong"),e(4705,"Componentes compat\xEDveis"),t(),e(4706,": "),i(4707,"code"),e(4708,"po-input"),t(),e(4709,", "),i(4710,"code"),e(4711,"po-number"),t(),e(4712,", "),i(4713,"code"),e(4714,"po-decimal"),t(),e(4715,", "),i(4716,"code"),e(4717,"po-datepicker"),t(),e(4718,", "),i(4719,"code"),e(4720,"po-select"),t(),e(4721,", "),i(4722,"code"),e(4723,"po-combo"),t(),e(4724,", "),i(4725,"code"),e(4726,"po-multiselect"),t(),e(4727,", "),i(4728,"code"),e(4729,"po-checkbox"),t()()()()(),i(4730,"tr",19)(4731,"td",20)(4732,"div",21)(4733,"span",22),e(4734," onChange"),o(4735,"br"),t()()(),i(4736,"td",23)(4737,"code",124),e(4738,"(value: any) => void"),t()(),i(4739,"td",26)(4740,"em")(4741,"strong"),e(4742,"(opcional)"),t()(),i(4743,"p"),e(4744,"Evento disparado ao alterar valor e deixar o campo."),t(),i(4745,"blockquote")(4746,"p")(4747,"strong"),e(4748,"Componentes compat\xEDveis"),t(),e(4749,": "),i(4750,"code"),e(4751,"po-input"),t(),e(4752,", "),i(4753,"code"),e(4754,"po-number"),t(),e(4755,", "),i(4756,"code"),e(4757,"po-decimal"),t(),e(4758,", "),i(4759,"code"),e(4760,"po-datepicker"),t(),e(4761,", "),i(4762,"code"),e(4763,"po-select"),t(),e(4764,", "),i(4765,"code"),e(4766,"po-switch"),t(),e(4767,", "),i(4768,"code"),e(4769,"po-combo"),t(),e(4770,", "),i(4771,"code"),e(4772,"po-multiselect"),t(),e(4773,", "),i(4774,"code"),e(4775,"po-checkbox"),t(),e(4776,", "),i(4777,"code"),e(4778,"thf-lookup"),t()()()()(),i(4779,"tr",19)(4780,"td",20)(4781,"div",21)(4782,"span",22),e(4783," onChangeModel"),o(4784,"br"),t()()(),i(4785,"td",23)(4786,"code",125),e(4787,"(model: any) => void"),t()(),i(4788,"td",26)(4789,"em")(4790,"strong"),e(4791,"(opcional)"),t()(),i(4792,"p"),e(4793,"Evento disparado ao alterar valor do model."),t(),i(4794,"blockquote")(4795,"p")(4796,"strong"),e(4797,"Componentes compat\xEDveis"),t(),e(4798,": "),i(4799,"code"),e(4800,"po-input"),t(),e(4801,", "),i(4802,"code"),e(4803,"po-number"),t(),e(4804,", "),i(4805,"code"),e(4806,"po-decimal"),t(),e(4807,", "),i(4808,"code"),e(4809,"po-select"),t(),e(4810,", "),i(4811,"code"),e(4812,"po-combo"),t(),e(4813,", "),i(4814,"code"),e(4815,"thf-lookup"),t()()()()(),i(4816,"tr",19)(4817,"td",20)(4818,"div",21)(4819,"span",22),e(4820," onEnter"),o(4821,"br"),t()()(),i(4822,"td",23)(4823,"code",27),e(4824,"Function"),t()(),i(4825,"td",26)(4826,"em")(4827,"strong"),e(4828,"(opcional)"),t()(),i(4829,"p"),e(4830,"Evento disparado ao entrar no campo."),t(),i(4831,"blockquote")(4832,"p")(4833,"strong"),e(4834,"Componentes compat\xEDveis"),t(),e(4835,": "),i(4836,"code"),e(4837,"po-input"),t(),e(4838,", "),i(4839,"code"),e(4840,"po-number"),t(),e(4841,", "),i(4842,"code"),e(4843,"po-decimal"),t()()()()(),i(4844,"tr",19)(4845,"td",20)(4846,"div",21)(4847,"span",22),e(4848," onError"),o(4849,"br"),t()()(),i(4850,"td",23)(4851,"code",126),e(4852,"(error: HttpErrorResponse) => void"),t()(),i(4853,"td",26)(4854,"em")(4855,"strong"),e(4856,"(opcional)"),t()(),i(4857,"p"),e(4858,"Callback disparado quando ocorre erro na requisi\xE7\xE3o de busca."),t(),i(4859,"blockquote")(4860,"p")(4861,"strong"),e(4862,"Componente compat\xEDvel"),t(),e(4863,": "),i(4864,"code"),e(4865,"thf-lookup"),t()()()()(),i(4866,"tr",19)(4867,"td",20)(4868,"div",21)(4869,"span",22),e(4870," onFocus"),o(4871,"br"),t()()(),i(4872,"td",23)(4873,"code",27),e(4874,"Function"),t()(),i(4875,"td",26)(4876,"em")(4877,"strong"),e(4878,"(opcional)"),t()(),i(4879,"p"),e(4880,"Callback disparado quando o campo recebe foco."),t(),i(4881,"blockquote")(4882,"p")(4883,"strong"),e(4884,"Componente compat\xEDvel"),t(),e(4885,": "),i(4886,"code"),e(4887,"thf-lookup"),t()()()()(),i(4888,"tr",19)(4889,"td",20)(4890,"div",21)(4891,"span",22),e(4892," onInputChange"),o(4893,"br"),t()()(),i(4894,"td",23)(4895,"code",124),e(4896,"(value: any) => void"),t()(),i(4897,"td",26)(4898,"em")(4899,"strong"),e(4900,"(opcional)"),t()(),i(4901,"p"),e(4902,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no campo de busca do componente. A fun\xE7\xE3o receber\xE1 como argumento o valor modificado."),t(),i(4903,"blockquote")(4904,"p")(4905,"strong"),e(4906,"Componente compat\xEDvel"),t(),e(4907,": "),i(4908,"code"),e(4909,"po-combo"),t()()()()(),i(4910,"tr",19)(4911,"td",20)(4912,"div",21)(4913,"span",22),e(4914," onSelected"),o(4915,"br"),t()()(),i(4916,"td",23)(4917,"code",127),e(4918,"(selection: any "),t(),i(4919,"code",128),e(4920," Array<any>) => void"),t()(),i(4921,"td",26)(4922,"em")(4923,"strong"),e(4924,"(opcional)"),t()(),i(4925,"p"),e(4926,"Callback disparado ao selecionar item(s)."),t(),i(4927,"blockquote")(4928,"p")(4929,"strong"),e(4930,"Componente compat\xEDvel"),t(),e(4931,": "),i(4932,"code"),e(4933,"thf-lookup"),t()()()()(),i(4934,"tr",19)(4935,"td",20)(4936,"div",21)(4937,"span",22),e(4938," readonly"),o(4939,"br"),t()()(),i(4940,"td",23)(4941,"code",24),e(4942,"boolean "),t(),i(4943,"code",119),e(4944," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(4945,"td",26)(4946,"em")(4947,"strong"),e(4948,"(opcional)"),t()(),i(4949,"p"),e(4950,`Indica que o campo ser\xE1 somente leitura. Pode ser um valor booleano fixo
ou uma fun\xE7\xE3o din\xE2mica que recebe os dados da linha e retorna um booleano`),t()()(),i(4951,"tr",19)(4952,"td",20)(4953,"div",21)(4954,"span",22),e(4955," required"),o(4956,"br"),t()()(),i(4957,"td",23)(4958,"code",24),e(4959,"boolean"),t()(),i(4960,"td",26)(4961,"em")(4962,"strong"),e(4963,"(opcional)"),t()(),i(4964,"p"),e(4965,"Define a obrigatoriedade do campo."),t(),i(4966,"blockquote")(4967,"p"),e(4968,"Caso seja definido como "),i(4969,"code"),e(4970,"true"),t(),e(4971,', exibe a label "(Obrigat\xF3rio)" na coluna.'),t()()()(),i(4972,"tr",19)(4973,"td",20)(4974,"div",21)(4975,"span",22),e(4976," size"),o(4977,"br"),t()()(),i(4978,"td",23)(4979,"code",129),e(4980,"'sm' "),t(),i(4981,"code",130),e(4982," 'md' "),t(),i(4983,"code",131),e(4984," 'lg' "),t(),i(4985,"code",132),e(4986," 'xl' "),t(),i(4987,"code",133),e(4988," 'auto'"),t()(),i(4989,"td",26)(4990,"em")(4991,"strong"),e(4992,"(opcional)"),t()(),i(4993,"p"),e(4994,"Propriedade para definir o tamanho do modal."),t(),i(4995,"blockquote")(4996,"p"),e(4997,"Componente compat\xEDvel: "),i(4998,"code"),e(4999,"thf-lookup"),t(),e(5e3,"."),t()()()()()(),i(5001,"po-accordion-item",134)(5002,"h4",9)(5003,"code"),e(5004,"ThfGridDeleteService"),t()(),i(5005,"div",10)(5006,"p"),e(5007,"Interface para excluir algum item via servi\xE7o."),t()(),i(5008,"table",61)(5009,"tr",19)(5010,"th",62)(5011,"div",21)(5012,"h4")(5013,"span",22),e(5014," deleteItem "),t()()()()(),i(5015,"tr",26)(5016,"td",26)(5017,"p"),e(5018,`M\xE9todo que ser\xE1 disparado ao excluir algum item, deve-se retornar
um `),i(5019,"em"),e(5020,"Observable"),t(),e(5021,"."),t()()()(),i(5022,"h5")(5023,"b"),e(5024,"Par\xE2metros"),t()(),i(5025,"table",16)(5026,"tr",17)(5027,"th",18),e(5028,"Nome"),t(),i(5029,"th",18),e(5030,"Tipo"),t(),i(5031,"th",18),e(5032,"Descri\xE7\xE3o"),t()(),i(5033,"tr",19)(5034,"td",20),e(5035," selectedRow"),t(),i(5036,"td",23)(5037,"code",63),e(5038," any "),t()(),i(5039,"td",26)(5040,"p"),e(5041,"Par\xE2metro com o valor do atual item selecionado."),t()()(),i(5042,"tr",19)(5043,"td",20),e(5044," filterParams"),t(),i(5045,"td",23)(5046,"code",63),e(5047," any "),t()(),i(5048,"td",26)(5049,"p"),e(5050,"Valor informado atrav\xE9s da propriedade "),i(5051,"code"),e(5052,"t-param-delete-api"),t(),e(5053,"."),t()()(),i(5054,"tr",19)(5055,"td",20),e(5056," keyValue"),t(),i(5057,"td",23)(5058,"code",63),e(5059," string "),t()(),i(5060,"td",26)(5061,"p"),e(5062,"Valor informado caso tenha alguma coluna com a propriedade "),i(5063,"code"),e(5064,"key"),t(),e(5065," ativa ou o valor da propriedade "),i(5066,"code"),e(5067,"id"),t(),e(5068,"."),t()()()(),o(5069,"br"),i(5070,"table",61)(5071,"tr",19)(5072,"th",62)(5073,"div",21)(5074,"h4")(5075,"span",22),e(5076," deleteBatchItems "),t()()()()(),i(5077,"tr",26)(5078,"td",26)(5079,"p"),e(5080,"M\xE9todo que ser\xE1 disparado ao excluir itens quando o THF-GRID estiver com a propriedade "),i(5081,"code"),e(5082,"t-allow-batch-delete"),t(),e(5083,` habilitada, deve-se retornar
um `),i(5084,"em"),e(5085,"Observable"),t(),e(5086,"."),t(),i(5087,"p"),e(5088,"Ao habilitar a propriedade "),i(5089,"code"),e(5090,"t-allow-batch-delete"),t(),e(5091,", este m\xE9todo sempre ser\xE1 chamado, exluindo um ou v\xE1rios itens."),t()()()(),i(5092,"h5")(5093,"b"),e(5094,"Par\xE2metros"),t()(),i(5095,"table",16)(5096,"tr",17)(5097,"th",18),e(5098,"Nome"),t(),i(5099,"th",18),e(5100,"Tipo"),t(),i(5101,"th",18),e(5102,"Descri\xE7\xE3o"),t()(),i(5103,"tr",19)(5104,"td",20),e(5105," selectedRows"),t(),i(5106,"td",23)(5107,"code",63),e(5108," any "),t()(),i(5109,"td",26)(5110,"p"),e(5111,"Par\xE2metro com os valores dos itens selecionados."),t()()(),i(5112,"tr",19)(5113,"td",20),e(5114," paramDelete"),t(),i(5115,"td",23)(5116,"code",63),e(5117," any "),t()(),i(5118,"td",26)(5119,"p"),e(5120,"Valor informado atrav\xE9s da propriedade "),i(5121,"code"),e(5122,"t-param-delete-api"),t(),e(5123,"."),t()()(),i(5124,"tr",19)(5125,"td",20),e(5126," keys"),t(),i(5127,"td",23)(5128,"code",63),e(5129," string "),t()(),i(5130,"td",26)(5131,"p"),e(5132,"Valor informado caso tenha alguma coluna com a propriedade "),i(5133,"code"),e(5134,"key"),t(),e(5135," ativa ou o valor da propriedade "),i(5136,"code"),e(5137,"id"),t(),e(5138,"."),t()()()(),o(5139,"br"),t(),i(5140,"po-accordion-item",135)(5141,"h4",9)(5142,"code"),e(5143,"ThfGridEditProperties"),t()(),i(5144,"div",10)(5145,"p"),e(5146,"Interface para configura\xE7\xE3o da edi\xE7\xE3o em linha ("),i(5147,"strong"),e(5148,"t-edit-properties"),t(),e(5149,")."),t()(),i(5150,"h4",15),e(5151,"Propriedades"),t(),i(5152,"table",16)(5153,"tr",17)(5154,"th",18),e(5155,"Nome"),t(),i(5156,"th",18),e(5157,"Tipo"),t(),i(5158,"th",18),e(5159,"Descri\xE7\xE3o"),t()(),i(5160,"tr",19)(5161,"td",20)(5162,"div",21)(5163,"span",22),e(5164," actionEdit"),o(5165,"br"),t()()(),i(5166,"td",23)(5167,"code",136),e(5168,"(param: any) => FormGroup"),t()(),i(5169,"td",26)(5170,"p"),e(5171,`M\xE9todo executado ao iniciar o modo edi\xE7\xE3o.
\xC9 passado um par\xE2metro com os valores respectivos de cada coluna.
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(5172,"code"),e(5173,"property"),t(),e(5174," da coluna desejada."),t(),i(5175,"p"),e(5176,"Exemplo de envio para a API:"),t(),i(5177,"pre")(5178,"code",28),e(5179,`<thf-grid
  t-service-api="https://po-sample-api.onrender.com/v1/people"
  [t-columns]="columns"
  [t-edit-properties]="editProperties"
>
</thf-grid>`),t()(),i(5180,"pre")(5181,"code",31),e(5182,`form: FormGroup;
editProperties: ThfGridEditProperties;

ngOnInit() {
  this.editProperties = {
    actionEdit: this.setFormGroup.bind(this),
    validate: this.changeValueForm.bind(this) // PROPRIEDADE OPCIONAL
  };
}

setFormGroup(dataItem) {
  const genreDescription = this.columns1.find(column => column.property === 'genreDescription');
  genreDescription.editProperties.disabled = true;
  genreDescription.editProperties.options = this.appService.getCity(dataItem.genre);
  this.form = new FormGroup({
    id: new FormControl(dataItem.id, [Validators.required]) // ID \xC9 OBRIGAT\xD3RIO,
    city: new FormControl(dataItem.city),
    email: new FormControl(dataItem.email),
    birthdate: new FormControl(dataItem.birthdate),
    genre: new FormControl(dataItem.genre),
    status: new FormControl(dataItem.status),
    genreDescription: new FormControl(dataItem.genreDescription, [Validators.required])
  });
  return this.form;
};`),t()()()(),i(5183,"tr",19)(5184,"td",20)(5185,"div",21)(5186,"span",22),e(5187," validate"),o(5188,"br"),t()()(),i(5189,"td",23)(5190,"code",137),e(5191,"(data: any, columnProperty: string) => FormGroup"),t()(),i(5192,"td",26)(5193,"em")(5194,"strong"),e(5195,"(opcional)"),t()(),i(5196,"p"),e(5197,`M\xE9todo executado ao alterar o valor de algum campo do formul\xE1rio.
O primeiro par\xE2metro s\xE3o os valores respectivos de cada coluna.
O segundo par\xE2metro \xE9 indicando a `),i(5198,"code"),e(5199,"property"),t(),e(5200,` da coluna que teve o valor alterado
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(5201,"code"),e(5202,"property"),t(),e(5203," da coluna desejada."),t()()()()(),i(5204,"po-accordion-item",138)(5205,"h4",9)(5206,"code"),e(5207,"ThfGridLiterals"),t()(),i(5208,"div",10)(5209,"p"),e(5210,"Interface para customizar literais ("),i(5211,"strong"),e(5212,"t-literals"),t(),e(5213,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(5214,"h4",15),e(5215,"Propriedades"),t(),i(5216,"table",16)(5217,"tr",17)(5218,"th",18),e(5219,"Nome"),t(),i(5220,"th",18),e(5221,"Tipo"),t(),i(5222,"th",18),e(5223,"Descri\xE7\xE3o"),t()(),i(5224,"tr",19)(5225,"td",20)(5226,"div",21)(5227,"span",22),e(5228," advancedSearch"),o(5229,"br"),t()()(),i(5230,"td",23)(5231,"code",38),e(5232,"string"),t()(),i(5233,"td",26)(5234,"em")(5235,"strong"),e(5236,"(opcional)"),t()(),i(5237,"p"),e(5238,"T\xEDtulo do modal Filtros"),t()()(),i(5239,"tr",19)(5240,"td",20)(5241,"div",21)(5242,"span",22),e(5243," bodyDelete"),o(5244,"br"),t()()(),i(5245,"td",23)(5246,"code",38),e(5247,"string"),t()(),i(5248,"td",26)(5249,"em")(5250,"strong"),e(5251,"(opcional)"),t()(),i(5252,"p"),e(5253,"Conte\xFAdo do modal Excluir"),t()()(),i(5254,"tr",19)(5255,"td",20)(5256,"div",21)(5257,"span",22),e(5258," bodyDeleteBatch"),o(5259,"br"),t()()(),i(5260,"td",23)(5261,"code",38),e(5262,"string"),t()(),i(5263,"td",26)(5264,"em")(5265,"strong"),e(5266,"(opcional)"),t()(),i(5267,"p"),e(5268,"Conte\xFAdo do modal Excluir configurado para excluir em lote"),t()()(),i(5269,"tr",19)(5270,"td",20)(5271,"div",21)(5272,"span",22),e(5273," cancel"),o(5274,"br"),t()()(),i(5275,"td",23)(5276,"code",38),e(5277,"string"),t()(),i(5278,"td",26)(5279,"em")(5280,"strong"),e(5281,"(opcional)"),t()(),i(5282,"p"),e(5283,"Label do bot\xE3o Cancelar"),t()()(),i(5284,"tr",19)(5285,"td",20)(5286,"div",21)(5287,"span",22),e(5288," columnsManager"),o(5289,"br"),t()()(),i(5290,"td",23)(5291,"code",38),e(5292,"string"),t()(),i(5293,"td",26)(5294,"em")(5295,"strong"),e(5296,"(opcional)"),t()(),i(5297,"p"),e(5298,"T\xEDtulo do page-slide Gerenciar Tabela"),t()()(),i(5299,"tr",19)(5300,"td",20)(5301,"div",21)(5302,"span",22),e(5303," compact"),o(5304,"br"),t()()(),i(5305,"td",23)(5306,"code",38),e(5307,"string"),t()(),i(5308,"td",26)(5309,"em")(5310,"strong"),e(5311,"(opcional)"),t()(),i(5312,"p"),e(5313,"Label do radio de densidade Compacto no Gerenciar Tabela"),t()()(),i(5314,"tr",19)(5315,"td",20)(5316,"div",21)(5317,"span",22),e(5318," confirm"),o(5319,"br"),t()()(),i(5320,"td",23)(5321,"code",38),e(5322,"string"),t()(),i(5323,"td",26)(5324,"em")(5325,"strong"),e(5326,"(opcional)"),t()(),i(5327,"p"),e(5328,"Label do bot\xE3o Confirmar"),t()()(),i(5329,"tr",19)(5330,"td",20)(5331,"div",21)(5332,"span",22),e(5333," default"),o(5334,"br"),t()()(),i(5335,"td",23)(5336,"code",38),e(5337,"string"),t()(),i(5338,"td",26)(5339,"em")(5340,"strong"),e(5341,"(opcional)"),t()(),i(5342,"p"),e(5343,"Label do radio de densidade Espa\xE7oso no Gerenciar Tabela"),t()()(),i(5344,"tr",19)(5345,"td",20)(5346,"div",21)(5347,"span",22),e(5348," delete"),o(5349,"br"),t()()(),i(5350,"td",23)(5351,"code",38),e(5352,"string"),t()(),i(5353,"td",26)(5354,"em")(5355,"strong"),e(5356,"(opcional)"),t()(),i(5357,"p"),e(5358,"Label do bot\xE3o Excluir"),t()()(),i(5359,"tr",19)(5360,"td",20)(5361,"div",21)(5362,"span",22),e(5363," deleteApiError"),o(5364,"br"),t()()(),i(5365,"td",23)(5366,"code",38),e(5367,"string"),t()(),i(5368,"td",26)(5369,"em")(5370,"strong"),e(5371,"(opcional)"),t()(),i(5372,"p"),e(5373,"Resposta de erro da requisi\xE7\xE3o delete no popup"),t()()(),i(5374,"tr",19)(5375,"td",20)(5376,"div",21)(5377,"span",22),e(5378," deleteItem"),o(5379,"br"),t()()(),i(5380,"td",23)(5381,"code",38),e(5382,"string"),t()(),i(5383,"td",26)(5384,"em")(5385,"strong"),e(5386,"(opcional)"),t()(),i(5387,"p"),e(5388,"T\xEDtulo do modal Excluir"),t()()(),i(5389,"tr",19)(5390,"td",20)(5391,"div",21)(5392,"span",22),e(5393," density"),o(5394,"br"),t()()(),i(5395,"td",23)(5396,"code",38),e(5397,"string"),t()(),i(5398,"td",26)(5399,"em")(5400,"strong"),e(5401,"(opcional)"),t()(),i(5402,"p"),e(5403,'T\xEDtulo da sess\xE3o "Densidade" no Gerenciar Tabela'),t()()(),i(5404,"tr",19)(5405,"td",20)(5406,"div",21)(5407,"span",22),e(5408," draggable"),o(5409,"br"),t()()(),i(5410,"td",23)(5411,"code",38),e(5412,"string"),t()(),i(5413,"td",26)(5414,"em")(5415,"strong"),e(5416,"(opcional)"),t()(),i(5417,"p"),e(5418,'Label da op\xE7\xE3o "Draggable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(5419,"tr",19)(5420,"td",20)(5421,"div",21)(5422,"span",22),e(5423," edit"),o(5424,"br"),t()()(),i(5425,"td",23)(5426,"code",38),e(5427,"string"),t()(),i(5428,"td",26)(5429,"em")(5430,"strong"),e(5431,"(opcional)"),t()(),i(5432,"p"),e(5433,"Label do bot\xE3o Editar"),t()()(),i(5434,"tr",19)(5435,"td",20)(5436,"div",21)(5437,"span",22),e(5438," editRow"),o(5439,"br"),t()()(),i(5440,"td",23)(5441,"code",38),e(5442,"string"),t()(),i(5443,"td",26)(5444,"em")(5445,"strong"),e(5446,"(opcional)"),t()(),i(5447,"p"),e(5448,"T\xEDtulo das a\xE7\xF5es quando Edi\xE7\xE3o em linha."),t()()(),i(5449,"tr",19)(5450,"td",20)(5451,"div",21)(5452,"span",22),e(5453," export"),o(5454,"br"),t()()(),i(5455,"td",23)(5456,"code",38),e(5457,"string"),t()(),i(5458,"td",26)(5459,"em")(5460,"strong"),e(5461,"(opcional)"),t()(),i(5462,"p"),e(5463,"Label do bot\xE3o Exportar"),t()()(),i(5464,"tr",19)(5465,"td",20)(5466,"div",21)(5467,"span",22),e(5468," exportExcel"),o(5469,"br"),t()()(),i(5470,"td",23)(5471,"code",38),e(5472,"string"),t()(),i(5473,"td",26)(5474,"em")(5475,"strong"),e(5476,"(opcional)"),t()(),i(5477,"p"),e(5478,"Label do bot\xE3o Exportar Excel"),t()()(),i(5479,"tr",19)(5480,"td",20)(5481,"div",21)(5482,"span",22),e(5483," exportPDF"),o(5484,"br"),t()()(),i(5485,"td",23)(5486,"code",38),e(5487,"string"),t()(),i(5488,"td",26)(5489,"em")(5490,"strong"),e(5491,"(opcional)"),t()(),i(5492,"p"),e(5493,"Label do bot\xE3o Exportar PDF"),t()()(),i(5494,"tr",19)(5495,"td",20)(5496,"div",21)(5497,"span",22),e(5498," extraCompact"),o(5499,"br"),t()()(),i(5500,"td",23)(5501,"code",38),e(5502,"string"),t()(),i(5503,"td",26)(5504,"em")(5505,"strong"),e(5506,"(opcional)"),t()(),i(5507,"p"),e(5508,"Label do radio de densidade Extra Compacto no Gerenciar Tabela"),t()()(),i(5509,"tr",19)(5510,"td",20)(5511,"div",21)(5512,"span",22),e(5513," filters"),o(5514,"br"),t()()(),i(5515,"td",23)(5516,"code",38),e(5517,"string"),t()(),i(5518,"td",26)(5519,"em")(5520,"strong"),e(5521,"(opcional)"),t()(),i(5522,"p"),e(5523,"Label do bot\xE3o Filtros"),t()()(),i(5524,"tr",19)(5525,"td",20)(5526,"div",21)(5527,"span",22),e(5528," fixed"),o(5529,"br"),t()()(),i(5530,"td",23)(5531,"code",38),e(5532,"string"),t()(),i(5533,"td",26)(5534,"em")(5535,"strong"),e(5536,"(opcional)"),t()(),i(5537,"p"),e(5538,'T\xEDtulo da sess\xE3o "Fixo" no Gerenciar Tabela'),t()()(),i(5539,"tr",19)(5540,"td",20)(5541,"div",21)(5542,"span",22),e(5543," gridRowActionsConfirmAddCancelButton"),o(5544,"br"),t()()(),i(5545,"td",23)(5546,"code",38),e(5547,"string"),t()(),i(5548,"td",26)(5549,"em")(5550,"strong"),e(5551,"(opcional)"),t()(),i(5552,"p"),e(5553,'Label do bot\xE3o "Cancelar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5554,"tr",19)(5555,"td",20)(5556,"div",21)(5557,"span",22),e(5558," gridRowActionsConfirmAddConfirmButton"),o(5559,"br"),t()()(),i(5560,"td",23)(5561,"code",38),e(5562,"string"),t()(),i(5563,"td",26)(5564,"em")(5565,"strong"),e(5566,"(opcional)"),t()(),i(5567,"p"),e(5568,'Label do bot\xE3o "Confirmar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5569,"tr",19)(5570,"td",20)(5571,"div",21)(5572,"span",22),e(5573," gridRowActionsConfirmAddTitle"),o(5574,"br"),t()()(),i(5575,"td",23)(5576,"code",38),e(5577,"string"),t()(),i(5578,"td",26)(5579,"em")(5580,"strong"),e(5581,"(opcional)"),t()(),i(5582,"p"),e(5583,'T\xEDtulo do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5584,"tr",19)(5585,"td",20)(5586,"div",21)(5587,"span",22),e(5588," gridRowActionsConfirmEditTitle"),o(5589,"br"),t()()(),i(5590,"td",23)(5591,"code",38),e(5592,"string"),t()(),i(5593,"td",26)(5594,"em")(5595,"strong"),e(5596,"(opcional)"),t()(),i(5597,"p"),e(5598,'T\xEDtulo do modal "Abandonar edi\xE7\xE3o da linha".'),t()()(),i(5599,"tr",19)(5600,"td",20)(5601,"div",21)(5602,"span",22),e(5603," gridRowActionsConfirmRemoveAttention"),o(5604,"br"),t()()(),i(5605,"td",23)(5606,"code",38),e(5607,"string"),t()(),i(5608,"td",26)(5609,"em")(5610,"strong"),e(5611,"(opcional)"),t()(),i(5612,"p"),e(5613,'Texto de "Aten\xE7\xE3o:" do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5614,"tr",19)(5615,"td",20)(5616,"div",21)(5617,"span",22),e(5618," gridRowActionsConfirmRemoveConfirmButton"),o(5619,"br"),t()()(),i(5620,"td",23)(5621,"code",38),e(5622,"string"),t()(),i(5623,"td",26)(5624,"em")(5625,"strong"),e(5626,"(opcional)"),t()(),i(5627,"p"),e(5628,'Label do bot\xE3o "Excluir" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5629,"tr",19)(5630,"td",20)(5631,"div",21)(5632,"span",22),e(5633," gridRowActionsConfirmRemoveDescription"),o(5634,"br"),t()()(),i(5635,"td",23)(5636,"code",38),e(5637,"string"),t()(),i(5638,"td",26)(5639,"em")(5640,"strong"),e(5641,"(opcional)"),t()(),i(5642,"p"),e(5643,'Descri\xE7\xE3o do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5644,"tr",19)(5645,"td",20)(5646,"div",21)(5647,"span",22),e(5648," gridRowActionsConfirmRemoveTitle"),o(5649,"br"),t()()(),i(5650,"td",23)(5651,"code",38),e(5652,"string"),t()(),i(5653,"td",26)(5654,"em")(5655,"strong"),e(5656,"(opcional)"),t()(),i(5657,"p"),e(5658,'T\xEDtulo do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5659,"tr",19)(5660,"td",20)(5661,"div",21)(5662,"span",22),e(5663," gridRowActionsRestoreSuccessful"),o(5664,"br"),t()()(),i(5665,"td",23)(5666,"code",38),e(5667,"string"),t()(),i(5668,"td",26)(5669,"em")(5670,"strong"),e(5671,"(opcional)"),t()(),i(5672,"p"),e(5673,"Texto exibido ao restaurar um item exclu\xEDdo."),t()()(),i(5674,"tr",19)(5675,"td",20)(5676,"div",21)(5677,"span",22),e(5678," groupable"),o(5679,"br"),t()()(),i(5680,"td",23)(5681,"code",38),e(5682,"string"),t()(),i(5683,"td",26)(5684,"em")(5685,"strong"),e(5686,"(opcional)"),t()(),i(5687,"p"),e(5688,'Label da op\xE7\xE3o "Groupable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(5689,"tr",19)(5690,"td",20)(5691,"div",21)(5692,"span",22),e(5693," groupableText"),o(5694,"br"),t()()(),i(5695,"td",23)(5696,"code",38),e(5697,"string"),t()(),i(5698,"td",26)(5699,"em")(5700,"strong"),e(5701,"(opcional)"),t()(),i(5702,"p"),e(5703,"Texto do cabe\xE7alho onde se deve soltar as colunas que devem ser agrupadas."),t()()(),i(5704,"tr",19)(5705,"td",20)(5706,"div",21)(5707,"span",22),e(5708," legendListOptions"),o(5709,"br"),t()()(),i(5710,"td",23)(5711,"code",38),e(5712,"string"),t()(),i(5713,"td",26)(5714,"em")(5715,"strong"),e(5716,"(opcional)"),t()(),i(5717,"p"),e(5718,'T\xEDtulo da sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(5719,"tr",19)(5720,"td",20)(5721,"div",21)(5722,"span",22),e(5723," loadMoreData"),o(5724,"br"),t()()(),i(5725,"td",23)(5726,"code",38),e(5727,"string"),t()(),i(5728,"td",26)(5729,"em")(5730,"strong"),e(5731,"(opcional)"),t()(),i(5732,"p"),e(5733,"Label do bot\xE3o Carregar mais resultados"),t()()(),i(5734,"tr",19)(5735,"td",20)(5736,"div",21)(5737,"span",22),e(5738," loadingData"),o(5739,"br"),t()()(),i(5740,"td",23)(5741,"code",38),e(5742,"string"),t()(),i(5743,"td",26)(5744,"em")(5745,"strong"),e(5746,"(opcional)"),t()(),i(5747,"p"),e(5748,"Texto do modal Carregando..."),t()()(),i(5749,"tr",19)(5750,"td",20)(5751,"div",21)(5752,"span",22),e(5753," manageTable"),o(5754,"br"),t()()(),i(5755,"td",23)(5756,"code",38),e(5757,"string"),t()(),i(5758,"td",26)(5759,"em")(5760,"strong"),e(5761,"(opcional)"),t()(),i(5762,"p"),e(5763,"Label do bot\xE3o Gerenciar Tabela"),t()()(),i(5764,"tr",19)(5765,"td",20)(5766,"div",21)(5767,"span",22),e(5768," moreActions"),o(5769,"br"),t()()(),i(5770,"td",23)(5771,"code",38),e(5772,"string"),t()(),i(5773,"td",26)(5774,"em")(5775,"strong"),e(5776,"(opcional)"),t()(),i(5777,"p"),e(5778,"Label do bot\xE3o Mais a\xE7\xF5es"),t()()(),i(5779,"tr",19)(5780,"td",20)(5781,"div",21)(5782,"span",22),e(5783," multipleItems"),o(5784,"br"),t()()(),i(5785,"td",23)(5786,"code",38),e(5787,"string"),t()(),i(5788,"td",26)(5789,"em")(5790,"strong"),e(5791,"(opcional)"),t()(),i(5792,"p"),e(5793,"Texto auxiliar ao selecionar muitos itens exibido nas a\xE7\xF5es em lote."),t()()(),i(5794,"tr",19)(5795,"td",20)(5796,"div",21)(5797,"span",22),e(5798," noColumns"),o(5799,"br"),t()()(),i(5800,"td",23)(5801,"code",38),e(5802,"string"),t()(),i(5803,"td",26)(5804,"em")(5805,"strong"),e(5806,"(opcional)"),t()(),i(5807,"p"),e(5808,"Mensagem exibida quando n\xE3o existem colunas definidas."),t()()(),i(5809,"tr",19)(5810,"td",20)(5811,"div",21)(5812,"span",22),e(5813," noData"),o(5814,"br"),t()()(),i(5815,"td",23)(5816,"code",38),e(5817,"string"),t()(),i(5818,"td",26)(5819,"em")(5820,"strong"),e(5821,"(opcional)"),t()(),i(5822,"p"),e(5823,"Mensagem exibida quando n\xE3o existem itens para serem exibidos."),t()()(),i(5824,"tr",19)(5825,"td",20)(5826,"div",21)(5827,"span",22),e(5828," noDataDescriptionRowStateFilterActive"),o(5829,"br"),t()()(),i(5830,"td",23)(5831,"code",38),e(5832,"string"),t()(),i(5833,"td",26)(5834,"em")(5835,"strong"),e(5836,"(opcional)"),t()(),i(5837,"p"),e(5838,"Descri\xE7\xE3o exibida quando n\xE3o existem itens ativos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(5839,"tr",19)(5840,"td",20)(5841,"div",21)(5842,"span",22),e(5843," noDataDescriptionRowStateFilterRemoved"),o(5844,"br"),t()()(),i(5845,"td",23)(5846,"code",38),e(5847,"string"),t()(),i(5848,"td",26)(5849,"em")(5850,"strong"),e(5851,"(opcional)"),t()(),i(5852,"p"),e(5853,"Descri\xE7\xE3o exibida quando n\xE3o existem itens exclu\xEDdos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(5854,"tr",19)(5855,"td",20)(5856,"div",21)(5857,"span",22),e(5858," noDataRowStateFilterActive"),o(5859,"br"),t()()(),i(5860,"td",23)(5861,"code",38),e(5862,"string"),t()(),i(5863,"td",26)(5864,"em")(5865,"strong"),e(5866,"(opcional)"),t()(),i(5867,"p"),e(5868,"Mensagem exibida quando n\xE3o existem itens ativos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(5869,"tr",19)(5870,"td",20)(5871,"div",21)(5872,"span",22),e(5873," noDataRowStateFilterRemoved"),o(5874,"br"),t()()(),i(5875,"td",23)(5876,"code",38),e(5877,"string"),t()(),i(5878,"td",26)(5879,"em")(5880,"strong"),e(5881,"(opcional)"),t()(),i(5882,"p"),e(5883,"Mensagem exibida quando n\xE3o existem itens exclu\xEDdos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(5884,"tr",19)(5885,"td",20)(5886,"div",21)(5887,"span",22),e(5888," noItem"),o(5889,"br"),t()()(),i(5890,"td",23)(5891,"code",38),e(5892,"string"),t()(),i(5893,"td",26)(5894,"em")(5895,"strong"),e(5896,"(opcional)"),t()(),i(5897,"p"),e(5898,"Mensagem exibida quando nenhum item est\xE1 selecionado."),t()()(),i(5899,"tr",19)(5900,"td",20)(5901,"div",21)(5902,"span",22),e(5903," oneItem"),o(5904,"br"),t()()(),i(5905,"td",23)(5906,"code",38),e(5907,"string"),t()(),i(5908,"td",26)(5909,"em")(5910,"strong"),e(5911,"(opcional)"),t()(),i(5912,"p"),e(5913,"Texto ao selecionar um \xFAnico item exibido nas a\xE7\xF5es em lote."),t()()(),i(5914,"tr",19)(5915,"td",20)(5916,"div",21)(5917,"span",22),e(5918," onlyRequiredFields"),o(5919,"br"),t()()(),i(5920,"td",23)(5921,"code",38),e(5922,"string"),t()(),i(5923,"td",26)(5924,"em")(5925,"strong"),e(5926,"(opcional)"),t()(),i(5927,"p"),e(5928,'Label do toggle "Apenas campos obrigat\xF3rios" na edi\xE7\xE3o flu\xEDda.'),t()()(),i(5929,"tr",19)(5930,"td",20)(5931,"div",21)(5932,"span",22),e(5933," otherColumns"),o(5934,"br"),t()()(),i(5935,"td",23)(5936,"code",38),e(5937,"string"),t()(),i(5938,"td",26)(5939,"em")(5940,"strong"),e(5941,"(opcional)"),t()(),i(5942,"p"),e(5943,'T\xEDtulo da sess\xE3o "Outras colunas" no Gerenciar Tabela'),t()()(),i(5944,"tr",19)(5945,"td",20)(5946,"div",21)(5947,"span",22),e(5948," placeholderSearchInput"),o(5949,"br"),t()()(),i(5950,"td",23)(5951,"code",38),e(5952,"string"),t()(),i(5953,"td",26)(5954,"em")(5955,"strong"),e(5956,"(opcional)"),t()(),i(5957,"p"),e(5958,"Placeholder do campo Buscar na tabela"),t()()(),i(5959,"tr",19)(5960,"td",20)(5961,"div",21)(5962,"span",22),e(5963," requiredFieldsToasterDisableActionLabel"),o(5964,"br"),t()()(),i(5965,"td",23)(5966,"code",38),e(5967,"string"),t()(),i(5968,"td",26)(5969,"em")(5970,"strong"),e(5971,"(opcional)"),t()(),i(5972,"p"),e(5973,"Label da a\xE7\xE3o exibida no Toaster para desativar a visualiza\xE7\xE3o de campos obrigat\xF3rios"),t()()(),i(5974,"tr",19)(5975,"td",20)(5976,"div",21)(5977,"span",22),e(5978," requiredFieldsToasterEnableActionLabel"),o(5979,"br"),t()()(),i(5980,"td",23)(5981,"code",38),e(5982,"string"),t()(),i(5983,"td",26)(5984,"em")(5985,"strong"),e(5986,"(opcional)"),t()(),i(5987,"p"),e(5988,"Label da a\xE7\xE3o exibida no Toaster para ativar a visualiza\xE7\xE3o de campos obrigat\xF3rios"),t()()(),i(5989,"tr",19)(5990,"td",20)(5991,"div",21)(5992,"span",22),e(5993," requiredFieldsToasterMessage"),o(5994,"br"),t()()(),i(5995,"td",23)(5996,"code",38),e(5997,"string"),t()(),i(5998,"td",26)(5999,"em")(6e3,"strong"),e(6001,"(opcional)"),t()(),i(6002,"p"),e(6003,"Texto exibido no Toaster quando campos obrigat\xF3rios n\xE3o s\xE3o preenchidos"),t()()(),i(6004,"tr",19)(6005,"td",20)(6006,"div",21)(6007,"span",22),e(6008," requiredFieldsToasterSupportMessage"),o(6009,"br"),t()()(),i(6010,"td",23)(6011,"code",38),e(6012,"string"),t()(),i(6013,"td",26)(6014,"em")(6015,"strong"),e(6016,"(opcional)"),t()(),i(6017,"p"),e(6018,"Mensagem de suporte exibida no Toaster quando campos obrigat\xF3rios n\xE3o s\xE3o preenchidos"),t()()(),i(6019,"tr",19)(6020,"td",20)(6021,"div",21)(6022,"span",22),e(6023," restoreDefault"),o(6024,"br"),t()()(),i(6025,"td",23)(6026,"code",38),e(6027,"string"),t()(),i(6028,"td",26)(6029,"em")(6030,"strong"),e(6031,"(opcional)"),t()(),i(6032,"p"),e(6033,'Label do bot\xE3o "Restaurar padr\xE3o" no Gerenciar Tabela'),t()()(),i(6034,"tr",19)(6035,"td",20)(6036,"div",21)(6037,"span",22),e(6038," resultsByPage"),o(6039,"br"),t()()(),i(6040,"td",23)(6041,"code",38),e(6042,"string"),t()(),i(6043,"td",26)(6044,"em")(6045,"strong"),e(6046,"(opcional)"),t()(),i(6047,"p"),e(6048,'Label "Resultados por p\xE1gina" no Gerenciar Tabela.'),t()()(),i(6049,"tr",19)(6050,"td",20)(6051,"div",21)(6052,"span",22),e(6053," rowStateFilterActive"),o(6054,"br"),t()()(),i(6055,"td",23)(6056,"code",38),e(6057,"string"),t()(),i(6058,"td",26)(6059,"em")(6060,"strong"),e(6061,"(opcional)"),t()(),i(6062,"p"),e(6063,"Label do filtro para mostrar itens ativos"),t()()(),i(6064,"tr",19)(6065,"td",20)(6066,"div",21)(6067,"span",22),e(6068," rowStateFilterActiveLabel"),o(6069,"br"),t()()(),i(6070,"td",23)(6071,"code",38),e(6072,"string"),t()(),i(6073,"td",26)(6074,"em")(6075,"strong"),e(6076,"(opcional)"),t()(),i(6077,"p"),e(6078,"Label do filtro ap\xF3s selecionar a exibi\xE7\xE3o de itens ativos"),t()()(),i(6079,"tr",19)(6080,"td",20)(6081,"div",21)(6082,"span",22),e(6083," rowStateFilterRemoved"),o(6084,"br"),t()()(),i(6085,"td",23)(6086,"code",38),e(6087,"string"),t()(),i(6088,"td",26)(6089,"em")(6090,"strong"),e(6091,"(opcional)"),t()(),i(6092,"p"),e(6093,"Label do filtro para mostrar itens exclu\xEDdos"),t()()(),i(6094,"tr",19)(6095,"td",20)(6096,"div",21)(6097,"span",22),e(6098," rowStateFilterRemovedLabel"),o(6099,"br"),t()()(),i(6100,"td",23)(6101,"code",38),e(6102,"string"),t()(),i(6103,"td",26)(6104,"em")(6105,"strong"),e(6106,"(opcional)"),t()(),i(6107,"p"),e(6108,"Label do filtro ap\xF3s selecionar a exibi\xE7\xE3o de itens exclu\xEDdos"),t()()(),i(6109,"tr",19)(6110,"td",20)(6111,"div",21)(6112,"span",22),e(6113," save"),o(6114,"br"),t()()(),i(6115,"td",23)(6116,"code",38),e(6117,"string"),t()(),i(6118,"td",26)(6119,"em")(6120,"strong"),e(6121,"(opcional)"),t()(),i(6122,"p"),e(6123,"Label do bot\xE3o Salvar"),t()()(),i(6124,"tr",19)(6125,"td",20)(6126,"div",21)(6127,"span",22),e(6128," selectedItemsMultipleLabel"),o(6129,"br"),t()()(),i(6130,"td",23)(6131,"code",38),e(6132,"string"),t()(),i(6133,"td",26)(6134,"em")(6135,"strong"),e(6136,"(opcional)"),t()(),i(6137,"p"),e(6138,"Texto exibido ao selecionar m\xFAltiplos itens"),t()()(),i(6139,"tr",19)(6140,"td",20)(6141,"div",21)(6142,"span",22),e(6143," selectedItemsSingleLabel"),o(6144,"br"),t()()(),i(6145,"td",23)(6146,"code",38),e(6147,"string"),t()(),i(6148,"td",26)(6149,"em")(6150,"strong"),e(6151,"(opcional)"),t()(),i(6152,"p"),e(6153,"Texto exibido ao selecionar um \xFAnico item"),t()()(),i(6154,"tr",19)(6155,"td",20)(6156,"div",21)(6157,"span",22),e(6158," showOnlySelectedItemsTooltip"),o(6159,"br"),t()()(),i(6160,"td",23)(6161,"code",38),e(6162,"string"),t()(),i(6163,"td",26)(6164,"em")(6165,"strong"),e(6166,"(opcional)"),t()(),i(6167,"p"),e(6168,"Tooltip exibido ao passar o mouse sobre o switch que filtra itens selecionados"),t()()(),i(6169,"tr",19)(6170,"td",20)(6171,"div",21)(6172,"span",22),e(6173," warningAbandonEditing"),o(6174,"br"),t()()(),i(6175,"td",23)(6176,"code",38),e(6177,"string"),t()(),i(6178,"td",26)(6179,"em")(6180,"strong"),e(6181,"(opcional)"),t()(),i(6182,"p"),e(6183,'Mensagem do modal "Abandonar edi\xE7\xE3o da linha".'),t()()(),i(6184,"tr",19)(6185,"td",20)(6186,"div",21)(6187,"span",22),e(6188," warningColumnsRequired"),o(6189,"br"),t()()(),i(6190,"td",23)(6191,"code",38),e(6192,"string"),t()(),i(6193,"td",26)(6194,"em")(6195,"strong"),e(6196,"(opcional)"),t()(),i(6197,"p"),e(6198,'Mensagem do modal "Exclus\xE3o dos dados inseridos".'),t()()()()(),i(6199,"po-accordion-item",139)(6200,"h4",9)(6201,"code"),e(6202,"ThfGridOptionPaging"),t()(),i(6203,"div",10)(6204,"p"),e(6205,"Interface para configura\xE7\xE3o das op\xE7\xF5es de pagina\xE7\xE3o ("),i(6206,"strong"),e(6207,"t-options-paging"),t(),e(6208,")."),t()(),i(6209,"h4",15),e(6210,"Propriedades"),t(),i(6211,"table",16)(6212,"tr",17)(6213,"th",18),e(6214,"Nome"),t(),i(6215,"th",18),e(6216,"Tipo"),t(),i(6217,"th",18),e(6218,"Descri\xE7\xE3o"),t()(),i(6219,"tr",19)(6220,"td",20)(6221,"div",21)(6222,"span",22),e(6223," label"),o(6224,"br"),t()()(),i(6225,"td",23)(6226,"code",38),e(6227,"string"),t()(),i(6228,"td",26)(6229,"p"),e(6230,"Label correspondente a quantidade de itens"),t()()(),i(6231,"tr",19)(6232,"td",20)(6233,"div",21)(6234,"span",22),e(6235," value"),o(6236,"br"),t()()(),i(6237,"td",23)(6238,"code",50),e(6239,"number"),t()(),i(6240,"td",26)(6241,"p"),e(6242,"Quantidade de itens por p\xE1gina"),t()()()()(),i(6243,"po-accordion-item",140)(6244,"h4",9)(6245,"code"),e(6246,"ThfGridOptions"),t()(),i(6247,"div",10)(6248,"p"),e(6249,"Interface para as propriedades que permitem personalizar dinamicamente o comportamento do componente."),t()(),i(6250,"h4",15),e(6251,"Propriedades"),t(),i(6252,"table",16)(6253,"tr",17)(6254,"th",18),e(6255,"Nome"),t(),i(6256,"th",18),e(6257,"Tipo"),t(),i(6258,"th",18),e(6259,"Descri\xE7\xE3o"),t()(),i(6260,"tr",19)(6261,"td",20)(6262,"div",21)(6263,"span",22),e(6264," actions"),o(6265,"br"),t()()(),i(6266,"td",23)(6267,"code",29),e(6268,"Array<ThfTableAction>"),t()(),i(6269,"td",26)(6270,"em")(6271,"strong"),e(6272,"(opcional)"),t()(),i(6273,"p"),e(6274,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar no grid atrav\xE9s de bot\xF5es."),t()()(),i(6275,"tr",19)(6276,"td",20)(6277,"div",21)(6278,"span",22),e(6279," columns"),o(6280,"br"),t()()(),i(6281,"td",23)(6282,"code",36),e(6283,"Array<ThfGridColumn>"),t()(),i(6284,"td",26)(6285,"em")(6286,"strong"),e(6287,"(opcional)"),t()(),i(6288,"p"),e(6289,`Lista das colunas usadas no grid e busca avan\xE7ada.
Caso precise alterar uma coluna que j\xE1 exista deve ser passado o atributo `),i(6290,"code"),e(6291,"property"),t(),e(6292," com o mesmo conte\xFAdo do original."),t()()(),i(6293,"tr",19)(6294,"td",20)(6295,"div",21)(6296,"span",22),e(6297," customActions"),o(6298,"br"),t()()(),i(6299,"td",23)(6300,"code",40),e(6301,"Array<PoDropdownAction>"),t()(),i(6302,"td",26)(6303,"em")(6304,"strong"),e(6305,"(opcional)"),t()(),i(6306,"p"),e(6307,"Lista de a\xE7\xF5es customizadas do grid que ser\xE3o incorporadas \xE0s a\xE7\xF5es informadas atrav\xE9s da propriedade "),i(6308,"code"),e(6309,"actions"),t(),e(6310,"."),t(),i(6311,"pre")(6312,"code",31),e(6313,`// Exemplo de uso:
[
 { label: 'Apply Discount', action: this.applyDiscount.bind(this) },
 { label: 'Details', action: this.details.bind(this) }
];`),t()()()()()(),i(6314,"po-accordion-item",141)(6315,"h4",9)(6316,"code"),e(6317,"ThfGridRowActions"),t()(),i(6318,"div",10)(6319,"p"),e(6320,"Interface para configura\xE7\xE3o da edi\xE7\xE3o flu\xEDda ("),i(6321,"strong"),e(6322,"t-grid-row-actions"),t(),e(6323,`).
Essas a\xE7\xF5es permitem manipular o comportamento de edi\xE7\xE3o, inser\xE7\xE3o e remo\xE7\xE3o de dados no grid.`),t()(),i(6324,"h4",15),e(6325,"Propriedades"),t(),i(6326,"table",16)(6327,"tr",17)(6328,"th",18),e(6329,"Nome"),t(),i(6330,"th",18),e(6331,"Tipo"),t(),i(6332,"th",18),e(6333,"Descri\xE7\xE3o"),t()(),i(6334,"tr",19)(6335,"td",20)(6336,"div",21)(6337,"span",22),e(6338," actionEdit"),o(6339,"br"),t()()(),i(6340,"td",23)(6341,"code",142),e(6342,"(param: any, mode: 'edit' "),t(),i(6343,"code",143),e(6344," 'include') => FormGroup "),t(),i(6345,"code",144),e(6346," Observable<FormGroup>"),t()(),i(6347,"td",26)(6348,"p"),e(6349,`Fun\xE7\xE3o respons\xE1vel por iniciar o modo de edi\xE7\xE3o ou inclus\xE3o de uma linha no grid.
O m\xE9todo recebe os dados da linha selecionada ou um objeto vazio no modo de inclus\xE3o.
Deve retornar um `),i(6350,"code"),e(6351,"FormGroup"),t(),e(6352," que ser\xE1 utilizado para controlar os valores das colunas edit\xE1veis."),t(),i(6353,"pre")(6354,"code",31),e(6355,`// Exemplo de uso:

actionEdit: (param, mode) => new FormGroup({
  name: new FormControl(param.name),
  age: new FormControl(param.age)
})`),t()(),i(6356,"p"),e(6357,"ou"),t(),i(6358,"pre")(6359,"code",31),e(6360,`actionEdit: (dataItem, mode) => {
return this.appService
 .listItems('https://po-sample-api.onrender.com/v1/heroes', { name: 'Robert Bruce Banner' })
  .pipe(
     map(items => {
       return new FormGroup({
         name: new FormControl(items.name),
         age: new FormControl(items.age)
       })
     }
   )
 }`),t()()()(),i(6361,"tr",19)(6362,"td",20)(6363,"div",21)(6364,"span",22),e(6365," afterRemove"),o(6366,"br"),t()()(),i(6367,"td",23)(6368,"code",145),e(6369,"(row: any) => void"),t()(),i(6370,"td",26)(6371,"em")(6372,"strong"),e(6373,"(opcional)"),t()(),i(6374,"p"),e(6375,`Fun\xE7\xE3o opcional executada ap\xF3s a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(6376,"tr",19)(6377,"td",20)(6378,"div",21)(6379,"span",22),e(6380," afterSave"),o(6381,"br"),t()()(),i(6382,"td",23)(6383,"code",145),e(6384,"(row: any) => void"),t()(),i(6385,"td",26)(6386,"em")(6387,"strong"),e(6388,"(opcional)"),t()(),i(6389,"p"),e(6390,`Fun\xE7\xE3o opcional executada ap\xF3s o salvamento de uma linha editada.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a conclus\xE3o de uma edi\xE7\xE3o.`),t()()(),i(6391,"tr",19)(6392,"td",20)(6393,"div",21)(6394,"span",22),e(6395," afterUndoRemove"),o(6396,"br"),t()()(),i(6397,"td",23)(6398,"code",145),e(6399,"(row: any) => void"),t()(),i(6400,"td",26)(6401,"em")(6402,"strong"),e(6403,"(opcional)"),t()(),i(6404,"p"),e(6405,`Fun\xE7\xE3o opcional executada ap\xF3s desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s desfazer a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(6406,"tr",19)(6407,"td",20)(6408,"div",21)(6409,"span",22),e(6410," beforeInsert"),o(6411,"br"),t()()(),i(6412,"td",23)(6413,"code",146),e(6414,"(row: any) => boolean "),t(),i(6415,"code",147),e(6416," Observable<boolean>"),t()(),i(6417,"td",26)(6418,"em")(6419,"strong"),e(6420,"(opcional)"),t()(),i(6421,"p"),e(6422,`Fun\xE7\xE3o opcional executada antes de inserir uma nova linha no grid.
Pode ser usada para validar ou modificar os dados antes da inclus\xE3o.`),t()()(),i(6423,"tr",19)(6424,"td",20)(6425,"div",21)(6426,"span",22),e(6427," beforeRemove"),o(6428,"br"),t()()(),i(6429,"td",23)(6430,"code",146),e(6431,"(row: any) => boolean "),t(),i(6432,"code",147),e(6433," Observable<boolean>"),t()(),i(6434,"td",26)(6435,"em")(6436,"strong"),e(6437,"(opcional)"),t()(),i(6438,"p"),e(6439,`Fun\xE7\xE3o opcional executada antes de remover uma linha do grid.
Pode ser usada para validar ou confirmar a remo\xE7\xE3o da linha.`),t()()(),i(6440,"tr",19)(6441,"td",20)(6442,"div",21)(6443,"span",22),e(6444," beforeSave"),o(6445,"br"),t()()(),i(6446,"td",23)(6447,"code",148),e(6448,"(updatedRow: any, originalRow: any) => boolean "),t(),i(6449,"code",147),e(6450," Observable<boolean>"),t()(),i(6451,"td",26)(6452,"em")(6453,"strong"),e(6454,"(opcional)"),t()(),i(6455,"p"),e(6456,`Fun\xE7\xE3o opcional executada antes de salvar as altera\xE7\xF5es de uma linha editada.
Pode ser usada para validar ou modificar os dados antes de confirmar a edi\xE7\xE3o.`),t()()(),i(6457,"tr",19)(6458,"td",20)(6459,"div",21)(6460,"span",22),e(6461," beforeUndoRemove"),o(6462,"br"),t()()(),i(6463,"td",23)(6464,"code",146),e(6465,"(row: any) => boolean "),t(),i(6466,"code",147),e(6467," Observable<boolean>"),t()(),i(6468,"td",26)(6469,"em")(6470,"strong"),e(6471,"(opcional)"),t()(),i(6472,"p"),e(6473,`Fun\xE7\xE3o opcional executada antes de desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para validar ou confirmar o desfazer da remo\xE7\xE3o da linha.`),t()()(),i(6474,"tr",19)(6475,"td",20)(6476,"div",21)(6477,"span",22),e(6478," change"),o(6479,"br"),t()()(),i(6480,"td",23)(6481,"code",149),e(6482,"(updatedRows: Array<any>) => void"),t()(),i(6483,"td",26)(6484,"em")(6485,"strong"),e(6486,"(opcional)"),t()(),i(6487,"p"),e(6488,`Fun\xE7\xE3o opcional que retorna a lista atualizada sempre que ocorre edi\xE7\xE3o, inclus\xE3o ou remo\xE7\xE3o.
Facilita o monitoramento das mudan\xE7as feitas, permitindo que se veja rapidamente o que foi alterado no grid.
Ser\xE1 disparado apenas durante a\xE7\xF5es de edi\xE7\xE3o flu\xEDda, sem compatibilidade com outros eventos.`),t()()(),i(6489,"tr",19)(6490,"td",20)(6491,"div",21)(6492,"span",22),e(6493," hiddenGrid"),o(6494,"br"),t()()(),i(6495,"td",23)(6496,"code",24),e(6497,"boolean"),t()(),i(6498,"td",26)(6499,"em")(6500,"strong"),e(6501,"(opcional)"),t()(),i(6502,"p"),e(6503,"Propriedade opcional utilizada para determinar se a grid deve ser ocultada quando n\xE3o houver registros."),t()()(),i(6504,"tr",19)(6505,"td",20)(6506,"div",21)(6507,"span",22),e(6508," noPermission"),o(6509,"br"),t()()(),i(6510,"td",23)(6511,"code",150),e(6512,"Array<ThfGridEditModeActionType>"),t()(),i(6513,"td",26)(6514,"em")(6515,"strong"),e(6516,"(opcional)"),t()(),i(6517,"p"),e(6518,`Propriedade opcional que permite remover e desabilitar as a\xE7\xF5es no grid.
Os valores permitidos no array s\xE3o definidos pelo enum `),i(6519,"strong"),e(6520,"ThfGridEditModeActionType"),t(),e(6521,":"),t(),i(6522,"pre")(6523,"code",31),e(6524,`// Exemplo de uso:

gridRowActions: ThfGridRowActions = {
 noPermission: [
   ThfGridEditModeActionType.Replace,
   ThfGridEditModeActionType.Add,
   ThfGridEditModeActionType.Remove] // Desabilita edi\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o
  // outras a\xE7\xF5es...
};`),t()()()(),i(6525,"tr",19)(6526,"td",20)(6527,"div",21)(6528,"span",22),e(6529," title"),o(6530,"br"),t()()(),i(6531,"td",23)(6532,"code",38),e(6533,"string"),t()(),i(6534,"td",26)(6535,"em")(6536,"strong"),e(6537,"(opcional)"),t()(),i(6538,"p"),e(6539,"T\xEDtulo opcional que pode ser usado para exibir um cabe\xE7alho ou descri\xE7\xE3o na interface."),t()()(),i(6540,"tr",19)(6541,"td",20)(6542,"div",21)(6543,"span",22),e(6544," validateField"),o(6545,"br"),t()()(),i(6546,"td",23)(6547,"code",151),e(6548,"(updatedField: any, columnProperty: string) => boolean "),t(),i(6549,"code",147),e(6550," Observable<boolean>"),t()(),i(6551,"td",26)(6552,"em")(6553,"strong"),e(6554,"(opcional)"),t()(),i(6555,"p"),e(6556,`Fun\xE7\xE3o opcional executada quando algum campo \xE9 alterado.
Pode ser usada para validar ou modificar dados baseados no valor alterado.`),t(),i(6557,"pre")(6558,"code",31),e(6559,`// Exemplo de uso:

onValidate(updatedField, property) {

 if(property === 'pais') {
     this.myForm?.controls['capital'].setValue(null); // valor da capital modificado para nulo
     const valuePais = this.myForm.controls[property].value;
     const capital = this.columnWithItems.find(column => column.property === 'capital');
      if (valuePais === 'Brasil') {
         capital.editProperties.disabled = false;
         this.form?.controls['capital'].setValue('Brasilia'); // Modificado o valor do campo "capital" baseado no valor do campo "pais"
      } else if (valuePais === 'Portugal') {
          capital.editProperties.disabled = false;
          this.form?.controls['capital'].setValue('Lisboa');
      } else {
        capital.editProperties.disabled = true;
        this.form?.controls['capital'].setValue('');
     }

   return true;
 }
}`),t()()()()()()()(),D(6560,4),t(),i(6561,"po-tab",152),D(6562,5),i(6563,"po-container",5)(6564,"po-accordion",6)(6565,"po-accordion-item",153)(6566,"h4",9)(6567,"code"),e(6568,"ThfColumnSpacing"),t()(),i(6569,"h4",15),e(6570,"Propriedades"),t(),i(6571,"table",16)(6572,"tr",17)(6573,"th",18),e(6574,"Nome"),t(),i(6575,"th",18),e(6576,"Descri\xE7\xE3o"),t()(),i(6577,"tr",19)(6578,"td",20)(6579,"div",21)(6580,"span",22),e(6581," ExtraSmall"),o(6582,"br"),t()()(),i(6583,"td",26)(6584,"p"),e(6585,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),t()()(),i(6586,"tr",19)(6587,"td",20)(6588,"div",21)(6589,"span",22),e(6590," Large"),o(6591,"br"),t()()(),i(6592,"td",26)(6593,"p"),e(6594,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()(),i(6595,"tr",19)(6596,"td",20)(6597,"div",21)(6598,"span",22),e(6599," Medium"),o(6600,"br"),t()()(),i(6601,"td",26)(6602,"p"),e(6603,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(6604,"tr",19)(6605,"td",20)(6606,"div",21)(6607,"span",22),e(6608," Small"),o(6609,"br"),t()()(),i(6610,"td",26)(6611,"p"),e(6612,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()()()(),i(6613,"po-accordion-item",154)(6614,"h4",9)(6615,"code"),e(6616,"ThfGridEditModeActionType"),t()(),i(6617,"h4",15),e(6618,"Propriedades"),t(),i(6619,"table",16)(6620,"tr",17)(6621,"th",18),e(6622,"Nome"),t(),i(6623,"th",18),e(6624,"Descri\xE7\xE3o"),t()(),i(6625,"tr",19)(6626,"td",20)(6627,"div",21)(6628,"span",22),e(6629," Add"),o(6630,"br"),t()()(),i(6631,"td",26)(6632,"p"),e(6633,"A\xE7\xE3o de inclus\xE3o"),t()()(),i(6634,"tr",19)(6635,"td",20)(6636,"div",21)(6637,"span",22),e(6638," Remove"),o(6639,"br"),t()()(),i(6640,"td",26)(6641,"p"),e(6642,"A\xE7\xE3o de remo\xE7\xE3o"),t()()(),i(6643,"tr",19)(6644,"td",20)(6645,"div",21)(6646,"span",22),e(6647," Replace"),o(6648,"br"),t()()(),i(6649,"td",26)(6650,"p"),e(6651,"A\xE7\xE3o de edi\xE7\xE3o"),t()()()()()()(),D(6652,6),t(),i(6653,"po-tab",155),D(6654,7),i(6655,"po-container",5)(6656,"po-accordion",6)(6657,"po-accordion-item",156)(6658,"h4",9)(6659,"code"),e(6660,"ThfGridCellTemplateDirective"),t()(),i(6661,"div",10)(6662,"p"),e(6663,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(6664,"p"),e(6665,"Em seu uso, deve-se apenas adicionar a diretiva "),i(6666,"strong"),e(6667,"t-grid-cell-template"),t(),e(6668," \xE0 tag "),i(6669,"code"),e(6670,"ng-template"),t(),e(6671,"."),t(),i(6672,"p"),e(6673,"Retorno:"),t(),i(6674,"ul")(6675,"li")(6676,"code"),e(6677,"column"),t(),e(6678,": conte\xFAdo da coluna corrente."),t(),i(6679,"li")(6680,"code"),e(6681,"row"),t(),e(6682,": conte\xFAdo da linha corrente"),t()(),i(6683,"p"),e(6684,"Modo de uso:"),t(),i(6685,"pre")(6686,"code"),e(6687,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com"
  >
    <ng-template t-grid-cell-template let-column="column" let-row="row">
     <div *ngIf="column.property === 'status' && row.status === 'CANCELED'">
       <h1 [style.background]="'red'">CANCELADA</h1>
       <span (click)="onClick()"><small>clique aqui</small></span>
     </div>
     <h1 *ngIf="column.property === 'status' && row.status === 'FINISHED'" [style.background]="'green'">FINALIZADA</h1>
     <h1 *ngIf="column.property === 'status' && row.status === 'OPENED'" [style.background]="'orange'">ABERTA</h1>
     <h1 *ngIf="column.property === 'status2'">Conte\xFAdo do status 2</h1>
     <h1 *ngIf="column.property === 'status3'">Conte\xFAdo do status 3</h1>
   </ng-template>
...`),t()(),i(6688,"blockquote")(6689,"p"),e(6690,"No exemplo acima, o usu\xE1rio tem como retorno "),i(6691,"code"),e(6692,"row"),t(),e(6693," e a "),i(6694,"code"),e(6695,"column"),t(),e(6696," corrente, neste caso ele tem total liberdade para manipular os objetos."),t()(),i(6697,"p"),e(6698,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(6699,"pre")(6700,"code"),e(6701,`...
export class AppComponent {

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...`),t()(),i(6702,"blockquote")(6703,"p"),e(6704,"Observa\xE7\xE3o: Sempre adicionar o "),i(6705,"strong"),e(6706,"type"),t(),e(6707," da coluna que deseja manipular com a directiva como "),i(6708,"code"),e(6709,"cellTemplate"),t()()()(),i(6710,"div",11)(6711,"h4",12),e(6712,"Seletor"),t(),i(6713,"pre",13),e(6714,`<[t-grid-cell-template] >
</[t-grid-cell-template]>
`),t()()(),i(6715,"po-accordion-item",157)(6716,"h4",9)(6717,"code"),e(6718,"ThfGridColumnTemplateDirective"),t()(),i(6719,"div",10)(6720,"p"),e(6721,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(6722,"p"),e(6723,"Em seu uso, deve-se utilizar como par\xE2metro de entrada o input "),i(6724,"strong"),e(6725,"[t-property]"),t(),e(6726,`, o qual \xE9 respons\xE1vel por informar ao THF-GRID qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),t(),i(6727,"p"),e(6728,"Retorno:"),t(),i(6729,"ul")(6730,"li"),e(6731,"value: valor referente ao conte\xFAdo da linha corrente."),t()(),i(6732,"p"),e(6733,"Modo de uso:"),t(),i(6734,"pre")(6735,"code",28),e(6736,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template t-grid-column-template [t-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</thf-grid>
...`),t()(),i(6737,"blockquote")(6738,"p"),e(6739,"No exemplo acima, todas as c\xE9lulas correspondentes a coluna "),i(6740,"code"),e(6741,"status"),t(),e(6742," ter\xE3o o conte\xFAdo alterado para "),i(6743,"code"),e(6744,"<h1>${value}</h1>"),t(),e(6745,`,
sendo que `),i(6746,"code"),e(6747,"value"),t(),e(6748," refere-se ao conte\xFAdo da linha."),t()(),i(6749,"pre")(6750,"code",28),e(6751,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template  t-grid-column-template [t-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</thf-grid>
...`),t()(),i(6752,"blockquote")(6753,"p"),e(6754,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),t()(),i(6755,"p"),e(6756,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(6757,"pre")(6758,"code",31),e(6759,`...
export class AppComponent {

   targetProperty= 'status';

   columns = [
     { property: 'code', label: 'ID' },
     { property: 'product', label: 'PRODUTO' },
     { property: 'status', label: 'STATUS', type: 'columnTemplate' }
   ];
}
...`),t()(),i(6760,"blockquote")(6761,"p"),e(6762,"Observa\xE7\xE3o: Sempre adicionar o "),i(6763,"strong"),e(6764,"type"),t(),e(6765," da coluna que deseja manipular com a directiva como "),i(6766,"code"),e(6767,"columnTemplate"),t()()()(),i(6768,"div",11)(6769,"h4",12),e(6770,"Seletor"),t(),i(6771,"pre",13),e(6772,`<[t-grid-column-template] >
</[t-grid-column-template]>
`),t()()()()(),D(6773,8),t(),i(6774,"po-tab",158)(6775,"po-container",5),D(6776,9),i(6777,"h3",159),e(6778,"Tokens customiz\xE1veis"),t(),i(6779,"p"),e(6780,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(6781,"blockquote")(6782,"p"),e(6783,"Para maiores informa\xE7\xF5es, acesse o guia "),i(6784,"a",160),e(6785,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(6786,"."),t()(),i(6787,"table")(6788,"thead")(6789,"tr")(6790,"th"),e(6791,"Propriedade"),t(),i(6792,"th"),e(6793,"Descri\xE7\xE3o"),t(),i(6794,"th"),e(6795,"Valor Padr\xE3o"),t()()(),i(6796,"tbody")(6797,"tr")(6798,"td")(6799,"strong"),e(6800,"Default Values"),t()(),o(6801,"td")(6802,"td"),t(),i(6803,"tr")(6804,"td")(6805,"code"),e(6806,"--font-family"),t()(),i(6807,"td"),e(6808,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(6809,"td")(6810,"code"),e(6811,"var(--font-family-theme)"),t()()(),i(6812,"tr")(6813,"td")(6814,"code"),e(6815,"--background-color"),t()(),i(6816,"td"),e(6817,"Cor de background"),t(),i(6818,"td")(6819,"code"),e(6820,"var(--color-neutral-light-00)"),t()()(),i(6821,"tr")(6822,"td")(6823,"code"),e(6824,"--color"),t()(),i(6825,"td"),e(6826,"Cor principal da table"),t(),i(6827,"td")(6828,"code"),e(6829,"var(--color-neutral-dark-95)"),t()()(),i(6830,"tr")(6831,"td")(6832,"code"),e(6833,"--background-striped-color"),t()(),i(6834,"td"),e(6835,"Cor do background quando striped"),t(),i(6836,"td")(6837,"code"),e(6838,"var(--color-neutral-light-05)"),t()()(),i(6839,"tr")(6840,"td")(6841,"code"),e(6842,"--color-line"),t()(),i(6843,"td"),e(6844,"Cor das linhas"),t(),i(6845,"td")(6846,"code"),e(6847,"var(--color-neutral-mid-40)"),t()()(),i(6848,"tr")(6849,"td")(6850,"code"),e(6851,"--border-color"),t()(),i(6852,"td"),e(6853,"Cor da borda"),t(),i(6854,"td")(6855,"code"),e(6856,"var(--color-neutral-light-10)"),t()()(),i(6857,"tr")(6858,"td")(6859,"code"),e(6860,"--border-radius"),t()(),i(6861,"td"),e(6862,"Raio da borda"),t(),i(6863,"td")(6864,"code"),e(6865,"var(--border-radius-lg)"),t()()(),i(6866,"tr")(6867,"td")(6868,"code"),e(6869,"--border-width"),t()(),i(6870,"td"),e(6871,"Largura da borda"),t(),i(6872,"td")(6873,"code"),e(6874,"var(--border-width-sm)"),t()()(),i(6875,"tr")(6876,"td")(6877,"code"),e(6878,"--background-color-edited"),t()(),i(6879,"td"),e(6880,"Cor de background da linha editada"),t(),i(6881,"td")(6882,"code"),e(6883,"var(--color-feedback-warning-lightest)"),t()()(),i(6884,"tr")(6885,"td")(6886,"code"),e(6887,"--border-color-edited"),t()(),i(6888,"td"),e(6889,"Cor da borda da linha editada"),t(),i(6890,"td")(6891,"code"),e(6892,"var(--color-feedback-warning-base)"),t()()(),i(6893,"tr")(6894,"td")(6895,"code"),e(6896,"--background-color-included"),t()(),i(6897,"td"),e(6898,"Cor de background da linha inclu\xEDda"),t(),i(6899,"td")(6900,"code"),e(6901,"var(--color-feedback-warning-lightest)"),t()()(),i(6902,"tr")(6903,"td")(6904,"code"),e(6905,"--border-color-included"),t()(),i(6906,"td"),e(6907,"Cor da borda da linha inclu\xEDda"),t(),i(6908,"td")(6909,"code"),e(6910,"var(--color-feedback-warning-base)"),t()()(),i(6911,"tr")(6912,"td")(6913,"code"),e(6914,"--background-color-removed"),t()(),i(6915,"td"),e(6916,"Cor de background da linha removida"),t(),i(6917,"td"),e(6918,"-"),t()(),i(6919,"tr")(6920,"td")(6921,"strong"),e(6922,"Hover"),t()(),o(6923,"td")(6924,"td"),t(),i(6925,"tr")(6926,"td")(6927,"code"),e(6928,"--color-hover"),t()(),i(6929,"td"),e(6930,"Cor principal no estado hover"),t(),i(6931,"td")(6932,"code"),e(6933,"var(--color-action-hover)"),t()()(),i(6934,"tr")(6935,"td")(6936,"code"),e(6937,"--background-color-hover"),t()(),i(6938,"td"),e(6939,"Cor de background no estado hover"),t(),i(6940,"td")(6941,"code"),e(6942,"var(--color-brand-01-lighter)"),t()()(),i(6943,"tr")(6944,"td")(6945,"strong"),e(6946,"Focused"),t()(),o(6947,"td")(6948,"td"),t(),i(6949,"tr")(6950,"td")(6951,"code"),e(6952,"--outline-color-focused"),t()(),i(6953,"td"),e(6954,"Cor do outline do estado de focus"),t(),i(6955,"td")(6956,"code"),e(6957,"var(--color-action-focus)"),t()()(),i(6958,"tr")(6959,"td")(6960,"strong"),e(6961,"Disabled"),t()(),o(6962,"td")(6963,"td"),t(),i(6964,"tr")(6965,"td")(6966,"code"),e(6967,"--color-disabled"),t()(),i(6968,"td"),e(6969,"Cor principal no estado disabled"),t(),i(6970,"td")(6971,"code"),e(6972,"var(--color-neutral-mid-40)"),t()()(),i(6973,"tr")(6974,"td")(6975,"strong"),e(6976,"Headline"),t()(),o(6977,"td")(6978,"td"),t(),i(6979,"tr")(6980,"td")(6981,"code"),e(6982,"--background-color-headline"),t()(),i(6983,"td"),e(6984,"Cor do cabe\xE7alho"),t(),i(6985,"td")(6986,"code"),e(6987,"var(--color-neutral-light-10)"),t()()(),i(6988,"tr")(6989,"td")(6990,"code"),e(6991,"--font-weight-headline"),t()(),i(6992,"td"),e(6993,"Peso da fonte do cabe\xE7alho"),t(),i(6994,"td")(6995,"code"),e(6996,"var(--font-weight-bold)"),t()()(),i(6997,"tr")(6998,"td")(6999,"strong"),e(7e3,"Selected"),t()(),o(7001,"td")(7002,"td"),t(),i(7003,"tr")(7004,"td")(7005,"code"),e(7006,"--background-color-selected"),t()(),i(7007,"td"),e(7008,"Cor de background no estado de selecionado"),t(),i(7009,"td")(7010,"code"),e(7011,"var(--color-brand-01-lightest)"),t()()(),i(7012,"tr")(7013,"td")(7014,"code"),e(7015,"--color-actived"),t()(),i(7016,"td"),e(7017,"Cor do texto no estado de selecionado"),t(),i(7018,"td")(7019,"code"),e(7020,"var(--color-neutral-dark-90)"),t()()(),i(7021,"tr")(7022,"td")(7023,"strong"),e(7024,"Pressed"),t()(),o(7025,"td")(7026,"td"),t(),i(7027,"tr")(7028,"td")(7029,"code"),e(7030,"--background-color-actived"),t()(),i(7031,"td"),e(7032,"Cor de background da a\xE7\xE3o quando pressionada"),t(),i(7033,"td")(7034,"code"),e(7035,"var(--color-brand-01-light)"),t()()(),i(7036,"tr"),o(7037,"td")(7038,"td")(7039,"td"),t(),i(7040,"tr")(7041,"td")(7042,"strong"),e(7043,"Toolbar"),t()(),o(7044,"td")(7045,"td"),t(),i(7046,"tr")(7047,"td")(7048,"code"),e(7049,"--background-color-toolbar"),t()(),i(7050,"td"),e(7051,"Cor de background da toolbar"),t(),i(7052,"td")(7053,"code"),e(7054,"var(--border-color)"),t()()(),i(7055,"tr")(7056,"td")(7057,"code"),e(7058,"--border-color-toolbar"),t()(),i(7059,"td"),e(7060,"Cor da borda da toolbar"),t(),i(7061,"td")(7062,"code"),e(7063,"var(--border-width-sm)"),t()()(),i(7064,"tr"),o(7065,"td")(7066,"td")(7067,"td"),t(),i(7068,"tr")(7069,"td")(7070,"strong"),e(7071,"Toolbar Title"),t()(),o(7072,"td")(7073,"td"),t(),i(7074,"tr")(7075,"td")(7076,"code"),e(7077,"--font-family-toolbar-title"),t()(),i(7078,"td"),e(7079,"Fam\xEDlia tipogr\xE1fica do Titulo da toolbar da Grid"),t(),i(7080,"td")(7081,"code"),e(7082,"var(--font-family)"),t()()(),i(7083,"tr")(7084,"td")(7085,"code"),e(7086,"--font-size-toolbar-title"),t()(),i(7087,"td"),e(7088,"Tamanho da fonte do Titulo da toolbar da Grid"),t(),i(7089,"td")(7090,"code"),e(7091,"var(--font-size-md)"),t()()(),i(7092,"tr")(7093,"td")(7094,"code"),e(7095,"--font-weight-toolbar-title"),t()(),i(7096,"td"),e(7097,"Peso da fonte do Titulo da toolbar da Grid"),t(),i(7098,"td")(7099,"code"),e(7100,"var(--font-weight-bold)"),t()()(),i(7101,"tr")(7102,"td")(7103,"code"),e(7104,"--letter-spacing-toolbar-title"),t()(),i(7105,"td"),e(7106,"Espa\xE7amento entre letras do Titulo da toolbar da Grid"),t(),i(7107,"td"),e(7108,"0.017rem"),t()(),i(7109,"tr"),o(7110,"td")(7111,"td")(7112,"td"),t(),i(7113,"tr")(7114,"td")(7115,"strong"),e(7116,"Empty State - Body"),t()(),o(7117,"td")(7118,"td"),t(),i(7119,"tr")(7120,"td")(7121,"code"),e(7122,"--font-family-empty-state-body-subtitle"),t()(),i(7123,"td"),e(7124,"Fam\xEDlia tipogr\xE1fica do subt\xEDtulo do estado vazio"),t(),i(7125,"td")(7126,"code"),e(7127,"var(--font-family)"),t()()(),i(7128,"tr")(7129,"td")(7130,"code"),e(7131,"--font-size-empty-state-body-subtitle"),t()(),i(7132,"td"),e(7133,"Tamanho da fonte do subt\xEDtulo do estado vazio"),t(),i(7134,"td")(7135,"code"),e(7136,"var(--font-size-md)"),t()()(),i(7137,"tr")(7138,"td")(7139,"code"),e(7140,"--font-weight-empty-state-body-subtitle"),t()(),i(7141,"td"),e(7142,"Peso da fonte do subt\xEDtulo do estado vazio"),t(),i(7143,"td")(7144,"code"),e(7145,"var(--font-weight-bold)"),t()()(),i(7146,"tr")(7147,"td")(7148,"code"),e(7149,"--font-family-empty-state-body-message"),t()(),i(7150,"td"),e(7151,"Fam\xEDlia tipogr\xE1fica da mensagem do estado vazio"),t(),i(7152,"td")(7153,"code"),e(7154,"var(--font-family)"),t()()(),i(7155,"tr")(7156,"td")(7157,"code"),e(7158,"--font-size-empty-state-body-message"),t()(),i(7159,"td"),e(7160,"Tamanho da fonte da mensagem do estado vazio"),t(),i(7161,"td")(7162,"code"),e(7163,"var(--font-size-default)"),t()()(),i(7164,"tr")(7165,"td")(7166,"code"),e(7167,"--font-weight-empty-state-body-message"),t()(),i(7168,"td"),e(7169,"Peso da fonte da mensagem do estado vazio"),t(),i(7170,"td")(7171,"code"),e(7172,"var(--font-weight-normal)"),t()()()()()(),D(7173,10),t(),i(7174,"po-tab",161),D(7175,11),t()()())},dependencies:[z,$,y,te,N],encapsulation:2});let d=l;return d})();var Di=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Ai=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],qt=(()=>{let l=class l{constructor(r){this.el=r}ngAfterViewInit(){this.accordions.forEach(r=>{setTimeout(()=>{r.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(r){setTimeout(()=>{let n=this.tabs.tabs.find(a=>a.elementRef.nativeElement.className===`docs-tab-${r}`);if(n){let a=n.elementRef.nativeElement;a.textContent.trim()!==""||a.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(S=>{let C=S.querySelector(".po-tab-button-label");C&&C?.textContent?.trim().toLowerCase()===r&&S.remove()}),a.remove(),n.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(S=>!S.hide)))}},100)}};l.\u0275fac=function(n){return new(n||l)(R(X))},l.\u0275cmp=b({type:l,selectors:[["api-thf-lookup"]],viewQuery:function(n,a){if(n&1&&(A(N,5),A(z,5)),n&2){let s;q(s=k())&&(a.tabs=s.first),q(s=k())&&(a.accordions=s)}},standalone:!1,ngContentSelectors:Ai,decls:2635,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","Array<ThfLookupColumn>"],[1,"language-html"],[1,"language-typescript"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","ThfLookupFilter"],["href","https://po-ui.io/guides/api"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","'equal'"],["pan","",1,"docs-api-property-type","'include'"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["p-label","Interfaces"],["p-label","ThfLookupColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["p-label","ThfLookupFilterSearchSelect"],["p-label","ThfLookupFilter"],["pan","",1,"docs-api-property-type"],["p-label","ThfLookupFilteredItemsParams"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","number"],["p-label","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","Array<{","field:","string;","dir:","'asc'"],["pan","",1,"docs-api-property-type","'desc';","}>"],["pan","",1,"docs-api-property-type","'extraSmall'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["p-label","ThfLookupKeysLabel"],["p-label","ThfLookupLiterals"],["p-label","ThfLookupResponseApi"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(n,a){n&1&&(Y(Di),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),D(4),t(),i(5,"po-tab",4),D(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfLookupComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`Componente utilizado para abrir um modal de busca com um grid que lista dados de um servi\xE7o.
Neste modal \xE9 poss\xEDvel buscar e selecionar um ou mais registros que ser\xE3o enviados para o campo.
O `),i(19,"code"),e(20,"thf-lookup"),t(),e(21," permite que o usu\xE1rio digite um valor e pressione a tecla TAB para buscar um registro."),t(),i(22,"p"),e(23,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(24,"code"),e(25,"THF-Lookup"),t(),e(26,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(27,"code"),e(28,"import { ThfLookupComponent } from '@totvs/thf-components';"),t()()(),i(29,"div",11)(30,"h4",12),e(31,"Seletor"),t(),i(32,"pre",13),e(33,`<thf-lookup
  t-additional-help="EventEmitter"
  t-additional-help-tooltip="string"
  t-append-in-body="boolean"
  t-auto-focus="boolean"
  t-auto-height="boolean"
  (t-change)="EventEmitter"
  (t-change-model)="EventEmitter"
  t-clean="boolean"
  t-columns="Array<ThfLookupColumn>"
  t-size="string"
  t-custom-items="Array<any>"
  t-disabled="boolean"
  t-error-limit="boolean"
  t-field-error-message="string"
  t-field-format="Array<string> | ((item: any) => string)"
  t-field-label="string"
  t-field-value="string"
  t-filter-params="any"
  t-filter-search-select="Array<ThfLookupFilterSearchSelect>"
  t-filter-service="ThfLookupFilter | string"
  t-grid-properties="ThfLookupGridProperties"
  t-help="string"
  (t-focus)="EventEmitter"
  t-key-last-search="string"
  (t-keydown)="EventEmitter"
  t-keys-label="Array<ThfLookupKeysLabel>"
  t-label="string"
  t-label-text-wrap="boolean"
  t-literals="ThfLookupLiterals"
  t-loading="boolean"
  t-multiple="boolean"
  t-no-autocomplete="boolean"
  (t-error)="EventEmitter"
  t-optional="boolean"
  t-placeholder="string"
  t-helper="PoHelperOptions"
  t-required="boolean"
  t-search-on-enter="'equal' | 'include'"
  (t-selected)="EventEmitter"
  t-show-required="boolean"
  t-modal-size="string" >
</thf-lookup>
`),t()()(),i(34,"po-accordion-item",14)(35,"h4",15),e(36,"Propriedades"),t(),i(37,"table",16)(38,"tr",17)(39,"th",18),e(40,"Nome"),t(),i(41,"th",18),e(42,"Tipo"),t(),i(43,"th",18),e(44,"Padr\xE3o"),t(),i(45,"th",18),e(46,"Descri\xE7\xE3o"),t()(),i(47,"tr",19)(48,"td",20)(49,"div",21)(50,"span",22),e(51,"t-additional-help"),o(52,"br"),t()(),i(53,"div",23),e(54,"Deprecated"),t()(),i(55,"td",24)(56,"code",25),e(57,"EventEmitter"),t()(),i(58,"td",26),e(59,"-"),t(),i(60,"td",27)(61,"em")(62,"strong"),e(63,"(opcional)"),t()(),i(64,"p"),e(65,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(66,"blockquote")(67,"p"),e(68,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade t-helper que oferece mais recursos e flexibilidade."),t()()()(),i(69,"tr",19)(70,"td",20)(71,"div",21)(72,"span",22),e(73,"t-additional-help-tooltip"),o(74,"br"),t()(),i(75,"div",23),e(76,"Deprecated"),t()(),i(77,"td",24)(78,"code",28),e(79,"string"),t()(),i(80,"td",26),e(81,"-"),t(),i(82,"td",27)(83,"em")(84,"strong"),e(85,"(opcional)"),t()(),i(86,"p"),e(87,"Exibe um \xEDcone de ajuda adicional, om o texto desta propriedade sendo passado para o popover do componente "),i(88,"code"),e(89,"po-helper"),t(),e(90,`.
`),i(91,"strong"),e(92,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(93,"blockquote")(94,"p"),e(95,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),i(96,"blockquote")(97,"p"),e(98,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade t-helper que oferece mais recursos e flexibilidade."),t()()()(),i(99,"tr",19)(100,"td",20)(101,"div",21)(102,"span",22),e(103," t-append-in-body"),o(104,"br"),t()()(),i(105,"td",24)(106,"code",29),e(107,"boolean"),t()(),i(108,"td",26)(109,"p")(110,"code"),e(111,"false"),t()()(),i(112,"td",27)(113,"em")(114,"strong"),e(115,"(opcional)"),t()(),i(116,"p"),e(117,"Define que o "),i(118,"code"),e(119,"listbox"),t(),e(120," e/ou popover ("),i(121,"code"),e(122,"t-helper"),t(),e(123," e/ou "),i(124,"code"),e(125,"t-error-limit"),t(),e(126,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(127,"blockquote")(128,"p"),e(129,"Quando utilizado com "),i(130,"code"),e(131,"t-helper"),t(),e(132,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(133,"tr",19)(134,"td",20)(135,"div",21)(136,"span",22),e(137,"t-auto-focus"),o(138,"br"),t()()(),i(139,"td",24)(140,"code",29),e(141,"boolean"),t()(),i(142,"td",26)(143,"p")(144,"code"),e(145,"false"),t()()(),i(146,"td",27)(147,"em")(148,"strong"),e(149,"(opcional)"),t()(),i(150,"p"),e(151,"Aplica foco no elemento ao ser iniciado."),t(),i(152,"blockquote")(153,"p"),e(154,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(155,"tr",19)(156,"td",20)(157,"div",21)(158,"span",22),e(159,"t-auto-height"),o(160,"br"),t()()(),i(161,"td",24)(162,"code",29),e(163,"boolean"),t()(),i(164,"td",26)(165,"p")(166,"code"),e(167,"false"),t()()(),i(168,"td",27)(169,"em")(170,"strong"),e(171,"(opcional)"),t()(),i(172,"p"),e(173,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, com altura m\xEDnima fixa e altura m\xE1xima de acordo
com o n\xFAmero de itens selecionados, mantendo-os sempre vis\xEDveis.`),t()()(),i(174,"tr",19)(175,"td",20)(176,"div",30)(177,"span",31),e(178," (t-change)"),o(179,"br"),t()()(),i(180,"td",24)(181,"code",25),e(182,"EventEmitter"),t()(),i(183,"td",26),e(184,"-"),t(),i(185,"td",27)(186,"em")(187,"strong"),e(188,"(opcional)"),t()(),i(189,"p"),e(190,"Evento disparado quando ocorre mudan\xE7as de valor realizadas pelo usu\xE1rio."),t()()(),i(191,"tr",19)(192,"td",20)(193,"div",30)(194,"span",31),e(195," (t-change-model)"),o(196,"br"),t()()(),i(197,"td",24)(198,"code",25),e(199,"EventEmitter"),t()(),i(200,"td",26),e(201,"-"),t(),i(202,"td",27)(203,"em")(204,"strong"),e(205,"(opcional)"),t()(),i(206,"p"),e(207,"Evento disparado quando ocorre mudan\xE7as de valor no campo realizados pelo usu\xE1rio ou altera\xE7\xF5es de valores de forma din\xE2mica."),t()()(),i(208,"tr",19)(209,"td",20)(210,"div",21)(211,"span",22),e(212,"t-clean"),o(213,"br"),t()()(),i(214,"td",24)(215,"code",29),e(216,"boolean"),t()(),i(217,"td",26)(218,"p")(219,"code"),e(220,"false"),t()()(),i(221,"td",27)(222,"em")(223,"strong"),e(224,"(opcional)"),t()(),i(225,"p"),e(226,"Exibe um \xEDcone que permite limpar o campo. No caso de sele\xE7\xE3o m\xFAltipla, esta op\xE7\xE3o sempre ser\xE1 "),i(227,"code"),e(228,"true"),t(),e(229,"."),t()()(),i(230,"tr",19)(231,"td",20)(232,"div",21)(233,"span",22),e(234,"t-columns"),o(235,"br"),t()()(),i(236,"td",24)(237,"code",32),e(238,"Array<ThfLookupColumn>"),t()(),i(239,"td",26),e(240,"-"),t(),i(241,"td",27)(242,"em")(243,"strong"),e(244,"(opcional)"),t()(),i(245,"p"),e(246,"Permite definir e configurar as colunas do grid dentro do modal de busca avan\xE7ada por meio da interface "),i(247,"strong"),e(248,"ThfLookupColumn"),t(),e(249,"."),t(),i(250,"pre")(251,"code",33),e(252,`// Exemplo de uso:
<thf-lookup
 ...
 [t-columns]="columns"
></thf-lookup>`),t()(),i(253,"pre")(254,"code",34),e(255,`columns: Array<ThfLookupColumn> = [
 { property: 'id', label: 'C\xF3digo' },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(256,"tr",19)(257,"td",20)(258,"div",21)(259,"span",22),e(260," t-size"),o(261,"br"),t()()(),i(262,"td",24)(263,"code",28),e(264,"string"),t()(),i(265,"td",26)(266,"p")(267,"code"),e(268,"medium"),t()()(),i(269,"td",27)(270,"em")(271,"strong"),e(272,"(opcional)"),t()(),i(273,"p"),e(274,"Define o tamanho do componente:"),t(),i(275,"ul")(276,"li")(277,"code"),e(278,"small"),t(),e(279,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(280,"li")(281,"code"),e(282,"medium"),t(),e(283,": altura do input como 44px."),t()(),i(284,"blockquote")(285,"p"),e(286,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(287,"code"),e(288,"medium"),t(),e(289,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(290,"a",35),e(291,"po-theme"),t(),e(292,"."),t()()()(),i(293,"tr",19)(294,"td",20)(295,"div",21)(296,"span",22),e(297,"t-custom-items"),o(298,"br"),t()()(),i(299,"td",24)(300,"code",36),e(301,"Array<any>"),t()(),i(302,"td",26)(303,"p")(304,"code"),e(305,"[]"),t()()(),i(306,"td",27)(307,"em")(308,"strong"),e(309,"(opcional)"),t()(),i(310,"p"),e(311,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t()()(),i(312,"tr",19)(313,"td",20)(314,"div",21)(315,"span",22),e(316,"t-disabled"),o(317,"br"),t()()(),i(318,"td",24)(319,"code",29),e(320,"boolean"),t()(),i(321,"td",26)(322,"p")(323,"code"),e(324,"false"),t()()(),i(325,"td",27)(326,"em")(327,"strong"),e(328,"(opcional)"),t()(),i(329,"p"),e(330,"Desabilita o campo."),t()()(),i(331,"tr",19)(332,"td",20)(333,"div",21)(334,"span",22),e(335,"t-error-limit"),o(336,"br"),t()()(),i(337,"td",24)(338,"code",29),e(339,"boolean"),t()(),i(340,"td",26)(341,"p")(342,"code"),e(343,"false"),t()()(),i(344,"td",27)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),i(348,"p"),e(349,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(350,"blockquote")(351,"p"),e(352,"Caso essa propriedade seja definida como "),i(353,"code"),e(354,"true"),t(),e(355,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(356,"tr",19)(357,"td",20)(358,"div",21)(359,"span",22),e(360,"t-field-error-message"),o(361,"br"),t()()(),i(362,"td",24)(363,"code",28),e(364,"string"),t()(),i(365,"td",26),e(366,"-"),t(),i(367,"td",27)(368,"em")(369,"strong"),e(370,"(opcional)"),t()(),i(371,"p"),e(372,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(373,"blockquote")(374,"p"),e(375,"Necess\xE1rio que a propriedade "),i(376,"code"),e(377,"t-required"),t(),e(378," esteja habilitada."),t()()()(),i(379,"tr",19)(380,"td",20)(381,"div",21)(382,"span",22),e(383," t-field-format"),o(384,"br"),t()()(),i(385,"td",24)(386,"code",37),e(387,"Array<string> "),t(),i(388,"code",38),e(389," ((item: any) => string)"),t()(),i(390,"td",26),e(391,"-"),t(),i(392,"td",27)(393,"em")(394,"strong"),e(395,"(opcional)"),t()(),i(396,"p"),e(397,"Formato de exibi\xE7\xE3o do campo."),t(),i(398,"p"),e(399,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(400,"em"),e(401,"string"),t(),e(402," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(403,"pre")(404,"code",34),e(405,"fieldFormat(obj) {\n  return `${obj.id} (${obj.name})`;\n}"),t()(),i(406,"pre")(407,"code",33),e(408,`<thf-lookup
  ...
  [t-field-format]="fieldFormat"
  ...
></thf-lookup>
<!-- Apresenta\xE7\xE3o no campo: 123 (Goku)  -->`),t()(),i(409,"p"),e(410,`Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado `),i(411,"code"),e(412,"-"),t(),e(413,` como separador.
Por exemplo:`),t(),i(414,"pre")(415,"code",33),e(416,`<thf-lookup
  ...
  [t-field-format]="['id','nickname']"
  ...
></thf-lookup>
<!-- Apresenta\xE7\xE3o no campo: 123 - Goku  -->`),t()(),i(417,"blockquote")(418,"p"),e(419,"Esta propriedade sobrep\xF5e a "),i(420,"code"),e(421,"t-keys-label"),t(),e(422," como formata\xE7\xE3o do campo."),t()()()(),i(423,"tr",19)(424,"td",20)(425,"div",21)(426,"span",22),e(427,"t-field-label"),o(428,"br"),t()()(),i(429,"td",24)(430,"code",28),e(431,"string"),t()(),i(432,"td",26),e(433,"-"),t(),i(434,"td",27)(435,"p"),e(436,`Define a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e do filtro selecionado dentro do modal de busca avan\xE7ada.
Propriedade obrigat\xF3ria.`),t()()(),i(437,"tr",19)(438,"td",20)(439,"div",21)(440,"span",22),e(441,"t-field-value"),o(442,"br"),t()()(),i(443,"td",24)(444,"code",28),e(445,"string"),t()(),i(446,"td",26),e(447,"-"),t(),i(448,"td",27)(449,"p"),e(450,"Define a coluna que ser\xE1 utilizada como valor do campo. Propriedade obrigat\xF3ria."),t(),i(451,"blockquote")(452,"p"),e(453,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(454,"tr",19)(455,"td",20)(456,"div",21)(457,"span",22),e(458,"t-filter-params"),o(459,"br"),t()()(),i(460,"td",24)(461,"code",39),e(462,"any"),t()(),i(463,"td",26),e(464,"-"),t(),i(465,"td",27)(466,"em")(467,"strong"),e(468,"(opcional)"),t()(),i(469,"p"),e(470,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou ao servi\xE7o que implementa a interface "),i(471,"strong"),e(472,"ThfLookupFilter"),t(),e(473,"."),t()()(),i(474,"tr",19)(475,"td",20)(476,"div",21)(477,"span",22),e(478,"t-filter-search-select"),o(479,"br"),t()()(),i(480,"td",24)(481,"code",40),e(482,"Array<ThfLookupFilterSearchSelect>"),t()(),i(483,"td",26),e(484,"-"),t(),i(485,"td",27)(486,"em")(487,"strong"),e(488,"(opcional)"),t()(),i(489,"p"),e(490,`Permite definir quais colunas ser\xE3o op\xE7\xF5es de filtro dentro do modal de busca avan\xE7ada. Deve implementar a interface
`),i(491,"strong"),e(492,"ThfLookupFilterSearchSelect"),t(),e(493,"."),t(),i(494,"pre")(495,"code",33),e(496,`// Exemplo de uso:
<thf-lookup
 ...
 [t-filter-search-select]="filterSelect"
></thf-lookup>`),t()(),i(497,"pre")(498,"code",34),e(499,`filterSelect: Array<ThfLookupFilterSearchSelect> = [
 { label: 'Nome', value: 'name' },
 { label: 'Nickname', value: 'nickname' },
 { label: 'Email', value: 'email' }
];`),t()()()(),i(500,"tr",19)(501,"td",20)(502,"div",21)(503,"span",22),e(504,"t-filter-service"),o(505,"br"),t()()(),i(506,"td",24)(507,"code",41),e(508,"ThfLookupFilter "),t(),i(509,"code",28),e(510," string"),t()(),i(511,"td",26),e(512,"-"),t(),i(513,"td",27)(514,"p"),e(515,`Respons\xE1vel por buscar os dados exibidos no grid dentro do modal de busca avan\xE7ada. Aceita um servi\xE7o que implementa a interface
`),i(516,"strong"),e(517,"ThfLookupFilter"),t(),e(518," ou uma URL."),t(),i(519,"p"),e(520,`Quando uma URL \xE9 definida:
Se houver filtro, \xE9 adicionado o par\xE2metro `),i(521,"code"),e(522,"filter"),t(),e(523," com o valor da busca:"),t(),i(524,"pre")(525,"code"),e(526,"url + ?page=1&pageSize=20&filter=Peter"),t()(),i(527,"p"),e(528,"Se houver ordena\xE7\xE3o, \xE9 adicionado o par\xE2metro "),i(529,"code"),e(530,"order"),t(),e(531,` com o valor da coluna.
Exemplo de busca com ordena\xE7\xE3o decrescente:`),t(),i(532,"pre")(533,"code"),e(534,"url + ?page=1&pageSize=20&filter=Peter&order=-name"),t()(),i(535,"p"),e(536,"Exemplo de busca com ordena\xE7\xE3o crescente:"),t(),i(537,"pre")(538,"code"),e(539,"url + ?page=1&pageSize=20&filter=Peter&order=name"),t()(),i(540,"p"),e(541,"Se definido "),i(542,"strong"),e(543,"t-filter-params"),t(),e(544,`, seu valor tamb\xE9m ser\xE1 concatenado.
Exemplo com `),i(545,"code"),e(546,"{ age: 23 }"),t(),e(547,":"),t(),i(548,"pre")(549,"code"),e(550,"url + ?page=1&pageSize=20&age=23&filter=Peter"),t()(),i(551,"p"),e(552,`Se o campo precisar iniciar com valores, os registros s\xE3o buscados das seguintes formas:
Exemplo com a sele\xE7\xE3o \xFAnica:`),t(),i(553,"pre")(554,"code"),e(555,`model = 1234;

GET url/1234`),t()(),i(556,"p"),e(557,"Exemplo com a sele\xE7\xE3o m\xFAltipla:"),t(),i(558,"pre")(559,"code"),e(560,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678`),t()(),i(561,"blockquote")(562,"p"),e(563,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(564,"a",42),e(565,"API do PO UI"),t(),e(566,` e utilizar
os valores definidos nas propriedades `),i(567,"strong"),e(568,"t-field-label"),t(),e(569," e "),i(570,"strong"),e(571,"t-field-value"),t(),e(572," para a constru\xE7\xE3o do "),i(573,"strong"),e(574,"thf-lookup"),t(),e(575,"."),t()(),i(576,"p"),e(577,"Caso a busca tenha ocorrido pressionando a tecla "),i(578,"em"),e(579,"TAB"),t(),e(580,`, o filtro ser\xE1 codificado atrav\xE9s da fun\xE7\xE3o
`),i(581,"a",43),e(582,"encodeURIComponent"),t(),e(583,`, e portanto concatenado
na URL da seguinte forma:`),t(),i(584,"pre")(585,"code"),e(586,"url/valor%20que%20se%20deseja%20filtrar"),t()(),i(587,"blockquote")(588,"p"),e(589,"Caso utilize um servi\xE7o "),i(590,"strong"),e(591,"ThfLookupFilter"),t(),e(592,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(593,"tr",19)(594,"td",20)(595,"div",21)(596,"span",22),e(597,"t-grid-properties"),o(598,"br"),t()()(),i(599,"td",24)(600,"code",44),e(601,"ThfLookupGridProperties"),t()(),i(602,"td",26),e(603,"-"),t(),i(604,"td",27)(605,"em")(606,"strong"),e(607,"(opcional)"),t()(),i(608,"p"),e(609,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t(),i(610,"p"),e(611,"// Exemplo de uso:"),t(),i(612,"pre")(613,"code",33),e(614,`<thf-lookup
...
[t-grid-properties]="gridProperties"
></thf-lookup>`),t()(),i(615,"pre")(616,"code",34),e(617,`gridProperties: ThfLookupGridProperties = {
resizable: true,
autoSize: true,
autoSizeOnScroll: true,
virtualScroll: true,
}`),t()()()(),i(618,"tr",19)(619,"td",20)(620,"div",21)(621,"span",22),e(622,"t-help"),o(623,"br"),t()()(),i(624,"td",24)(625,"code",28),e(626,"string"),t()(),i(627,"td",26),e(628,"-"),t(),i(629,"td",27)(630,"em")(631,"strong"),e(632,"(opcional)"),t()(),i(633,"p"),e(634,"Texto de apoio do campo."),t()()(),i(635,"tr",19)(636,"td",20)(637,"div",30)(638,"span",31),e(639," (t-focus)"),o(640,"br"),t()()(),i(641,"td",24)(642,"code",25),e(643,"EventEmitter"),t()(),i(644,"td",26),e(645,"-"),t(),i(646,"td",27)(647,"em")(648,"strong"),e(649,"(opcional)"),t()(),i(650,"p"),e(651,"Evento emitido quando o campo de entrada (input) recebe foco."),t(),i(652,"p"),e(653,"Esse evento pode ser utilizado para realizar a\xE7\xF5es espec\xEDficas no momento em que o foco \xE9 aplicado ao input."),t()()(),i(654,"tr",19)(655,"td",20)(656,"div",21)(657,"span",22),e(658,"t-key-last-search"),o(659,"br"),t()()(),i(660,"td",24)(661,"code",28),e(662,"string"),t()(),i(663,"td",26),e(664,"-"),t(),i(665,"td",27)(666,"em")(667,"strong"),e(668,"(opcional)"),t()(),i(669,"p"),e(670,"Define um identificador \xFAnico para o campo. Marca\xE7\xE3o necess\xE1ria quando h\xE1 hist\xF3rico de \xFAltimas pesquisas."),t()()(),i(671,"tr",19)(672,"td",20)(673,"div",30)(674,"span",31),e(675," (t-keydown)"),o(676,"br"),t()()(),i(677,"td",24)(678,"code",25),e(679,"EventEmitter"),t()(),i(680,"td",26),e(681,"-"),t(),i(682,"td",27)(683,"em")(684,"strong"),e(685,"(opcional)"),t()(),i(686,"p"),e(687,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no campo.
Retorna um objeto `),i(688,"code"),e(689,"KeyboardEvent"),t(),e(690," com informa\xE7\xF5es sobre a tecla."),t()()(),i(691,"tr",19)(692,"td",20)(693,"div",21)(694,"span",22),e(695,"t-keys-label"),o(696,"br"),t()()(),i(697,"td",24)(698,"code",45),e(699,"Array<ThfLookupKeysLabel>"),t()(),i(700,"td",26),e(701,"-"),t(),i(702,"td",27)(703,"em")(704,"strong"),e(705,"(opcional)"),t()(),i(706,"p"),e(707,"Permite definir at\xE9 3 propriedades do item selecionado que ficar\xE3o vis\xEDveis no campo."),t(),i(708,"pre")(709,"code",33),e(710,`<thf-lookup
 ...
 [t-keys-label]="keysLabel"
></thf-lookup>`),t()(),i(711,"pre")(712,"code",34),e(713,`keysLabel: Array<ThfLookupKeysLabel> = [
 { label: 'Nome', value: 'name' },
 { label: 'Email', value: 'email' }
];`),t()(),i(714,"pre")(715,"code"),e(716,`// sa\xEDda no campo:
Robert Bruce Banner-hulksmash@marvel.com`),t()()()(),i(717,"tr",19)(718,"td",20)(719,"div",21)(720,"span",22),e(721,"t-label"),o(722,"br"),t()()(),i(723,"td",24)(724,"code",28),e(725,"string"),t()(),i(726,"td",26),e(727,"-"),t(),i(728,"td",27)(729,"em")(730,"strong"),e(731,"(opcional)"),t()(),i(732,"p"),e(733,"Label do campo. Tamb\xE9m usado como t\xEDtulo do modal de busca avan\xE7ada, se "),i(734,"code"),e(735,"modalTitle"),t(),e(736," n\xE3o estiver definido em "),i(737,"strong"),e(738,"t-literals"),t(),e(739,"."),t()()(),i(740,"tr",19)(741,"td",20)(742,"div",21)(743,"span",22),e(744," t-label-text-wrap"),o(745,"br"),t()()(),i(746,"td",24)(747,"code",29),e(748,"boolean"),t()(),i(749,"td",26)(750,"p")(751,"code"),e(752,"false"),t()()(),i(753,"td",27)(754,"em")(755,"strong"),e(756,"(opcional)"),t()(),i(757,"p"),e(758,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(759,"code"),e(760,"t-label"),t(),e(761,". Quando "),i(762,"code"),e(763,"t-label-text-wrap"),t(),e(764,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(765,"tr",19)(766,"td",20)(767,"div",21)(768,"span",22),e(769,"t-literals"),o(770,"br"),t()()(),i(771,"td",24)(772,"code",46),e(773,"ThfLookupLiterals"),t()(),i(774,"td",26),e(775,"-"),t(),i(776,"td",27)(777,"em")(778,"strong"),e(779,"(opcional)"),t()(),i(780,"p"),e(781,"Permite definir literais personalizados para o componente, conforme a interface "),i(782,"strong"),e(783,"ThfLookupLiterals"),t(),e(784,"."),t(),i(785,"pre")(786,"code",33),e(787,`// Exemplo de uso:
<thf-lookup
 ...
 [t-literals]="customLiterals"
></thf-lookup>`),t()(),i(788,"pre")(789,"code",34),e(790,"customLiterals: ThfLookupLiterals = { modalTitle: 'Busca avan\xE7ada' };"),t()()()(),i(791,"tr",19)(792,"td",20)(793,"div",21)(794,"span",22),e(795,"t-loading"),o(796,"br"),t()()(),i(797,"td",24)(798,"code",29),e(799,"boolean"),t()(),i(800,"td",26)(801,"p")(802,"code"),e(803,"false"),t()()(),i(804,"td",27)(805,"em")(806,"strong"),e(807,"(opcional)"),t()(),i(808,"p"),e(809,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),i(810,"tr",19)(811,"td",20)(812,"div",21)(813,"span",22),e(814,"t-multiple"),o(815,"br"),t()()(),i(816,"td",24)(817,"code",29),e(818,"boolean"),t()(),i(819,"td",26)(820,"p")(821,"code"),e(822,"false"),t()()(),i(823,"td",27)(824,"em")(825,"strong"),e(826,"(opcional)"),t()(),i(827,"p"),e(828,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(829,"blockquote")(830,"p"),e(831,"Quando habilitado, o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(832,"code"),e(833,"[ 12345, 67890 ]"),t()()()()(),i(834,"tr",19)(835,"td",20)(836,"div",21)(837,"span",22),e(838,"t-no-autocomplete"),o(839,"br"),t()()(),i(840,"td",24)(841,"code",29),e(842,"boolean"),t()(),i(843,"td",26)(844,"p")(845,"code"),e(846,"false"),t()()(),i(847,"td",27)(848,"em")(849,"strong"),e(850,"(opcional)"),t()(),i(851,"p"),e(852,"Desabilita o "),i(853,"code"),e(854,"autocomplete"),t(),e(855," (propriedade nativa) do campo."),t()()(),i(856,"tr",19)(857,"td",20)(858,"div",30)(859,"span",31),e(860," (t-error)"),o(861,"br"),t()()(),i(862,"td",24)(863,"code",25),e(864,"EventEmitter"),t()(),i(865,"td",26),e(866,"-"),t(),i(867,"td",27)(868,"em")(869,"strong"),e(870,"(opcional)"),t()(),i(871,"p"),e(872,`Evento disparado quando ocorre algum erro na requisi\xE7\xE3o de busca.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(873,"tr",19)(874,"td",20)(875,"div",21)(876,"span",22),e(877,"t-optional"),o(878,"br"),t()()(),i(879,"td",24)(880,"code",29),e(881,"boolean"),t()(),i(882,"td",26)(883,"p")(884,"code"),e(885,"false"),t()()(),i(886,"td",27)(887,"em")(888,"strong"),e(889,"(opcional)"),t()(),i(890,"p"),e(891,"Exibe um indicador opcional no campo. Requer que "),i(892,"strong"),e(893,"t-label"),t(),e(894," esteja definido e "),i(895,"strong"),e(896,"t-required"),t(),e(897," desabilitado."),t()()(),i(898,"tr",19)(899,"td",20)(900,"div",21)(901,"span",22),e(902,"t-placeholder"),o(903,"br"),t()()(),i(904,"td",24)(905,"code",28),e(906,"string"),t()(),i(907,"td",26),e(908,"-"),t(),i(909,"td",27)(910,"em")(911,"strong"),e(912,"(opcional)"),t()(),i(913,"p"),e(914,"Texto exibido enquanto o campo estiver vazio."),t()()(),i(915,"tr",19)(916,"td",20)(917,"div",21)(918,"span",22),e(919," t-helper"),o(920,"br"),t()()(),i(921,"td",24)(922,"code",47),e(923,"PoHelperOptions"),t()(),i(924,"td",26),e(925,"-"),t(),i(926,"td",27)(927,"em")(928,"strong"),e(929,"(opcional)"),t()(),i(930,"p"),e(931,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),i(932,"p"),e(933,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),i(934,"code"),e(935,"t-additional-help-tooltip"),t(),e(936," e "),i(937,"code"),e(938,"t-additional-help"),t(),e(939,") ser\xE1 ignorado."),t()()(),i(940,"tr",19)(941,"td",20)(942,"div",21)(943,"span",22),e(944,"t-required"),o(945,"br"),t()()(),i(946,"td",24)(947,"code",29),e(948,"boolean"),t()(),i(949,"td",26)(950,"p")(951,"code"),e(952,"false"),t()()(),i(953,"td",27)(954,"em")(955,"strong"),e(956,"(opcional)"),t()(),i(957,"p"),e(958,"Define o campo como obrigat\xF3rio. Caso "),i(959,"strong"),e(960,"t-disabled"),t(),e(961," esteja habilitado, a obrigatoriedade ser\xE1 ignorada."),t()()(),i(962,"tr",19)(963,"td",20)(964,"div",21)(965,"span",22),e(966,"t-search-on-enter"),o(967,"br"),t()()(),i(968,"td",24)(969,"code",48),e(970,"'equal' "),t(),i(971,"code",49),e(972," 'include'"),t()(),i(973,"td",26)(974,"p")(975,"code"),e(976,"equal"),t()()(),i(977,"td",27)(978,"em")(979,"strong"),e(980,"(opcional)"),t()(),i(981,"p"),e(982,"Realiza busca do item ao pressionar a tecla Enter."),t(),i(983,"blockquote")(984,"p"),e(985,"Caso essa propriedade seja definida como "),i(986,"code"),e(987,"equal"),t(),e(988,`, a busca ser\xE1 realizada quando o valor do campo for exatamente igual ao valor do item.
Caso seja definida como `),i(989,"code"),e(990,"include"),t(),e(991,", a busca retornar\xE1 o primeiro item que contenha o valor do campo."),t()()()(),i(992,"tr",19)(993,"td",20)(994,"div",30)(995,"span",31),e(996," (t-selected)"),o(997,"br"),t()()(),i(998,"td",24)(999,"code",25),e(1e3,"EventEmitter"),t()(),i(1001,"td",26),e(1002,"-"),t(),i(1003,"td",27)(1004,"em")(1005,"strong"),e(1006,"(opcional)"),t()(),i(1007,"p"),e(1008,`Evento disparado ao selecionar um item.
Para sele\xE7\xE3o m\xFAltipla, retorna a lista de itens selecionados contendo os valores da coluna definida em `),i(1009,"strong"),e(1010,"t-field-value"),t(),e(1011,`.
Para sele\xE7\xE3o \xFAnica retorna o objeto do item.`),t()()(),i(1012,"tr",19)(1013,"td",20)(1014,"div",21)(1015,"span",22),e(1016,"t-show-required"),o(1017,"br"),t()()(),i(1018,"td",24)(1019,"code",29),e(1020,"boolean"),t()(),i(1021,"td",26)(1022,"p")(1023,"code"),e(1024,"false"),t()()(),i(1025,"td",27)(1026,"em")(1027,"strong"),e(1028,"(opcional)"),t()(),i(1029,"p"),e(1030,"Exibe um indicador de obrigatoriedade no campo. Requer que "),i(1031,"strong"),e(1032,"t-required"),t(),e(1033," esteja habilitado e "),i(1034,"strong"),e(1035,"t-label"),t(),e(1036," definido."),t()()(),i(1037,"tr",19)(1038,"td",20)(1039,"div",21)(1040,"span",22),e(1041," t-modal-size"),o(1042,"br"),t()()(),i(1043,"td",24)(1044,"code",28),e(1045,"string"),t()(),i(1046,"td",26)(1047,"p")(1048,"code"),e(1049,"lg"),t()()(),i(1050,"td",27)(1051,"em")(1052,"strong"),e(1053,"(opcional)"),t()(),i(1054,"p"),e(1055,"Define o tamanho do modal."),t(),i(1056,"p"),e(1057,"Valores v\xE1lidos:"),t(),i(1058,"ul")(1059,"li")(1060,"code"),e(1061,"sm"),t(),e(1062," (pequeno)"),t(),i(1063,"li")(1064,"code"),e(1065,"md"),t(),e(1066," (m\xE9dio)"),t(),i(1067,"li")(1068,"code"),e(1069,"lg"),t(),e(1070," (grande)"),t(),i(1071,"li")(1072,"code"),e(1073,"xl"),t(),e(1074," (extra grande)"),t(),i(1075,"li")(1076,"code"),e(1077,"auto"),t(),e(1078," (autom\xE1tico)"),t()(),i(1079,"blockquote")(1080,"p"),e(1081,"Quando informado "),i(1082,"code"),e(1083,"auto"),t(),e(1084,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),i(1085,"code"),e(1086,"lg"),t(),e(1087,"."),t()()()()()(),i(1088,"po-accordion-item",50)(1089,"table",51)(1090,"tr",19)(1091,"th",52)(1092,"div",21)(1093,"h4")(1094,"span",22),e(1095," showAdditionalHelp "),t()()()()(),i(1096,"tr",27)(1097,"td",27)(1098,"p"),e(1099,"M\xE9todo que exibe "),i(1100,"code"),e(1101,"t-helper"),t(),e(1102," ou executa a a\xE7\xE3o definida em "),i(1103,"code"),e(1104,"t-helper{eventOnClick}"),t(),e(1105," ou em "),i(1106,"code"),e(1107,"t-additionalHelp"),t(),e(1108,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(1109,"code"),e(1110,"t-keydown"),t(),e(1111,"."),t(),i(1112,"pre")(1113,"code"),e(1114,`<thf-lookup
 #lookup
 ...
 t-helper="Mensagem de ajuda complementar"
 (t-keydown)="onKeyDown($event, lookup)"
></thf-lookup>`),t()(),i(1115,"pre")(1116,"code"),e(1117,`...
onKeyDown(event: KeyboardEvent, inp: ThfLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}`),t()()()()(),o(1118,"br"),t()()(),D(1119,2),t(),i(1120,"po-tab",53),D(1121,3),i(1122,"po-container",5)(1123,"po-accordion",6)(1124,"po-accordion-item",54)(1125,"h4",9)(1126,"code"),e(1127,"ThfLookupColumn"),t()(),i(1128,"div",10)(1129,"p"),e(1130,"Interface para configura\xE7\xE3o das colunas ("),i(1131,"strong"),e(1132,"t-columns"),t(),e(1133,")."),t()(),i(1134,"h4",15),e(1135,"Propriedades"),t(),i(1136,"table",16)(1137,"tr",17)(1138,"th",18),e(1139,"Nome"),t(),i(1140,"th",18),e(1141,"Tipo"),t(),i(1142,"th",18),e(1143,"Descri\xE7\xE3o"),t()(),i(1144,"tr",19)(1145,"td",20)(1146,"div",21)(1147,"span",22),e(1148," boolean"),o(1149,"br"),t()()(),i(1150,"td",24)(1151,"code",55),e(1152,"PoTableBoolean"),t()(),i(1153,"td",27)(1154,"em")(1155,"strong"),e(1156,"(opcional)"),t()(),i(1157,"p"),e(1158,"Define um objeto do tipo "),i(1159,"code"),e(1160,"PoTableBoolean"),t(),e(1161," para as colunas do tipo "),i(1162,"em"),e(1163,"boolean"),t(),e(1164,". Por exemplo:"),t(),i(1165,"pre")(1166,"code"),e(1167,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(1168,"blockquote")(1169,"p"),e(1170,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(1171,"em"),e(1172,"boolean"),t(),e(1173,`,
esta exibir\xE1 por padr\xE3o `),i(1174,"code"),e(1175,"Sim"),t(),e(1176," e "),i(1177,"code"),e(1178,"N\xE3o"),t(),e(1179," de acordo com os valores "),i(1180,"em"),e(1181,"booleanos"),t(),e(1182,"."),t()()()(),i(1183,"tr",19)(1184,"td",20)(1185,"div",21)(1186,"span",22),e(1187," booleanFalse"),o(1188,"br"),t()()(),i(1189,"td",24)(1190,"code",28),e(1191,"string"),t()(),i(1192,"td",27)(1193,"em")(1194,"strong"),e(1195,"(opcional)"),t()(),i(1196,"p"),e(1197,"Texto exibido quando o valor da coluna for "),i(1198,"em"),e(1199,"false"),t(),e(1200,"."),t()()(),i(1201,"tr",19)(1202,"td",20)(1203,"div",21)(1204,"span",22),e(1205," booleanTrue"),o(1206,"br"),t()()(),i(1207,"td",24)(1208,"code",28),e(1209,"string"),t()(),i(1210,"td",27)(1211,"em")(1212,"strong"),e(1213,"(opcional)"),t()(),i(1214,"p"),e(1215,"Texto exibido quando o valor da coluna for "),i(1216,"em"),e(1217,"true"),t(),e(1218,"."),t()()(),i(1219,"tr",19)(1220,"td",20)(1221,"div",21)(1222,"span",22),e(1223," disabled"),o(1224,"br"),t()()(),i(1225,"td",24)(1226,"code",56),e(1227,"Function"),t()(),i(1228,"td",27)(1229,"em")(1230,"strong"),e(1231,"(opcional)"),t()(),i(1232,"p"),e(1233,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(1234,"em"),e(1235,"link"),t(),e(1236," e sua a\xE7\xE3o."),t(),i(1237,"blockquote")(1238,"p"),e(1239,"Propriedade dispon\xEDvel nas colunas do tipo "),i(1240,"code"),e(1241,"link"),t(),e(1242,"."),t()()()(),i(1243,"tr",19)(1244,"td",20)(1245,"div",21)(1246,"span",22),e(1247," format"),o(1248,"br"),t()()(),i(1249,"td",24)(1250,"code",28),e(1251,"string"),t()(),i(1252,"td",27)(1253,"em")(1254,"strong"),e(1255,"(opcional)"),t()(),i(1256,"p"),e(1257,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(1258,"ul")(1259,"li"),e(1260,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(1261,"li"),e(1262,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(1263,"tr",19)(1264,"td",20)(1265,"div",21)(1266,"span",22),e(1267," label"),o(1268,"br"),t()()(),i(1269,"td",24)(1270,"code",28),e(1271,"string"),t()(),i(1272,"td",27)(1273,"em")(1274,"strong"),e(1275,"(opcional)"),t()(),i(1276,"p"),e(1277,"Texto para t\xEDtulo da coluna."),t(),i(1278,"p"),e(1279,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(1280,"em"),e(1281,"label"),t(),e(1282," o valor da propriedade "),i(1283,"em"),e(1284,"property"),t(),e(1285," com a primeira letra em mai\xFAsculo."),t()()(),i(1286,"tr",19)(1287,"td",20)(1288,"div",21)(1289,"span",22),e(1290," labels"),o(1291,"br"),t()()(),i(1292,"td",24)(1293,"code",57),e(1294,"Array<PoTableColumnLabel>"),t()(),i(1295,"td",27)(1296,"em")(1297,"strong"),e(1298,"(opcional)"),t()(),i(1299,"p"),e(1300,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(1301,"code"),e(1302,"PoTableColumnLabel"),t(),e(1303," na qual devem ser definidas os labels. Por exemplo:"),t(),i(1304,"pre")(1305,"code"),e(1306,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(1307,"tr",19)(1308,"td",20)(1309,"div",21)(1310,"span",22),e(1311," locale"),o(1312,"br"),t()()(),i(1313,"td",24)(1314,"code",28),e(1315,"string"),t()(),i(1316,"td",27)(1317,"em")(1318,"strong"),e(1319,"(opcional)"),t()(),i(1320,"p"),e(1321,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(1322,"a",58)(1323,"code"),e(1324,"I18n"),t()()(),i(1325,"p"),e(1326,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(1327,"pre")(1328,"code"),e(1329,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},`),t()(),i(1330,"blockquote")(1331,"p"),e(1332,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(1333,"p"),e(1334,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(1335,"p"),e(1336,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(1337,"a",58)(1338,"code"),e(1339,"I18n"),t()()()(),i(1340,"p"),e(1341,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(1342,"pre")(1343,"code"),e(1344,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}`),t()(),i(1345,"blockquote")(1346,"p"),e(1347,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(1348,"code"),e(1349,"number"),t(),e(1350," e "),i(1351,"code"),e(1352,"currency"),t(),e(1353,"."),t()()()(),i(1354,"tr",19)(1355,"td",20)(1356,"div",21)(1357,"span",22),e(1358," property"),o(1359,"br"),t()()(),i(1360,"td",24)(1361,"code",28),e(1362,"string"),t()(),i(1363,"td",27)(1364,"em")(1365,"strong"),e(1366,"(opcional)"),t()(),i(1367,"p"),e(1368,"Nome identificador da coluna."),t()()(),i(1369,"tr",19)(1370,"td",20)(1371,"div",21)(1372,"span",22),e(1373," type"),o(1374,"br"),t()()(),i(1375,"td",24)(1376,"code",28),e(1377,"string"),t()(),i(1378,"td",27)(1379,"em")(1380,"strong"),e(1381,"(opcional)"),t()(),i(1382,"p"),e(1383,"Tipo da coluna:"),t(),i(1384,"ul")(1385,"li"),e(1386,"string (padr\xE3o): textos"),t(),i(1387,"li"),e(1388,"number: valores num\xE9ricos"),t(),i(1389,"li"),e(1390,"date: data"),t(),i(1391,"li"),e(1392,"currency: valores monet\xE1rios"),t(),i(1393,"li"),e(1394,"dateTime: data e hora"),t()()()(),i(1395,"tr",19)(1396,"td",20)(1397,"div",21)(1398,"span",22),e(1399," visible"),o(1400,"br"),t()()(),i(1401,"td",24)(1402,"code",29),e(1403,"boolean"),t()(),i(1404,"td",27)(1405,"em")(1406,"strong"),e(1407,"(opcional)"),t()(),i(1408,"p"),e(1409,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(1410,"strong"),e(1411,"gerenciador de colunas"),t(),e(1412,"."),t(),i(1413,"blockquote")(1414,"p"),e(1415,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(1416,"code"),e(1417,"p-max-columns"),t(),e(1418,"."),t()()()(),i(1419,"tr",19)(1420,"td",20)(1421,"div",21)(1422,"span",22),e(1423," width"),o(1424,"br"),t()()(),i(1425,"td",24)(1426,"code",28),e(1427,"string"),t()(),i(1428,"td",27)(1429,"em")(1430,"strong"),e(1431,"(opcional)"),t()(),i(1432,"p"),e(1433,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()()(),i(1434,"po-accordion-item",59)(1435,"h4",9)(1436,"code"),e(1437,"ThfLookupFilterSearchSelect"),t()(),i(1438,"div",10)(1439,"p"),e(1440,"Interface que define as colunas para busca ("),i(1441,"strong"),e(1442,"t-filter-search-select"),t(),e(1443,")"),t()(),i(1444,"h4",15),e(1445,"Propriedades"),t(),i(1446,"table",16)(1447,"tr",17)(1448,"th",18),e(1449,"Nome"),t(),i(1450,"th",18),e(1451,"Tipo"),t(),i(1452,"th",18),e(1453,"Descri\xE7\xE3o"),t()(),i(1454,"tr",19)(1455,"td",20)(1456,"div",21)(1457,"span",22),e(1458," label"),o(1459,"br"),t()()(),i(1460,"td",24)(1461,"code",28),e(1462,"string"),t()(),i(1463,"td",27)(1464,"p"),e(1465,"R\xF3tulo da coluna"),t()()(),i(1466,"tr",19)(1467,"td",20)(1468,"div",21)(1469,"span",22),e(1470," value"),o(1471,"br"),t()()(),i(1472,"td",24)(1473,"code",28),e(1474,"string"),t()(),i(1475,"td",27)(1476,"p"),e(1477,"Coluna"),t()()()()(),i(1478,"po-accordion-item",60)(1479,"h4",9)(1480,"code"),e(1481,"ThfLookupFilter"),t()(),i(1482,"div",10)(1483,"p"),e(1484,"Interface para definir o tipo de busca via servi\xE7o."),t()(),i(1485,"table",51)(1486,"tr",19)(1487,"th",52)(1488,"div",21)(1489,"h4")(1490,"span",22),e(1491," fetchItems "),t()()()()(),i(1492,"tr",27)(1493,"td",27)(1494,"p"),e(1495,`M\xE9todo que ser\xE1 disparado ao digitar no campo do componente, deve-se retornar
um `),i(1496,"em"),e(1497,"Observable"),t(),e(1498," com a resposta da API no formato { items: [] }."),t()()()(),i(1499,"h5")(1500,"b"),e(1501,"Par\xE2metros"),t()(),i(1502,"table",16)(1503,"tr",17)(1504,"th",18),e(1505,"Nome"),t(),i(1506,"th",18),e(1507,"Tipo"),t(),i(1508,"th",18),e(1509,"Descri\xE7\xE3o"),t()(),i(1510,"tr",19)(1511,"td",20),e(1512," query"),t(),i(1513,"td",24)(1514,"code",61),e(1515," string "),t()(),i(1516,"td",27)(1517,"p"),e(1518,"Par\xE2metro com o valor que est\xE1 sendo digitado no campo do lookup"),t()()(),i(1519,"tr",19)(1520,"td",20),e(1521," filterParams"),t(),i(1522,"td",24)(1523,"code",61),e(1524," any "),t()(),i(1525,"td",27)(1526,"p"),e(1527,"Valor informado atrav\xE9s da propriedade "),i(1528,"strong"),e(1529,"t-filter-params"),t(),e(1530,"."),t()()()(),o(1531,"br"),i(1532,"table",51)(1533,"tr",19)(1534,"th",52)(1535,"div",21)(1536,"h4")(1537,"span",22),e(1538," getFilteredItems "),t()()()()(),i(1539,"tr",27)(1540,"td",27)(1541,"p"),e(1542,`M\xE9todo que ser\xE1 disparado ao filtrar no grid ou carregar mais resultados no componente, deve-se retornar
um `),i(1543,"em"),e(1544,"Observable"),t(),e(1545," com a resposta da API no formato da interface "),i(1546,"strong"),e(1547,"ThfLookupResponseApi"),t(),e(1548,"."),t()()()(),i(1549,"h5")(1550,"b"),e(1551,"Par\xE2metros"),t()(),i(1552,"table",16)(1553,"tr",17)(1554,"th",18),e(1555,"Nome"),t(),i(1556,"th",18),e(1557,"Tipo"),t(),i(1558,"th",18),e(1559,"Descri\xE7\xE3o"),t()(),i(1560,"tr",19)(1561,"td",20),e(1562," params"),t(),i(1563,"td",24)(1564,"code",61),e(1565," ThfLookupFilteredItemsParams "),t()(),i(1566,"td",27)(1567,"p"),e(1568,"Objeto enviado por par\xE2metro que implementa a interface "),i(1569,"strong"),e(1570,"ThfLookupFilteredItemsParams"),t(),e(1571,"."),t()()()(),o(1572,"br"),i(1573,"table",51)(1574,"tr",19)(1575,"th",52)(1576,"div",21)(1577,"h4")(1578,"span",22),e(1579," getObjectByValue "),t()()()()(),i(1580,"tr",27)(1581,"td",27)(1582,"p"),e(1583,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(1584,"p"),e(1585,"Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o esteja habilitada, o par\xE2metro "),i(1586,"code"),e(1587,"value"),t(),e(1588,` ser\xE1 enviado como uma lista de valores
e o `),i(1589,"em"),e(1590,"Observable"),t(),e(1591," deve retornar uma lista de objetos."),t()()()(),i(1592,"h5")(1593,"b"),e(1594,"Par\xE2metros"),t()(),i(1595,"table",16)(1596,"tr",17)(1597,"th",18),e(1598,"Nome"),t(),i(1599,"th",18),e(1600,"Tipo"),t(),i(1601,"th",18),e(1602,"Descri\xE7\xE3o"),t()(),i(1603,"tr",19)(1604,"td",20),e(1605," value"),t(),i(1606,"td",24)(1607,"code",28),e(1608," string "),t(),i(1609,"code",36),e(1610," Array<any> "),t()(),i(1611,"td",27)(1612,"p"),e(1613,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(1614,"tr",19)(1615,"td",20),e(1616," filterParams"),t(),i(1617,"td",24)(1618,"code",61),e(1619," any "),t()(),i(1620,"td",27)(1621,"p"),e(1622,"Valor informado atrav\xE9s da propriedade "),i(1623,"strong"),e(1624,"t-filter-params"),t(),e(1625,"."),t()()()(),o(1626,"br"),t(),i(1627,"po-accordion-item",62)(1628,"h4",9)(1629,"code"),e(1630,"ThfLookupFilteredItemsParams"),t()(),i(1631,"div",10)(1632,"p"),e(1633,"Interface do objeto enviado como par\xE2metro do m\xE9todo privado "),i(1634,"strong"),e(1635,"getFilteredItems"),t(),e(1636,"."),t()(),i(1637,"h4",15),e(1638,"Propriedades"),t(),i(1639,"table",16)(1640,"tr",17)(1641,"th",18),e(1642,"Nome"),t(),i(1643,"th",18),e(1644,"Tipo"),t(),i(1645,"th",18),e(1646,"Descri\xE7\xE3o"),t()(),i(1647,"tr",19)(1648,"td",20)(1649,"div",21)(1650,"span",22),e(1651," filter"),o(1652,"br"),t()()(),i(1653,"td",24)(1654,"code",63),e(1655,`{ [key: string]: any;
}`),t()(),i(1656,"td",27)(1657,"em")(1658,"strong"),e(1659,"(opcional)"),t()(),i(1660,"p"),e(1661,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(1662,"tr",19)(1663,"td",20)(1664,"div",21)(1665,"span",22),e(1666," filterParams"),o(1667,"br"),t()()(),i(1668,"td",24)(1669,"code",39),e(1670,"any"),t()(),i(1671,"td",27)(1672,"em")(1673,"strong"),e(1674,"(opcional)"),t()(),i(1675,"p"),e(1676,"Valor informado atrav\xE9s da propriedade "),i(1677,"code"),e(1678,"t-filter-params"),t(),e(1679,"."),t()()(),i(1680,"tr",19)(1681,"td",20)(1682,"div",21)(1683,"span",22),e(1684," order"),o(1685,"br"),t()()(),i(1686,"td",24)(1687,"code",28),e(1688,"string"),t()(),i(1689,"td",27)(1690,"em")(1691,"strong"),e(1692,"(opcional)"),t()(),i(1693,"p"),e(1694,"Coluna que est\xE1 sendo ordenada na grid."),t(),i(1695,"ul")(1696,"li"),e(1697,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(1698,"code"),e(1699,"-<colunaOrdenada>"),t(),e(1700,", por exemplo "),i(1701,"code"),e(1702,"-name"),t(),e(1703,"."),t(),i(1704,"li"),e(1705,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(1706,"code"),e(1707,"<colunaOrdenada>"),t(),e(1708,", por exemplo "),i(1709,"code"),e(1710,"name"),t(),e(1711,"."),t()()()(),i(1712,"tr",19)(1713,"td",20)(1714,"div",21)(1715,"span",22),e(1716," page"),o(1717,"br"),t()()(),i(1718,"td",24)(1719,"code",64),e(1720,"number"),t()(),i(1721,"td",27)(1722,"em")(1723,"strong"),e(1724,"(opcional)"),t()(),i(1725,"p"),e(1726,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(1727,"tr",19)(1728,"td",20)(1729,"div",21)(1730,"span",22),e(1731," pageSize"),o(1732,"br"),t()()(),i(1733,"td",24)(1734,"code",64),e(1735,"number"),t()(),i(1736,"td",27)(1737,"em")(1738,"strong"),e(1739,"(opcional)"),t()(),i(1740,"p"),e(1741,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()()(),i(1742,"po-accordion-item",65)(1743,"h4",9)(1744,"code"),e(1745,"ThfLookupGridProperties"),t()(),i(1746,"div",10)(1747,"p"),e(1748,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t()(),i(1749,"h4",15),e(1750,"Propriedades"),t(),i(1751,"table",16)(1752,"tr",17)(1753,"th",18),e(1754,"Nome"),t(),i(1755,"th",18),e(1756,"Tipo"),t(),i(1757,"th",18),e(1758,"Descri\xE7\xE3o"),t()(),i(1759,"tr",19)(1760,"td",20)(1761,"div",21)(1762,"span",22),e(1763," autoSize"),o(1764,"br"),t()()(),i(1765,"td",24)(1766,"code",29),e(1767,"boolean"),t()(),i(1768,"td",27)(1769,"em")(1770,"strong"),e(1771,"(opcional)"),t()(),i(1772,"p"),e(1773,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(1774,"strong"),e(1775,"resizable"),t(),e(1776," esteja habilitada."),t(),i(1777,"blockquote")(1778,"p"),e(1779,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.`),t()()()(),i(1780,"tr",19)(1781,"td",20)(1782,"div",21)(1783,"span",22),e(1784," autoSizeOnScroll"),o(1785,"br"),t()()(),i(1786,"td",24)(1787,"code",29),e(1788,"boolean"),t()(),i(1789,"td",27)(1790,"em")(1791,"strong"),e(1792,"(opcional)"),t()(),i(1793,"p"),e(1794,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(1795,"p"),e(1796,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(1797,"p"),e(1798,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(1799,"code"),e(1800,"t-page-size-virtual"),t(),e(1801," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(1802,"blockquote")(1803,"p")(1804,"strong"),e(1805,"Pr\xE9-requisitos"),t(),e(1806,": Requer que as propriedades "),i(1807,"code"),e(1808,"autoSize"),t(),e(1809,", "),i(1810,"code"),e(1811,"resizable"),t(),e(1812,`
e `),i(1813,"code"),e(1814,"virtualScroll"),t(),e(1815," estejam habilitadas."),t()(),i(1816,"blockquote")(1817,"p")(1818,"strong"),e(1819,"Incompatibilidade"),t(),e(1820,": N\xE3o funciona com "),i(1821,"code"),e(1822,"t-grid-row-actions"),t(),e(1823," habilitado;"),t()(),i(1824,"p")(1825,"strong"),e(1826,"Exemplo de uso:"),t()(),i(1827,"pre")(1828,"code",33),e(1829,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>`),t()()()(),i(1830,"tr",19)(1831,"td",20)(1832,"div",21)(1833,"span",22),e(1834," draggable"),o(1835,"br"),t()()(),i(1836,"td",24)(1837,"code",29),e(1838,"boolean"),t()(),i(1839,"td",27)(1840,"em")(1841,"strong"),e(1842,"(opcional)"),t()(),i(1843,"p"),e(1844,"Habilita o Drag and Drop nas colunas."),t()()(),i(1845,"tr",19)(1846,"td",20)(1847,"div",21)(1848,"span",22),e(1849," group"),o(1850,"br"),t()()(),i(1851,"td",24)(1852,"code",37),e(1853,"Array<string>"),t()(),i(1854,"td",27)(1855,"em")(1856,"strong"),e(1857,"(opcional)"),t()(),i(1858,"p"),e(1859,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(1860,"strong"),e(1861,"groupable"),t(),e(1862," esteja habilitada."),t()()(),i(1863,"tr",19)(1864,"td",20)(1865,"div",21)(1866,"span",22),e(1867," groupable"),o(1868,"br"),t()()(),i(1869,"td",24)(1870,"code",29),e(1871,"boolean "),t(),i(1872,"code",66),e(1873," GroupableSettings"),t()(),i(1874,"td",27)(1875,"em")(1876,"strong"),e(1877,"(opcional)"),t()(),i(1878,"p"),e(1879,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(1880,"tr",19)(1881,"td",20)(1882,"div",21)(1883,"span",22),e(1884," hideSelectAll"),o(1885,"br"),t()()(),i(1886,"td",24)(1887,"code",29),e(1888,"boolean"),t()(),i(1889,"td",27)(1890,"em")(1891,"strong"),e(1892,"(opcional)"),t()(),i(1893,"p"),e(1894,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1895,"tr",19)(1896,"td",20)(1897,"div",21)(1898,"span",22),e(1899," resizable"),o(1900,"br"),t()()(),i(1901,"td",24)(1902,"code",29),e(1903,"boolean"),t()(),i(1904,"td",27)(1905,"em")(1906,"strong"),e(1907,"(opcional)"),t()(),i(1908,"p"),e(1909,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1910,"tr",19)(1911,"td",20)(1912,"div",21)(1913,"span",22),e(1914," selectableEntireLine"),o(1915,"br"),t()()(),i(1916,"td",24)(1917,"code",29),e(1918,"boolean"),t()(),i(1919,"td",27)(1920,"em")(1921,"strong"),e(1922,"(opcional)"),t()(),i(1923,"p"),e(1924,"Permite selecionar o item ao clicar na linha."),t()()(),i(1925,"tr",19)(1926,"td",20)(1927,"div",21)(1928,"span",22),e(1929," showDraggableIcon"),o(1930,"br"),t()()(),i(1931,"td",24)(1932,"code",29),e(1933,"boolean"),t()(),i(1934,"td",27)(1935,"em")(1936,"strong"),e(1937,"(opcional)"),t()(),i(1938,"p"),e(1939,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1940,"tr",19)(1941,"td",20)(1942,"div",21)(1943,"span",22),e(1944," showMoreDisabled"),o(1945,"br"),t()()(),i(1946,"td",24)(1947,"code",29),e(1948,"boolean"),t()(),i(1949,"td",27)(1950,"em")(1951,"strong"),e(1952,"(opcional)"),t()(),i(1953,"p"),e(1954,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1955,"tr",19)(1956,"td",20)(1957,"div",21)(1958,"span",22),e(1959," showMoreVisible"),o(1960,"br"),t()()(),i(1961,"td",24)(1962,"code",29),e(1963,"boolean"),t()(),i(1964,"td",27)(1965,"em")(1966,"strong"),e(1967,"(opcional)"),t()(),i(1968,"p"),e(1969,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(1970,"strong"),e(1971,"pageable"),t(),e(1972," esteja habilitada."),t(),i(1973,"blockquote")(1974,"p"),e(1975,"Caso seja utilizado em conjunto com "),i(1976,"strong"),e(1977,"showMoreDisabled"),t(),e(1978,", a propriedade "),i(1979,"strong"),e(1980,"showMoreVisible"),t(),e(1981," ter\xE1 prioridade."),t()()()(),i(1982,"tr",19)(1983,"td",20)(1984,"div",21)(1985,"span",22),e(1986," sort"),o(1987,"br"),t()()(),i(1988,"td",24)(1989,"code",67),e(1990,"Array<{ field: string; dir: 'asc' "),t(),i(1991,"code",68),e(1992,` 'desc';
}>`),t()(),i(1993,"td",27)(1994,"em")(1995,"strong"),e(1996,"(opcional)"),t()(),i(1997,"p"),e(1998,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(1999,"pre")(2e3,"code",34),e(2001,"sort: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(2002,"tr",19)(2003,"td",20)(2004,"div",21)(2005,"span",22),e(2006," sortable"),o(2007,"br"),t()()(),i(2008,"td",24)(2009,"code",29),e(2010,"boolean"),t()(),i(2011,"td",27)(2012,"em")(2013,"strong"),e(2014,"(opcional)"),t()(),i(2015,"p"),e(2016,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(2017,"tr",19)(2018,"td",20)(2019,"div",21)(2020,"span",22),e(2021," spacing"),o(2022,"br"),t()()(),i(2023,"td",24)(2024,"code",69),e(2025,"'extraSmall' "),t(),i(2026,"code",70),e(2027," 'small' "),t(),i(2028,"code",71),e(2029," 'medium' "),t(),i(2030,"code",72),e(2031," 'large'"),t()(),i(2032,"td",27)(2033,"em")(2034,"strong"),e(2035,"(opcional)"),t()(),i(2036,"p"),e(2037,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(2038,"strong"),e(2039,"ThfColumnSpacing"),t(),e(2040,"."),t()()(),i(2041,"tr",19)(2042,"td",20)(2043,"div",21)(2044,"span",22),e(2045," striped"),o(2046,"br"),t()()(),i(2047,"td",24)(2048,"code",29),e(2049,"boolean"),t()(),i(2050,"td",27)(2051,"em")(2052,"strong"),e(2053,"(opcional)"),t()(),i(2054,"p"),e(2055,"Define o estilo listrado no grid (striped)."),t()()(),i(2056,"tr",19)(2057,"td",20)(2058,"div",21)(2059,"span",22),e(2060," virtualScroll"),o(2061,"br"),t()()(),i(2062,"td",24)(2063,"code",29),e(2064,"boolean"),t()(),i(2065,"td",27)(2066,"em")(2067,"strong"),e(2068,"(opcional)"),t()(),i(2069,"p"),e(2070,"Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados."),t()()()()(),i(2071,"po-accordion-item",73)(2072,"h4",9)(2073,"code"),e(2074,"ThfLookupKeysLabel"),t()(),i(2075,"div",10)(2076,"p"),e(2077,"Interface para definir as propriedades vis\xEDveis do item selecionado ("),i(2078,"strong"),e(2079,"t-keys-label"),t(),e(2080,")."),t()(),i(2081,"h4",15),e(2082,"Propriedades"),t(),i(2083,"table",16)(2084,"tr",17)(2085,"th",18),e(2086,"Nome"),t(),i(2087,"th",18),e(2088,"Tipo"),t(),i(2089,"th",18),e(2090,"Descri\xE7\xE3o"),t()(),i(2091,"tr",19)(2092,"td",20)(2093,"div",21)(2094,"span",22),e(2095," label"),o(2096,"br"),t()()(),i(2097,"td",24)(2098,"code",28),e(2099,"string"),t()(),i(2100,"td",27)(2101,"p"),e(2102,"Texto exibido"),t()()(),i(2103,"tr",19)(2104,"td",20)(2105,"div",21)(2106,"span",22),e(2107," value"),o(2108,"br"),t()()(),i(2109,"td",24)(2110,"code",28),e(2111,"string"),t()(),i(2112,"td",27)(2113,"p"),e(2114,"Coluna"),t()()()()(),i(2115,"po-accordion-item",74)(2116,"h4",9)(2117,"code"),e(2118,"ThfLookupLiterals"),t()(),i(2119,"div",10)(2120,"p"),e(2121,"Interface para customizar literais ("),i(2122,"strong"),e(2123,"t-literals"),t(),e(2124,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(2125,"h4",15),e(2126,"Propriedades"),t(),i(2127,"table",16)(2128,"tr",17)(2129,"th",18),e(2130,"Nome"),t(),i(2131,"th",18),e(2132,"Tipo"),t(),i(2133,"th",18),e(2134,"Descri\xE7\xE3o"),t()(),i(2135,"tr",19)(2136,"td",20)(2137,"div",21)(2138,"span",22),e(2139," confirmBodyDelete"),o(2140,"br"),t()()(),i(2141,"td",24)(2142,"code",28),e(2143,"string"),t()(),i(2144,"td",27)(2145,"em")(2146,"strong"),e(2147,"(opcional)"),t()(),i(2148,"p"),e(2149,"Texto do corpo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2150,"tr",19)(2151,"td",20)(2152,"div",21)(2153,"span",22),e(2154," confirmCancelDelete"),o(2155,"br"),t()()(),i(2156,"td",24)(2157,"code",28),e(2158,"string"),t()(),i(2159,"td",27)(2160,"em")(2161,"strong"),e(2162,"(opcional)"),t()(),i(2163,"p"),e(2164,"Texto do bot\xE3o de cancelar do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2165,"tr",19)(2166,"td",20)(2167,"div",21)(2168,"span",22),e(2169," confirmRemoveDelete"),o(2170,"br"),t()()(),i(2171,"td",24)(2172,"code",28),e(2173,"string"),t()(),i(2174,"td",27)(2175,"em")(2176,"strong"),e(2177,"(opcional)"),t()(),i(2178,"p"),e(2179,"Texto do bot\xE3o de remover do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2180,"tr",19)(2181,"td",20)(2182,"div",21)(2183,"span",22),e(2184," confirmTitleDelete"),o(2185,"br"),t()()(),i(2186,"td",24)(2187,"code",28),e(2188,"string"),t()(),i(2189,"td",27)(2190,"em")(2191,"strong"),e(2192,"(opcional)"),t()(),i(2193,"p"),e(2194,"T\xEDtulo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2195,"tr",19)(2196,"td",20)(2197,"div",21)(2198,"span",22),e(2199," lastSearch"),o(2200,"br"),t()()(),i(2201,"td",24)(2202,"code",28),e(2203,"string"),t()(),i(2204,"td",27)(2205,"em")(2206,"strong"),e(2207,"(opcional)"),t()(),i(2208,"p"),e(2209,"Texto exibido no listbox quando estiver exibindo as ultimas pesquisas."),t()()(),i(2210,"tr",19)(2211,"td",20)(2212,"div",21)(2213,"span",22),e(2214," listNotFound"),o(2215,"br"),t()()(),i(2216,"td",24)(2217,"code",28),e(2218,"string"),t()(),i(2219,"td",27)(2220,"em")(2221,"strong"),e(2222,"(opcional)"),t()(),i(2223,"p"),e(2224,"Texto exibido no listbox quando nenhum resultado for encontrado."),t()()(),i(2225,"tr",19)(2226,"td",20)(2227,"div",21)(2228,"span",22),e(2229," modalPlaceholder"),o(2230,"br"),t()()(),i(2231,"td",24)(2232,"code",28),e(2233,"string"),t()(),i(2234,"td",27)(2235,"em")(2236,"strong"),e(2237,"(opcional)"),t()(),i(2238,"p"),e(2239,"Texto exibido no placeholder do input da modal."),t()()(),i(2240,"tr",19)(2241,"td",20)(2242,"div",21)(2243,"span",22),e(2244," modalPrimaryActionLabel"),o(2245,"br"),t()()(),i(2246,"td",24)(2247,"code",28),e(2248,"string"),t()(),i(2249,"td",27)(2250,"em")(2251,"strong"),e(2252,"(opcional)"),t()(),i(2253,"p"),e(2254,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(2255,"tr",19)(2256,"td",20)(2257,"div",21)(2258,"span",22),e(2259," modalSecondaryActionLabel"),o(2260,"br"),t()()(),i(2261,"td",24)(2262,"code",28),e(2263,"string"),t()(),i(2264,"td",27)(2265,"em")(2266,"strong"),e(2267,"(opcional)"),t()(),i(2268,"p"),e(2269,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(2270,"tr",19)(2271,"td",20)(2272,"div",21)(2273,"span",22),e(2274," modalTableLoadMoreData"),o(2275,"br"),t()()(),i(2276,"td",24)(2277,"code",28),e(2278,"string"),t()(),i(2279,"td",27)(2280,"em")(2281,"strong"),e(2282,"(opcional)"),t()(),i(2283,"p"),e(2284,"Label do "),i(2285,"code"),e(2286,"button"),t(),e(2287," que deve carregar mais resultados no grid, ou seja, exibir mais itens."),t()()(),i(2288,"tr",19)(2289,"td",20)(2290,"div",21)(2291,"span",22),e(2292," modalTableLoadingData"),o(2293,"br"),t()()(),i(2294,"td",24)(2295,"code",28),e(2296,"string"),t()(),i(2297,"td",27)(2298,"em")(2299,"strong"),e(2300,"(opcional)"),t()(),i(2301,"p"),e(2302,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na grid."),t()()(),i(2303,"tr",19)(2304,"td",20)(2305,"div",21)(2306,"span",22),e(2307," modalTableNoColumns"),o(2308,"br"),t()()(),i(2309,"td",24)(2310,"code",28),e(2311,"string"),t()(),i(2312,"td",27)(2313,"em")(2314,"strong"),e(2315,"(opcional)"),t()(),i(2316,"p"),e(2317,"Texto exibido quando n\xE3o existem colunas definidas no grid."),t()()(),i(2318,"tr",19)(2319,"td",20)(2320,"div",21)(2321,"span",22),e(2322," modalTableNoData"),o(2323,"br"),t()()(),i(2324,"td",24)(2325,"code",28),e(2326,"string"),t()(),i(2327,"td",27)(2328,"em")(2329,"strong"),e(2330,"(opcional)"),t()(),i(2331,"p"),e(2332,"Texto exibido quando n\xE3o existem itens para serem exibidos no grid."),t()()(),i(2333,"tr",19)(2334,"td",20)(2335,"div",21)(2336,"span",22),e(2337," modalTitle"),o(2338,"br"),t()()(),i(2339,"td",24)(2340,"code",28),e(2341,"string"),t()(),i(2342,"td",27)(2343,"em")(2344,"strong"),e(2345,"(opcional)"),t()(),i(2346,"p"),e(2347,"Texto exibido no t\xEDtulo da modal."),t()()(),i(2348,"tr",19)(2349,"td",20)(2350,"div",21)(2351,"span",22),e(2352," multipleItems"),o(2353,"br"),t()()(),i(2354,"td",24)(2355,"code",28),e(2356,"string"),t()(),i(2357,"td",27)(2358,"em")(2359,"strong"),e(2360,"(opcional)"),t()(),i(2361,"p"),e(2362,"Frase exibida no accordion quando possui mais de um item selecionado."),t()()(),i(2363,"tr",19)(2364,"td",20)(2365,"div",21)(2366,"span",22),e(2367," oneItem"),o(2368,"br"),t()()(),i(2369,"td",24)(2370,"code",28),e(2371,"string"),t()(),i(2372,"td",27)(2373,"em")(2374,"strong"),e(2375,"(opcional)"),t()(),i(2376,"p"),e(2377,"Frase exibida no accordion quando possui apenas um item selecionado."),t()()(),i(2378,"tr",19)(2379,"td",20)(2380,"div",21)(2381,"span",22),e(2382," or"),o(2383,"br"),t()()(),i(2384,"td",24)(2385,"code",28),e(2386,"string"),t()(),i(2387,"td",27)(2388,"em")(2389,"strong"),e(2390,"(opcional)"),t()(),i(2391,"p"),e(2392,"Palavra 'ou' que \xE9 exibida dentro do listbox."),t()()(),i(2393,"tr",19)(2394,"td",20)(2395,"div",21)(2396,"span",22),e(2397," searchAdvanced"),o(2398,"br"),t()()(),i(2399,"td",24)(2400,"code",28),e(2401,"string"),t()(),i(2402,"td",27)(2403,"em")(2404,"strong"),e(2405,"(opcional)"),t()(),i(2406,"p"),e(2407,"Texto exibido no listbox para fazer busca avan\xE7ada."),t()()(),i(2408,"tr",19)(2409,"td",20)(2410,"div",21)(2411,"span",22),e(2412," searchBy"),o(2413,"br"),t()()(),i(2414,"td",24)(2415,"code",28),e(2416,"string"),t()(),i(2417,"td",27)(2418,"em")(2419,"strong"),e(2420,"(opcional)"),t()(),i(2421,"p"),e(2422,"Texto exibido para indicar os campos filtrados."),t()()()()(),i(2423,"po-accordion-item",75)(2424,"h4",9)(2425,"code"),e(2426,"ThfLookupResponseApi"),t()(),i(2427,"div",10)(2428,"p"),e(2429,"Interface que representa a estrutura de uma resposta de sucesso HTTP."),t(),i(2430,"blockquote")(2431,"p"),e(2432,"Utilizada apenas quando a resposta incluir uma cole\xE7\xE3o de itens. "),t()()(),i(2433,"h4",15),e(2434,"Propriedades"),t(),i(2435,"table",16)(2436,"tr",17)(2437,"th",18),e(2438,"Nome"),t(),i(2439,"th",18),e(2440,"Tipo"),t(),i(2441,"th",18),e(2442,"Descri\xE7\xE3o"),t()(),i(2443,"tr",19)(2444,"td",20)(2445,"div",21)(2446,"span",22),e(2447," hasNext"),o(2448,"br"),t()()(),i(2449,"td",24)(2450,"code",29),e(2451,"boolean"),t()(),i(2452,"td",27)(2453,"p"),e(2454,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(2455,"tr",19)(2456,"td",20)(2457,"div",21)(2458,"span",22),e(2459," items"),o(2460,"br"),t()()(),i(2461,"td",24)(2462,"code",36),e(2463,"Array<any>"),t()(),i(2464,"td",27)(2465,"p"),e(2466,"Lista de itens retornados."),t()()()()()()(),D(2467,4),t(),i(2468,"po-tab",76)(2469,"po-container",5),D(2470,5),i(2471,"h3",77),e(2472,"Tokens customiz\xE1veis"),t(),i(2473,"p"),e(2474,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(2475,"blockquote")(2476,"p"),e(2477,"Para maiores informa\xE7\xF5es, acesse o guia "),i(2478,"a",78),e(2479,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(2480,"."),t()(),i(2481,"table")(2482,"thead")(2483,"tr")(2484,"th"),e(2485,"Propriedade"),t(),i(2486,"th"),e(2487,"Descri\xE7\xE3o"),t(),i(2488,"th"),e(2489,"Valor Padr\xE3o"),t()()(),i(2490,"tbody")(2491,"tr")(2492,"td")(2493,"strong"),e(2494,"Default Values"),t()(),o(2495,"td")(2496,"td"),t(),i(2497,"tr")(2498,"td")(2499,"code"),e(2500,"--font-family"),t()(),i(2501,"td"),e(2502,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(2503,"td")(2504,"code"),e(2505,"var(--font-family-theme)"),t()()(),i(2506,"tr")(2507,"td")(2508,"code"),e(2509,"--font-size"),t()(),i(2510,"td"),e(2511,"Tamanho da fonte"),t(),i(2512,"td")(2513,"code"),e(2514,"var(--font-size)"),t()()(),i(2515,"tr")(2516,"td")(2517,"code"),e(2518,"--text-color-placeholder"),t()(),i(2519,"td"),e(2520,"Cor do texto no placeholder"),t(),i(2521,"td")(2522,"code"),e(2523,"var(--color-neutral-light-30)"),t()()(),i(2524,"tr")(2525,"td")(2526,"code"),e(2527,"--color"),t()(),i(2528,"td"),e(2529,"Cor principal do campo"),t(),i(2530,"td")(2531,"code"),e(2532,"var(--color-neutral-dark-70)"),t()()(),i(2533,"tr")(2534,"td")(2535,"code"),e(2536,"--background"),t()(),i(2537,"td"),e(2538,"Cor de background"),t(),i(2539,"td")(2540,"code"),e(2541,"var(--color-neutral-light-00)"),t()()(),i(2542,"tr")(2543,"td")(2544,"code"),e(2545,"--text-color"),t()(),i(2546,"td"),e(2547,"Cor do texto"),t(),i(2548,"td")(2549,"code"),e(2550,"var(--color-neutral-mid-60)"),t()()(),i(2551,"tr")(2552,"td")(2553,"strong"),e(2554,"Hover"),t()(),o(2555,"td")(2556,"td"),t(),i(2557,"tr")(2558,"td")(2559,"code"),e(2560,"--color-hover"),t()(),i(2561,"td"),e(2562,"Cor principal do campo no estado hover"),t(),i(2563,"td")(2564,"code"),e(2565,"var(--color-brand-01-dark)"),t()()(),i(2566,"tr")(2567,"td")(2568,"code"),e(2569,"--background-hover"),t()(),i(2570,"td"),e(2571,"Cor de background no estado hover"),t(),i(2572,"td")(2573,"code"),e(2574,"var(--color-brand-01-lightest)"),t()()(),i(2575,"tr")(2576,"td")(2577,"strong"),e(2578,"Focused"),t()(),o(2579,"td")(2580,"td"),t(),i(2581,"tr")(2582,"td")(2583,"code"),e(2584,"--color-focused"),t()(),i(2585,"td"),e(2586,"Cor principal do campo no estado de focus"),t(),i(2587,"td")(2588,"code"),e(2589,"var(--color-action-default)"),t()()(),i(2590,"tr")(2591,"td")(2592,"code"),e(2593,"--outline-color-focused"),t()(),i(2594,"td"),e(2595,"Cor do outline no estado de focus"),t(),i(2596,"td")(2597,"code"),e(2598,"var(--color-action-focus)"),t()()(),i(2599,"tr")(2600,"td")(2601,"strong"),e(2602,"Disabled"),t()(),o(2603,"td")(2604,"td"),t(),i(2605,"tr")(2606,"td")(2607,"code"),e(2608,"--color-disabled"),t()(),i(2609,"td"),e(2610,"Cor principal do campo no estado disabled"),t(),i(2611,"td")(2612,"code"),e(2613,"var(--color-neutral-light-30)"),t()()(),i(2614,"tr")(2615,"td")(2616,"code"),e(2617,"--background-disabled"),t()(),i(2618,"td"),e(2619,"Cor de background no estado disabled"),t(),i(2620,"td")(2621,"code"),e(2622,"var(--color-neutral-light-05)"),t()()(),i(2623,"tr")(2624,"td")(2625,"code"),e(2626,"--text-color-disabled"),t()(),i(2627,"td"),e(2628,"Cor do texto no estado disabled"),t(),i(2629,"td")(2630,"code"),e(2631,"var(--color-neutral-dark-70)"),t()()()()()(),D(2632,6),t(),i(2633,"po-tab",79),D(2634,7),t()()())},dependencies:[z,$,y,te,N],encapsulation:2});let d=l;return d})();var ki=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],_i=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],kt=(()=>{let l=class l{constructor(r){this.el=r}ngAfterViewInit(){this.accordions.forEach(r=>{setTimeout(()=>{r.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(r){setTimeout(()=>{let n=this.tabs.tabs.find(a=>a.elementRef.nativeElement.className===`docs-tab-${r}`);if(n){let a=n.elementRef.nativeElement;a.textContent.trim()!==""||a.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(S=>{let C=S.querySelector(".po-tab-button-label");C&&C?.textContent?.trim().toLowerCase()===r&&S.remove()}),a.remove(),n.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(S=>!S.hide)))}},100)}};l.\u0275fac=function(n){return new(n||l)(R(X))},l.\u0275cmp=b({type:l,selectors:[["api-thf-lookup-data"]],viewQuery:function(n,a){if(n&1&&(A(N,5),A(z,5)),n&2){let s;q(s=k())&&(a.tabs=s.first),q(s=k())&&(a.accordions=s)}},standalone:!1,ngContentSelectors:_i,decls:1763,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataColumn>"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataFilterSearchSelect>"],["pan","",1,"docs-api-property-type","ThfLookupDataFilter"],["href","https://po-ui.io/guides/api"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","ThfLookupDataGridProperties"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupDataLiterals"],["href","https://po-ui.io/documentation/po-theme"],["p-label","Interfaces"],["p-label","ThfLookupDataColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["p-label","ThfLookupDataFilterSearchSelect"],["p-label","ThfLookupDataFilter"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],["p-label","ThfLookupDataFilteredItemsParams"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["p-label","ThfLookupDataGridProperties"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","Array<{","field:","string;","dir:","'asc'"],["pan","",1,"docs-api-property-type","'desc';","}>"],["pan","",1,"docs-api-property-type","'extraSmall'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["p-label","ThfLookupDataKeysLabel"],["p-label","ThfLookupDataLiterals"],["p-label","ThfLookupDataResponseApi"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["href","https://po-ui.io/documentation/po-search"],["href","https://thf.totvs.app/v19/documentation/thf-grid"],["p-label","Labs",1,"docs-tab-labs"]],template:function(n,a){n&1&&(Y(ki),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),D(4),t(),i(5,"po-tab",4),D(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfLookupDataComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"Componente de busca com um grid que lista dados de um servi\xE7o."),t(),i(19,"p"),e(20,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(21,"code"),e(22,"THF-Lookup-Data"),t(),e(23,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(24,"code"),e(25,"import { ThfLookupDataComponent } from '@totvs/thf-components';"),t()()(),i(26,"div",11)(27,"h4",12),e(28,"Seletor"),t(),i(29,"pre",13),e(30,`<thf-lookup-grid
  (t-change)="EventEmitter"
  (t-change-model)="EventEmitter"
  t-columns="Array<ThfLookupDataColumn>"
  t-custom-items="Array<any>"
  t-disabled="boolean"
  t-field-label="string"
  t-field-value="string"
  t-filter-params="any"
  t-filter-search-select="Array<ThfLookupDataFilterSearchSelect>"
  t-filter-service="ThfLookupDataFilter | string"
  t-grid-properties="ThfLookupDataGridProperties"
  t-height="number"
  (t-focus)="EventEmitter"
  (t-keydown)="EventEmitter"
  t-keys-label="Array<ThfLookupDataKeysLabel>"
  t-literals="ThfLookupDataLiterals"
  t-multiple="boolean"
  (t-error)="EventEmitter"
  (t-selected)="EventEmitter"
  t-size="string" >
</thf-lookup-grid>
`),t()()(),i(31,"po-accordion-item",14)(32,"h4",15),e(33,"Propriedades"),t(),i(34,"table",16)(35,"tr",17)(36,"th",18),e(37,"Nome"),t(),i(38,"th",18),e(39,"Tipo"),t(),i(40,"th",18),e(41,"Padr\xE3o"),t(),i(42,"th",18),e(43,"Descri\xE7\xE3o"),t()(),i(44,"tr",19)(45,"td",20)(46,"div",21)(47,"span",22),e(48," (t-change)"),o(49,"br"),t()()(),i(50,"td",23)(51,"code",24),e(52,"EventEmitter"),t()(),i(53,"td",25),e(54,"-"),t(),i(55,"td",26)(56,"em")(57,"strong"),e(58,"(opcional)"),t()(),i(59,"p"),e(60,"Evento disparado quando ocorre mudan\xE7as de valor realizadas pelo usu\xE1rio."),t()()(),i(61,"tr",19)(62,"td",20)(63,"div",21)(64,"span",22),e(65," (t-change-model)"),o(66,"br"),t()()(),i(67,"td",23)(68,"code",24),e(69,"EventEmitter"),t()(),i(70,"td",25),e(71,"-"),t(),i(72,"td",26)(73,"em")(74,"strong"),e(75,"(opcional)"),t()(),i(76,"p"),e(77,"Evento disparado quando ocorre mudan\xE7as de valor no campo realizados pelo usu\xE1rio ou altera\xE7\xF5es de valores de forma din\xE2mica."),t()()(),i(78,"tr",19)(79,"td",20)(80,"div",27)(81,"span",28),e(82,"t-columns"),o(83,"br"),t()()(),i(84,"td",23)(85,"code",29),e(86,"Array<ThfLookupDataColumn>"),t()(),i(87,"td",25),e(88,"-"),t(),i(89,"td",26)(90,"em")(91,"strong"),e(92,"(opcional)"),t()(),i(93,"p"),e(94,"Permite definir e configurar as colunas do grid por meio da interface "),i(95,"strong"),e(96,"ThfLookupDataColumn"),t(),e(97,"."),t(),i(98,"pre")(99,"code",30),e(100,`// Exemplo de uso:
<thf-lookup
 ...
 [t-columns]="columns"
></thf-lookup>`),t()(),i(101,"pre")(102,"code",31),e(103,`columns: Array<ThfLookupDataColumn> = [
 { property: 'id', label: 'C\xF3digo' },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(104,"tr",19)(105,"td",20)(106,"div",27)(107,"span",28),e(108,"t-custom-items"),o(109,"br"),t()()(),i(110,"td",23)(111,"code",32),e(112,"Array<any>"),t()(),i(113,"td",25)(114,"p")(115,"code"),e(116,"[]"),t()()(),i(117,"td",26)(118,"em")(119,"strong"),e(120,"(opcional)"),t()(),i(121,"p"),e(122,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t()()(),i(123,"tr",19)(124,"td",20)(125,"div",27)(126,"span",28),e(127,"t-disabled"),o(128,"br"),t()()(),i(129,"td",23)(130,"code",33),e(131,"boolean"),t()(),i(132,"td",25)(133,"p")(134,"code"),e(135,"false"),t()()(),i(136,"td",26)(137,"em")(138,"strong"),e(139,"(opcional)"),t()(),i(140,"p"),e(141,'Desabilita a sele\xE7\xE3o na grid, o campo de busca e o bot\xE3o "Carregar mais resultados" do componente.'),t()()(),i(142,"tr",19)(143,"td",20)(144,"div",27)(145,"span",28),e(146,"t-field-label"),o(147,"br"),t()()(),i(148,"td",23)(149,"code",34),e(150,"string"),t()(),i(151,"td",25),e(152,"-"),t(),i(153,"td",26)(154,"p"),e(155,`Define a coluna que ser\xE1 utilizada como descri\xE7\xE3o.
Propriedade obrigat\xF3ria.`),t()()(),i(156,"tr",19)(157,"td",20)(158,"div",27)(159,"span",28),e(160,"t-field-value"),o(161,"br"),t()()(),i(162,"td",23)(163,"code",34),e(164,"string"),t()(),i(165,"td",25),e(166,"-"),t(),i(167,"td",26)(168,"p"),e(169,"Define a coluna que ser\xE1 utilizada como valor do campo. Propriedade obrigat\xF3ria."),t(),i(170,"blockquote")(171,"p"),e(172,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(173,"tr",19)(174,"td",20)(175,"div",27)(176,"span",28),e(177,"t-filter-params"),o(178,"br"),t()()(),i(179,"td",23)(180,"code",35),e(181,"any"),t()(),i(182,"td",25),e(183,"-"),t(),i(184,"td",26)(185,"em")(186,"strong"),e(187,"(opcional)"),t()(),i(188,"p"),e(189,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou ao servi\xE7o que implementa a interface "),i(190,"strong"),e(191,"ThfLookupDataFilter"),t(),e(192,"."),t()()(),i(193,"tr",19)(194,"td",20)(195,"div",27)(196,"span",28),e(197,"t-filter-search-select"),o(198,"br"),t()()(),i(199,"td",23)(200,"code",36),e(201,"Array<ThfLookupDataFilterSearchSelect>"),t()(),i(202,"td",25),e(203,"-"),t(),i(204,"td",26)(205,"em")(206,"strong"),e(207,"(opcional)"),t()(),i(208,"p"),e(209,"Permite definir quais colunas ser\xE3o op\xE7\xF5es de filtro. Deve implementar a interface "),i(210,"strong"),e(211,"ThfLookupDataFilterSearchSelect"),t(),e(212,"."),t(),i(213,"pre")(214,"code",30),e(215,`// Exemplo de uso:
<thf-lookup
 ...
 [t-filter-search-select]="filterSelect"
></thf-lookup>`),t()(),i(216,"pre")(217,"code",31),e(218,`filterSelect: Array<ThfLookupDataFilterSearchSelect> = [
 { label: 'Nome', value: 'name' },
 { label: 'Nickname', value: 'nickname' },
 { label: 'Email', value: 'email' }
];`),t()()()(),i(219,"tr",19)(220,"td",20)(221,"div",27)(222,"span",28),e(223,"t-filter-service"),o(224,"br"),t()()(),i(225,"td",23)(226,"code",37),e(227,"ThfLookupDataFilter "),t(),i(228,"code",34),e(229," string"),t()(),i(230,"td",25),e(231,"-"),t(),i(232,"td",26)(233,"p"),e(234,`Respons\xE1vel por buscar os dados exibidos no grid dentro do modal de busca avan\xE7ada. Aceita um servi\xE7o que implementa a interface
`),i(235,"strong"),e(236,"ThfLookupDataFilter"),t(),e(237," ou uma URL."),t(),i(238,"p"),e(239,`Quando uma URL \xE9 definida:
Se houver filtro, \xE9 adicionado o par\xE2metro `),i(240,"code"),e(241,"filter"),t(),e(242," com o valor da busca:"),t(),i(243,"pre")(244,"code"),e(245,"url + ?page=1&pageSize=20&filter=Peter"),t()(),i(246,"p"),e(247,"Se houver ordena\xE7\xE3o, \xE9 adicionado o par\xE2metro "),i(248,"code"),e(249,"order"),t(),e(250,` com o valor da coluna.
Exemplo de busca com ordena\xE7\xE3o decrescente:`),t(),i(251,"pre")(252,"code"),e(253,"url + ?page=1&pageSize=20&filter=Peter&order=-name"),t()(),i(254,"p"),e(255,"Exemplo de busca com ordena\xE7\xE3o crescente:"),t(),i(256,"pre")(257,"code"),e(258,"url + ?page=1&pageSize=20&filter=Peter&order=name"),t()(),i(259,"p"),e(260,"Se definido "),i(261,"strong"),e(262,"t-filter-params"),t(),e(263,`, seu valor tamb\xE9m ser\xE1 concatenado.
Exemplo com `),i(264,"code"),e(265,"{ age: 23 }"),t(),e(266,":"),t(),i(267,"pre")(268,"code"),e(269,"url + ?page=1&pageSize=20&age=23&filter=Peter"),t()(),i(270,"p"),e(271,`Se o campo precisar iniciar com valores, os registros s\xE3o buscados das seguintes formas:
Exemplo com a sele\xE7\xE3o \xFAnica:`),t(),i(272,"pre")(273,"code"),e(274,`model = 1234;

GET url/1234`),t()(),i(275,"p"),e(276,"Exemplo com a sele\xE7\xE3o m\xFAltipla:"),t(),i(277,"pre")(278,"code"),e(279,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678`),t()(),i(280,"blockquote")(281,"p"),e(282,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(283,"a",38),e(284,"API do PO UI"),t(),e(285,` e utilizar
os valores definidos nas propriedades `),i(286,"strong"),e(287,"t-field-label"),t(),e(288," e "),i(289,"strong"),e(290,"t-field-value"),t(),e(291," para a constru\xE7\xE3o do "),i(292,"strong"),e(293,"thf-lookup"),t(),e(294,"."),t()(),i(295,"p"),e(296,"Caso a busca tenha ocorrido pressionando a tecla "),i(297,"em"),e(298,"TAB"),t(),e(299,`, o filtro ser\xE1 codificado atrav\xE9s da fun\xE7\xE3o
`),i(300,"a",39),e(301,"encodeURIComponent"),t(),e(302,`, e portanto concatenado
na URL da seguinte forma:`),t(),i(303,"pre")(304,"code"),e(305,"url/valor%20que%20se%20deseja%20filtrar"),t()(),i(306,"blockquote")(307,"p"),e(308,"Caso utilize um servi\xE7o "),i(309,"strong"),e(310,"ThfLookupDataFilter"),t(),e(311,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(312,"tr",19)(313,"td",20)(314,"div",27)(315,"span",28),e(316,"t-grid-properties"),o(317,"br"),t()()(),i(318,"td",23)(319,"code",40),e(320,"ThfLookupDataGridProperties"),t()(),i(321,"td",25),e(322,"-"),t(),i(323,"td",26)(324,"em")(325,"strong"),e(326,"(opcional)"),t()(),i(327,"p"),e(328,"Propriedades para configura\xE7\xE3o do "),i(329,"code"),e(330,"THF-Grid"),t(),e(331,"."),t(),i(332,"p"),e(333,"// Exemplo de uso:"),t(),i(334,"pre")(335,"code",30),e(336,`<thf-lookup
...
[t-grid-properties]="gridProperties"
></thf-lookup>`),t()(),i(337,"pre")(338,"code",31),e(339,`gridProperties: ThfLookupDataGridProperties = {
resizable: true,
autoSize: true,
autoSizeOnScroll: true,
virtualScroll: true,
}`),t()()()(),i(340,"tr",19)(341,"td",20)(342,"div",27)(343,"span",28),e(344,"t-height"),o(345,"br"),t()()(),i(346,"td",23)(347,"code",41),e(348,"number"),t()(),i(349,"td",25),e(350,"-"),t(),i(351,"td",26)(352,"em")(353,"strong"),e(354,"(opcional)"),t()(),i(355,"p"),e(356,"Define a altura do componente em pixels."),t(),i(357,"blockquote")(358,"p"),e(359,"Recomenda-se definir um valor acima de 368px para garantir uma boa visualiza\xE7\xE3o do componente."),t()(),i(360,"blockquote")(361,"p"),e(362,'A altura m\xEDnima do componente corresponde \xE0 soma da altura do campo de busca com a altura do bot\xE3o "Carregar mais resultados".'),t()()()(),i(363,"tr",19)(364,"td",20)(365,"div",21)(366,"span",22),e(367," (t-focus)"),o(368,"br"),t()()(),i(369,"td",23)(370,"code",24),e(371,"EventEmitter"),t()(),i(372,"td",25),e(373,"-"),t(),i(374,"td",26)(375,"em")(376,"strong"),e(377,"(opcional)"),t()(),i(378,"p"),e(379,"Evento emitido quando o campo de entrada (input) recebe foco."),t(),i(380,"p"),e(381,"Esse evento pode ser utilizado para realizar a\xE7\xF5es espec\xEDficas no momento em que o foco \xE9 aplicado ao input."),t()()(),i(382,"tr",19)(383,"td",20)(384,"div",21)(385,"span",22),e(386," (t-keydown)"),o(387,"br"),t()()(),i(388,"td",23)(389,"code",24),e(390,"EventEmitter"),t()(),i(391,"td",25),e(392,"-"),t(),i(393,"td",26)(394,"em")(395,"strong"),e(396,"(opcional)"),t()(),i(397,"p"),e(398,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no campo.
Retorna um objeto `),i(399,"code"),e(400,"KeyboardEvent"),t(),e(401," com informa\xE7\xF5es sobre a tecla."),t()()(),i(402,"tr",19)(403,"td",20)(404,"div",27)(405,"span",28),e(406,"t-keys-label"),o(407,"br"),t()()(),i(408,"td",23)(409,"code",42),e(410,"Array<ThfLookupDataKeysLabel>"),t()(),i(411,"td",25),e(412,"-"),t(),i(413,"td",26)(414,"em")(415,"strong"),e(416,"(opcional)"),t()(),i(417,"p"),e(418,"Permite definir at\xE9 3 propriedades do item selecionado que ficar\xE3o vis\xEDveis no "),i(419,"code"),e(420,"accordion"),t(),e(421,"."),t(),i(422,"pre")(423,"code",30),e(424,`<thf-lookup
 ...
 [t-keys-label]="keysLabel"
></thf-lookup>`),t()(),i(425,"pre")(426,"code",31),e(427,`keysLabel: Array<ThfLookupDataKeysLabel> = [
 { label: 'Nome', value: 'name' },
 { label: 'Email', value: 'email' }
];`),t()(),i(428,"pre")(429,"code"),e(430,`// sa\xEDda no campo:
Robert Bruce Banner-hulksmash@marvel.com`),t()()()(),i(431,"tr",19)(432,"td",20)(433,"div",27)(434,"span",28),e(435,"t-literals"),o(436,"br"),t()()(),i(437,"td",23)(438,"code",43),e(439,"ThfLookupDataLiterals"),t()(),i(440,"td",25),e(441,"-"),t(),i(442,"td",26)(443,"em")(444,"strong"),e(445,"(opcional)"),t()(),i(446,"p"),e(447,"Permite definir literais personalizados para o componente, conforme a interface "),i(448,"strong"),e(449,"ThfLookupDataLiterals"),t(),e(450,"."),t(),i(451,"pre")(452,"code",30),e(453,`// Exemplo de uso:
<thf-lookup
 ...
 [t-literals]="customLiterals"
></thf-lookup>`),t()(),i(454,"pre")(455,"code",31),e(456,"customLiterals: ThfLookupDataLiterals = { noData: 'Nenhum dado encontrado' };"),t()()()(),i(457,"tr",19)(458,"td",20)(459,"div",27)(460,"span",28),e(461,"t-multiple"),o(462,"br"),t()()(),i(463,"td",23)(464,"code",33),e(465,"boolean"),t()(),i(466,"td",25)(467,"p")(468,"code"),e(469,"false"),t()()(),i(470,"td",26)(471,"em")(472,"strong"),e(473,"(opcional)"),t()(),i(474,"p"),e(475,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(476,"blockquote")(477,"p"),e(478,"Quando habilitado, o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(479,"code"),e(480,"[ 12345, 67890 ]"),t()()()()(),i(481,"tr",19)(482,"td",20)(483,"div",21)(484,"span",22),e(485," (t-error)"),o(486,"br"),t()()(),i(487,"td",23)(488,"code",24),e(489,"EventEmitter"),t()(),i(490,"td",25),e(491,"-"),t(),i(492,"td",26)(493,"em")(494,"strong"),e(495,"(opcional)"),t()(),i(496,"p"),e(497,`Evento disparado quando ocorre algum erro na requisi\xE7\xE3o de busca.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(498,"tr",19)(499,"td",20)(500,"div",21)(501,"span",22),e(502," (t-selected)"),o(503,"br"),t()()(),i(504,"td",23)(505,"code",24),e(506,"EventEmitter"),t()(),i(507,"td",25),e(508,"-"),t(),i(509,"td",26)(510,"em")(511,"strong"),e(512,"(opcional)"),t()(),i(513,"p"),e(514,`Evento disparado ao selecionar um item.
Para sele\xE7\xE3o m\xFAltipla, retorna a lista de itens selecionados contendo os valores da coluna definida em `),i(515,"strong"),e(516,"t-field-value"),t(),e(517,`.
Para sele\xE7\xE3o \xFAnica retorna o objeto do item.`),t()()(),i(518,"tr",19)(519,"td",20)(520,"div",27)(521,"span",28),e(522," t-size"),o(523,"br"),t()()(),i(524,"td",23)(525,"code",34),e(526,"string"),t()(),i(527,"td",25)(528,"p")(529,"code"),e(530,"medium"),t()()(),i(531,"td",26)(532,"em")(533,"strong"),e(534,"(opcional)"),t()(),i(535,"p"),e(536,"Define o tamanho do componente:"),t(),i(537,"ul")(538,"li")(539,"code"),e(540,"small"),t()(),i(541,"li")(542,"code"),e(543,"medium"),t()()(),i(544,"blockquote")(545,"p"),e(546,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(547,"code"),e(548,"medium"),t(),e(549,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(550,"a",44),e(551,"po-theme"),t(),e(552,"."),t()()()()()()()(),D(553,2),t(),i(554,"po-tab",45),D(555,3),i(556,"po-container",5)(557,"po-accordion",6)(558,"po-accordion-item",46)(559,"h4",9)(560,"code"),e(561,"ThfLookupDataColumn"),t()(),i(562,"div",10)(563,"p"),e(564,"Interface para configura\xE7\xE3o das colunas ("),i(565,"strong"),e(566,"t-columns"),t(),e(567,"). "),t()(),i(568,"h4",15),e(569,"Propriedades"),t(),i(570,"table",16)(571,"tr",17)(572,"th",18),e(573,"Nome"),t(),i(574,"th",18),e(575,"Tipo"),t(),i(576,"th",18),e(577,"Descri\xE7\xE3o"),t()(),i(578,"tr",19)(579,"td",20)(580,"div",27)(581,"span",28),e(582," boolean"),o(583,"br"),t()()(),i(584,"td",23)(585,"code",47),e(586,"PoTableBoolean"),t()(),i(587,"td",26)(588,"em")(589,"strong"),e(590,"(opcional)"),t()(),i(591,"p"),e(592,"Define um objeto do tipo "),i(593,"code"),e(594,"PoTableBoolean"),t(),e(595," para as colunas do tipo "),i(596,"em"),e(597,"boolean"),t(),e(598,". Por exemplo:"),t(),i(599,"pre")(600,"code"),e(601,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(602,"blockquote")(603,"p"),e(604,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(605,"em"),e(606,"boolean"),t(),e(607,`,
esta exibir\xE1 por padr\xE3o `),i(608,"code"),e(609,"Sim"),t(),e(610," e "),i(611,"code"),e(612,"N\xE3o"),t(),e(613," de acordo com os valores "),i(614,"em"),e(615,"booleanos"),t(),e(616,"."),t()()()(),i(617,"tr",19)(618,"td",20)(619,"div",27)(620,"span",28),e(621," booleanFalse"),o(622,"br"),t()()(),i(623,"td",23)(624,"code",34),e(625,"string"),t()(),i(626,"td",26)(627,"em")(628,"strong"),e(629,"(opcional)"),t()(),i(630,"p"),e(631,"Texto exibido quando o valor da coluna for "),i(632,"em"),e(633,"false"),t(),e(634,"."),t()()(),i(635,"tr",19)(636,"td",20)(637,"div",27)(638,"span",28),e(639," booleanTrue"),o(640,"br"),t()()(),i(641,"td",23)(642,"code",34),e(643,"string"),t()(),i(644,"td",26)(645,"em")(646,"strong"),e(647,"(opcional)"),t()(),i(648,"p"),e(649,"Texto exibido quando o valor da coluna for "),i(650,"em"),e(651,"true"),t(),e(652,"."),t()()(),i(653,"tr",19)(654,"td",20)(655,"div",27)(656,"span",28),e(657," disabled"),o(658,"br"),t()()(),i(659,"td",23)(660,"code",48),e(661,"Function"),t()(),i(662,"td",26)(663,"em")(664,"strong"),e(665,"(opcional)"),t()(),i(666,"p"),e(667,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(668,"em"),e(669,"link"),t(),e(670," e sua a\xE7\xE3o."),t(),i(671,"blockquote")(672,"p"),e(673,"Propriedade dispon\xEDvel nas colunas do tipo "),i(674,"code"),e(675,"link"),t(),e(676,"."),t()()()(),i(677,"tr",19)(678,"td",20)(679,"div",27)(680,"span",28),e(681," format"),o(682,"br"),t()()(),i(683,"td",23)(684,"code",34),e(685,"string"),t()(),i(686,"td",26)(687,"em")(688,"strong"),e(689,"(opcional)"),t()(),i(690,"p"),e(691,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(692,"ul")(693,"li"),e(694,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(695,"li"),e(696,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(697,"tr",19)(698,"td",20)(699,"div",27)(700,"span",28),e(701," label"),o(702,"br"),t()()(),i(703,"td",23)(704,"code",34),e(705,"string"),t()(),i(706,"td",26)(707,"em")(708,"strong"),e(709,"(opcional)"),t()(),i(710,"p"),e(711,"Texto para t\xEDtulo da coluna."),t(),i(712,"p"),e(713,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(714,"em"),e(715,"label"),t(),e(716," o valor da propriedade "),i(717,"em"),e(718,"property"),t(),e(719," com a primeira letra em mai\xFAsculo."),t()()(),i(720,"tr",19)(721,"td",20)(722,"div",27)(723,"span",28),e(724," labels"),o(725,"br"),t()()(),i(726,"td",23)(727,"code",49),e(728,"Array<PoTableColumnLabel>"),t()(),i(729,"td",26)(730,"em")(731,"strong"),e(732,"(opcional)"),t()(),i(733,"p"),e(734,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(735,"code"),e(736,"PoTableColumnLabel"),t(),e(737," na qual devem ser definidas os labels. Por exemplo:"),t(),i(738,"pre")(739,"code"),e(740,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(741,"tr",19)(742,"td",20)(743,"div",27)(744,"span",28),e(745," locale"),o(746,"br"),t()()(),i(747,"td",23)(748,"code",34),e(749,"string"),t()(),i(750,"td",26)(751,"em")(752,"strong"),e(753,"(opcional)"),t()(),i(754,"p"),e(755,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(756,"a",50)(757,"code"),e(758,"I18n"),t()()(),i(759,"p"),e(760,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(761,"pre")(762,"code"),e(763,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},`),t()(),i(764,"blockquote")(765,"p"),e(766,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(767,"p"),e(768,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(769,"p"),e(770,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(771,"a",50)(772,"code"),e(773,"I18n"),t()()()(),i(774,"p"),e(775,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(776,"pre")(777,"code"),e(778,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}`),t()(),i(779,"blockquote")(780,"p"),e(781,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(782,"code"),e(783,"number"),t(),e(784," e "),i(785,"code"),e(786,"currency"),t(),e(787,"."),t()()()(),i(788,"tr",19)(789,"td",20)(790,"div",27)(791,"span",28),e(792," property"),o(793,"br"),t()()(),i(794,"td",23)(795,"code",34),e(796,"string"),t()(),i(797,"td",26)(798,"em")(799,"strong"),e(800,"(opcional)"),t()(),i(801,"p"),e(802,"Nome identificador da coluna."),t()()(),i(803,"tr",19)(804,"td",20)(805,"div",27)(806,"span",28),e(807," type"),o(808,"br"),t()()(),i(809,"td",23)(810,"code",34),e(811,"string"),t()(),i(812,"td",26)(813,"em")(814,"strong"),e(815,"(opcional)"),t()(),i(816,"p"),e(817,"Tipo da coluna:"),t(),i(818,"ul")(819,"li"),e(820,"string (padr\xE3o): textos"),t(),i(821,"li"),e(822,"number: valores num\xE9ricos"),t(),i(823,"li"),e(824,"date: data"),t(),i(825,"li"),e(826,"currency: valores monet\xE1rios"),t(),i(827,"li"),e(828,"dateTime: data e hora"),t()()()(),i(829,"tr",19)(830,"td",20)(831,"div",27)(832,"span",28),e(833," visible"),o(834,"br"),t()()(),i(835,"td",23)(836,"code",33),e(837,"boolean"),t()(),i(838,"td",26)(839,"em")(840,"strong"),e(841,"(opcional)"),t()(),i(842,"p"),e(843,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(844,"strong"),e(845,"gerenciador de colunas"),t(),e(846,"."),t(),i(847,"blockquote")(848,"p"),e(849,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(850,"code"),e(851,"p-max-columns"),t(),e(852,"."),t()()()(),i(853,"tr",19)(854,"td",20)(855,"div",27)(856,"span",28),e(857," width"),o(858,"br"),t()()(),i(859,"td",23)(860,"code",34),e(861,"string"),t()(),i(862,"td",26)(863,"em")(864,"strong"),e(865,"(opcional)"),t()(),i(866,"p"),e(867,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()()(),i(868,"po-accordion-item",51)(869,"h4",9)(870,"code"),e(871,"ThfLookupDataFilterSearchSelect"),t()(),i(872,"div",10)(873,"p"),e(874,"Interface que define as colunas para busca ("),i(875,"strong"),e(876,"t-filter-search-select"),t(),e(877,") "),t()(),i(878,"h4",15),e(879,"Propriedades"),t(),i(880,"table",16)(881,"tr",17)(882,"th",18),e(883,"Nome"),t(),i(884,"th",18),e(885,"Tipo"),t(),i(886,"th",18),e(887,"Descri\xE7\xE3o"),t()(),i(888,"tr",19)(889,"td",20)(890,"div",27)(891,"span",28),e(892," label"),o(893,"br"),t()()(),i(894,"td",23)(895,"code",34),e(896,"string"),t()(),i(897,"td",26)(898,"p"),e(899,"R\xF3tulo da coluna"),t()()(),i(900,"tr",19)(901,"td",20)(902,"div",27)(903,"span",28),e(904," value"),o(905,"br"),t()()(),i(906,"td",23)(907,"code",34),e(908,"string"),t()(),i(909,"td",26)(910,"p"),e(911,"Coluna"),t()()()()(),i(912,"po-accordion-item",52)(913,"h4",9)(914,"code"),e(915,"ThfLookupDataFilter"),t()(),i(916,"div",10)(917,"p"),e(918,"Interface para definir o tipo de busca via servi\xE7o. "),t()(),i(919,"table",53)(920,"tr",19)(921,"th",54)(922,"div",27)(923,"h4")(924,"span",28),e(925," fetchItems "),t()()()()(),i(926,"tr",26)(927,"td",26)(928,"p"),e(929,`M\xE9todo que ser\xE1 disparado ao digitar no campo do componente, deve-se retornar
um `),i(930,"em"),e(931,"Observable"),t(),e(932," com a resposta da API no formato { items: [] }."),t()()()(),i(933,"h5")(934,"b"),e(935,"Par\xE2metros"),t()(),i(936,"table",16)(937,"tr",17)(938,"th",18),e(939,"Nome"),t(),i(940,"th",18),e(941,"Tipo"),t(),i(942,"th",18),e(943,"Descri\xE7\xE3o"),t()(),i(944,"tr",19)(945,"td",20),e(946," query"),t(),i(947,"td",23)(948,"code",55),e(949," string "),t()(),i(950,"td",26)(951,"p"),e(952,"Par\xE2metro com o valor que est\xE1 sendo digitado no campo do lookup"),t()()(),i(953,"tr",19)(954,"td",20),e(955," filterParams"),t(),i(956,"td",23)(957,"code",55),e(958," any "),t()(),i(959,"td",26)(960,"p"),e(961,"Valor informado atrav\xE9s da propriedade "),i(962,"strong"),e(963,"t-filter-params"),t(),e(964,"."),t()()()(),o(965,"br"),i(966,"table",53)(967,"tr",19)(968,"th",54)(969,"div",27)(970,"h4")(971,"span",28),e(972," getFilteredItems "),t()()()()(),i(973,"tr",26)(974,"td",26)(975,"p"),e(976,`M\xE9todo que ser\xE1 disparado ao filtrar no grid ou carregar mais resultados no componente, deve-se retornar
um `),i(977,"em"),e(978,"Observable"),t(),e(979," com a resposta da API no formato da interface "),i(980,"strong"),e(981,"ThfLookupResponseApi"),t(),e(982,"."),t()()()(),i(983,"h5")(984,"b"),e(985,"Par\xE2metros"),t()(),i(986,"table",16)(987,"tr",17)(988,"th",18),e(989,"Nome"),t(),i(990,"th",18),e(991,"Tipo"),t(),i(992,"th",18),e(993,"Descri\xE7\xE3o"),t()(),i(994,"tr",19)(995,"td",20),e(996," params"),t(),i(997,"td",23)(998,"code",55),e(999," ThfLookupFilteredItemsParams "),t()(),i(1e3,"td",26)(1001,"p"),e(1002,"Objeto enviado por par\xE2metro que implementa a interface "),i(1003,"strong"),e(1004,"ThfLookupFilteredItemsParams"),t(),e(1005,"."),t()()()(),o(1006,"br"),i(1007,"table",53)(1008,"tr",19)(1009,"th",54)(1010,"div",27)(1011,"h4")(1012,"span",28),e(1013," getObjectByValue "),t()()()()(),i(1014,"tr",26)(1015,"td",26)(1016,"p"),e(1017,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(1018,"p"),e(1019,"Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o esteja habilitada, o par\xE2metro "),i(1020,"code"),e(1021,"value"),t(),e(1022,` ser\xE1 enviado como uma lista de valores
e o `),i(1023,"em"),e(1024,"Observable"),t(),e(1025," deve retornar uma lista de objetos."),t()()()(),i(1026,"h5")(1027,"b"),e(1028,"Par\xE2metros"),t()(),i(1029,"table",16)(1030,"tr",17)(1031,"th",18),e(1032,"Nome"),t(),i(1033,"th",18),e(1034,"Tipo"),t(),i(1035,"th",18),e(1036,"Descri\xE7\xE3o"),t()(),i(1037,"tr",19)(1038,"td",20),e(1039," value"),t(),i(1040,"td",23)(1041,"code",34),e(1042," string "),t(),i(1043,"code",32),e(1044," Array<any> "),t()(),i(1045,"td",26)(1046,"p"),e(1047,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(1048,"tr",19)(1049,"td",20),e(1050," filterParams"),t(),i(1051,"td",23)(1052,"code",55),e(1053," any "),t()(),i(1054,"td",26)(1055,"p"),e(1056,"Valor informado atrav\xE9s da propriedade "),i(1057,"strong"),e(1058,"t-filter-params"),t(),e(1059,"."),t()()()(),o(1060,"br"),t(),i(1061,"po-accordion-item",56)(1062,"h4",9)(1063,"code"),e(1064,"ThfLookupDataFilteredItemsParams"),t()(),i(1065,"div",10)(1066,"p"),e(1067,"Interface do objeto enviado como par\xE2metro do m\xE9todo privado "),i(1068,"strong"),e(1069,"getFilteredItems"),t(),e(1070,". "),t()(),i(1071,"h4",15),e(1072,"Propriedades"),t(),i(1073,"table",16)(1074,"tr",17)(1075,"th",18),e(1076,"Nome"),t(),i(1077,"th",18),e(1078,"Tipo"),t(),i(1079,"th",18),e(1080,"Descri\xE7\xE3o"),t()(),i(1081,"tr",19)(1082,"td",20)(1083,"div",27)(1084,"span",28),e(1085," filter"),o(1086,"br"),t()()(),i(1087,"td",23)(1088,"code",57),e(1089,`{ [key: string]: any;
}`),t()(),i(1090,"td",26)(1091,"em")(1092,"strong"),e(1093,"(opcional)"),t()(),i(1094,"p"),e(1095,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(1096,"tr",19)(1097,"td",20)(1098,"div",27)(1099,"span",28),e(1100," filterParams"),o(1101,"br"),t()()(),i(1102,"td",23)(1103,"code",35),e(1104,"any"),t()(),i(1105,"td",26)(1106,"em")(1107,"strong"),e(1108,"(opcional)"),t()(),i(1109,"p"),e(1110,"Valor informado atrav\xE9s da propriedade "),i(1111,"code"),e(1112,"t-filter-params"),t(),e(1113,"."),t()()(),i(1114,"tr",19)(1115,"td",20)(1116,"div",27)(1117,"span",28),e(1118," order"),o(1119,"br"),t()()(),i(1120,"td",23)(1121,"code",34),e(1122,"string"),t()(),i(1123,"td",26)(1124,"em")(1125,"strong"),e(1126,"(opcional)"),t()(),i(1127,"p"),e(1128,"Coluna que est\xE1 sendo ordenada na grid."),t(),i(1129,"ul")(1130,"li"),e(1131,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(1132,"code"),e(1133,"-<colunaOrdenada>"),t(),e(1134,", por exemplo "),i(1135,"code"),e(1136,"-name"),t(),e(1137,"."),t(),i(1138,"li"),e(1139,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(1140,"code"),e(1141,"<colunaOrdenada>"),t(),e(1142,", por exemplo "),i(1143,"code"),e(1144,"name"),t(),e(1145,"."),t()()()(),i(1146,"tr",19)(1147,"td",20)(1148,"div",27)(1149,"span",28),e(1150," page"),o(1151,"br"),t()()(),i(1152,"td",23)(1153,"code",41),e(1154,"number"),t()(),i(1155,"td",26)(1156,"em")(1157,"strong"),e(1158,"(opcional)"),t()(),i(1159,"p"),e(1160,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(1161,"tr",19)(1162,"td",20)(1163,"div",27)(1164,"span",28),e(1165," pageSize"),o(1166,"br"),t()()(),i(1167,"td",23)(1168,"code",41),e(1169,"number"),t()(),i(1170,"td",26)(1171,"em")(1172,"strong"),e(1173,"(opcional)"),t()(),i(1174,"p"),e(1175,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()()(),i(1176,"po-accordion-item",58)(1177,"h4",9)(1178,"code"),e(1179,"ThfLookupDataGridProperties"),t()(),i(1180,"div",10)(1181,"p"),e(1182,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup. "),t()(),i(1183,"h4",15),e(1184,"Propriedades"),t(),i(1185,"table",16)(1186,"tr",17)(1187,"th",18),e(1188,"Nome"),t(),i(1189,"th",18),e(1190,"Tipo"),t(),i(1191,"th",18),e(1192,"Descri\xE7\xE3o"),t()(),i(1193,"tr",19)(1194,"td",20)(1195,"div",27)(1196,"span",28),e(1197," autoSize"),o(1198,"br"),t()()(),i(1199,"td",23)(1200,"code",33),e(1201,"boolean"),t()(),i(1202,"td",26)(1203,"em")(1204,"strong"),e(1205,"(opcional)"),t()(),i(1206,"p"),e(1207,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(1208,"strong"),e(1209,"resizable"),t(),e(1210," esteja habilitada."),t(),i(1211,"blockquote")(1212,"p"),e(1213,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.`),t()()()(),i(1214,"tr",19)(1215,"td",20)(1216,"div",27)(1217,"span",28),e(1218," autoSizeOnScroll"),o(1219,"br"),t()()(),i(1220,"td",23)(1221,"code",33),e(1222,"boolean"),t()(),i(1223,"td",26)(1224,"em")(1225,"strong"),e(1226,"(opcional)"),t()(),i(1227,"p"),e(1228,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(1229,"p"),e(1230,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(1231,"p"),e(1232,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(1233,"code"),e(1234,"t-page-size-virtual"),t(),e(1235," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(1236,"blockquote")(1237,"p")(1238,"strong"),e(1239,"Pr\xE9-requisitos"),t(),e(1240,": Requer que as propriedades "),i(1241,"code"),e(1242,"autoSize"),t(),e(1243,", "),i(1244,"code"),e(1245,"resizable"),t(),e(1246,`
e `),i(1247,"code"),e(1248,"virtualScroll"),t(),e(1249," estejam habilitadas."),t()(),i(1250,"blockquote")(1251,"p")(1252,"strong"),e(1253,"Incompatibilidade"),t(),e(1254,": N\xE3o funciona com "),i(1255,"code"),e(1256,"t-grid-row-actions"),t(),e(1257," habilitado;"),t()(),i(1258,"p")(1259,"strong"),e(1260,"Exemplo de uso:"),t()(),i(1261,"pre")(1262,"code",30),e(1263,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>`),t()()()(),i(1264,"tr",19)(1265,"td",20)(1266,"div",27)(1267,"span",28),e(1268," draggable"),o(1269,"br"),t()()(),i(1270,"td",23)(1271,"code",33),e(1272,"boolean"),t()(),i(1273,"td",26)(1274,"em")(1275,"strong"),e(1276,"(opcional)"),t()(),i(1277,"p"),e(1278,"Habilita o Drag and Drop nas colunas."),t()()(),i(1279,"tr",19)(1280,"td",20)(1281,"div",27)(1282,"span",28),e(1283," group"),o(1284,"br"),t()()(),i(1285,"td",23)(1286,"code",59),e(1287,"Array<string>"),t()(),i(1288,"td",26)(1289,"em")(1290,"strong"),e(1291,"(opcional)"),t()(),i(1292,"p"),e(1293,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(1294,"strong"),e(1295,"groupable"),t(),e(1296," esteja habilitada."),t()()(),i(1297,"tr",19)(1298,"td",20)(1299,"div",27)(1300,"span",28),e(1301," groupable"),o(1302,"br"),t()()(),i(1303,"td",23)(1304,"code",33),e(1305,"boolean "),t(),i(1306,"code",60),e(1307," GroupableSettings"),t()(),i(1308,"td",26)(1309,"em")(1310,"strong"),e(1311,"(opcional)"),t()(),i(1312,"p"),e(1313,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(1314,"tr",19)(1315,"td",20)(1316,"div",27)(1317,"span",28),e(1318," hideSelectAll"),o(1319,"br"),t()()(),i(1320,"td",23)(1321,"code",33),e(1322,"boolean"),t()(),i(1323,"td",26)(1324,"em")(1325,"strong"),e(1326,"(opcional)"),t()(),i(1327,"p"),e(1328,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1329,"tr",19)(1330,"td",20)(1331,"div",27)(1332,"span",28),e(1333," resizable"),o(1334,"br"),t()()(),i(1335,"td",23)(1336,"code",33),e(1337,"boolean"),t()(),i(1338,"td",26)(1339,"em")(1340,"strong"),e(1341,"(opcional)"),t()(),i(1342,"p"),e(1343,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1344,"tr",19)(1345,"td",20)(1346,"div",27)(1347,"span",28),e(1348," selectableEntireLine"),o(1349,"br"),t()()(),i(1350,"td",23)(1351,"code",33),e(1352,"boolean"),t()(),i(1353,"td",26)(1354,"em")(1355,"strong"),e(1356,"(opcional)"),t()(),i(1357,"p"),e(1358,"Permite selecionar o item ao clicar na linha."),t()()(),i(1359,"tr",19)(1360,"td",20)(1361,"div",27)(1362,"span",28),e(1363," showDraggableIcon"),o(1364,"br"),t()()(),i(1365,"td",23)(1366,"code",33),e(1367,"boolean"),t()(),i(1368,"td",26)(1369,"em")(1370,"strong"),e(1371,"(opcional)"),t()(),i(1372,"p"),e(1373,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1374,"tr",19)(1375,"td",20)(1376,"div",27)(1377,"span",28),e(1378," showMoreDisabled"),o(1379,"br"),t()()(),i(1380,"td",23)(1381,"code",33),e(1382,"boolean"),t()(),i(1383,"td",26)(1384,"em")(1385,"strong"),e(1386,"(opcional)"),t()(),i(1387,"p"),e(1388,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1389,"tr",19)(1390,"td",20)(1391,"div",27)(1392,"span",28),e(1393," showMoreVisible"),o(1394,"br"),t()()(),i(1395,"td",23)(1396,"code",33),e(1397,"boolean"),t()(),i(1398,"td",26)(1399,"em")(1400,"strong"),e(1401,"(opcional)"),t()(),i(1402,"p"),e(1403,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(1404,"strong"),e(1405,"pageable"),t(),e(1406," esteja habilitada."),t(),i(1407,"blockquote")(1408,"p"),e(1409,"Caso seja utilizado em conjunto com "),i(1410,"strong"),e(1411,"showMoreDisabled"),t(),e(1412,", a propriedade "),i(1413,"strong"),e(1414,"showMoreVisible"),t(),e(1415," ter\xE1 prioridade."),t()()()(),i(1416,"tr",19)(1417,"td",20)(1418,"div",27)(1419,"span",28),e(1420," sort"),o(1421,"br"),t()()(),i(1422,"td",23)(1423,"code",61),e(1424,"Array<{ field: string; dir: 'asc' "),t(),i(1425,"code",62),e(1426,` 'desc';
}>`),t()(),i(1427,"td",26)(1428,"em")(1429,"strong"),e(1430,"(opcional)"),t()(),i(1431,"p"),e(1432,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(1433,"pre")(1434,"code",31),e(1435,"sort: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(1436,"tr",19)(1437,"td",20)(1438,"div",27)(1439,"span",28),e(1440," sortable"),o(1441,"br"),t()()(),i(1442,"td",23)(1443,"code",33),e(1444,"boolean"),t()(),i(1445,"td",26)(1446,"em")(1447,"strong"),e(1448,"(opcional)"),t()(),i(1449,"p"),e(1450,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(1451,"tr",19)(1452,"td",20)(1453,"div",27)(1454,"span",28),e(1455," spacing"),o(1456,"br"),t()()(),i(1457,"td",23)(1458,"code",63),e(1459,"'extraSmall' "),t(),i(1460,"code",64),e(1461," 'small' "),t(),i(1462,"code",65),e(1463," 'medium' "),t(),i(1464,"code",66),e(1465," 'large'"),t()(),i(1466,"td",26)(1467,"em")(1468,"strong"),e(1469,"(opcional)"),t()(),i(1470,"p"),e(1471,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(1472,"strong"),e(1473,"ThfColumnSpacing"),t(),e(1474,"."),t()()(),i(1475,"tr",19)(1476,"td",20)(1477,"div",27)(1478,"span",28),e(1479," striped"),o(1480,"br"),t()()(),i(1481,"td",23)(1482,"code",33),e(1483,"boolean"),t()(),i(1484,"td",26)(1485,"em")(1486,"strong"),e(1487,"(opcional)"),t()(),i(1488,"p"),e(1489,"Define o estilo listrado no grid (striped)."),t()()(),i(1490,"tr",19)(1491,"td",20)(1492,"div",27)(1493,"span",28),e(1494," virtualScroll"),o(1495,"br"),t()()(),i(1496,"td",23)(1497,"code",33),e(1498,"boolean"),t()(),i(1499,"td",26)(1500,"em")(1501,"strong"),e(1502,"(opcional)"),t()(),i(1503,"p"),e(1504,"Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados."),t()()()()(),i(1505,"po-accordion-item",67)(1506,"h4",9)(1507,"code"),e(1508,"ThfLookupDataKeysLabel"),t()(),i(1509,"div",10)(1510,"p"),e(1511,"Interface para definir as propriedades vis\xEDveis do item selecionado ("),i(1512,"strong"),e(1513,"t-keys-label"),t(),e(1514,"). "),t()(),i(1515,"h4",15),e(1516,"Propriedades"),t(),i(1517,"table",16)(1518,"tr",17)(1519,"th",18),e(1520,"Nome"),t(),i(1521,"th",18),e(1522,"Tipo"),t(),i(1523,"th",18),e(1524,"Descri\xE7\xE3o"),t()(),i(1525,"tr",19)(1526,"td",20)(1527,"div",27)(1528,"span",28),e(1529," label"),o(1530,"br"),t()()(),i(1531,"td",23)(1532,"code",34),e(1533,"string"),t()(),i(1534,"td",26)(1535,"p"),e(1536,"Texto exibido"),t()()(),i(1537,"tr",19)(1538,"td",20)(1539,"div",27)(1540,"span",28),e(1541," value"),o(1542,"br"),t()()(),i(1543,"td",23)(1544,"code",34),e(1545,"string"),t()(),i(1546,"td",26)(1547,"p"),e(1548,"Coluna"),t()()()()(),i(1549,"po-accordion-item",68)(1550,"h4",9)(1551,"code"),e(1552,"ThfLookupDataLiterals"),t()(),i(1553,"div",10)(1554,"p"),e(1555,"Interface para customizar literais ("),i(1556,"strong"),e(1557,"t-literals"),t(),e(1558,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(1559,"h4",15),e(1560,"Propriedades"),t(),i(1561,"table",16)(1562,"tr",17)(1563,"th",18),e(1564,"Nome"),t(),i(1565,"th",18),e(1566,"Tipo"),t(),i(1567,"th",18),e(1568,"Descri\xE7\xE3o"),t()(),i(1569,"tr",19)(1570,"td",20)(1571,"div",27)(1572,"span",28),e(1573," loadMoreData"),o(1574,"br"),t()()(),i(1575,"td",23)(1576,"code",34),e(1577,"string"),t()(),i(1578,"td",26)(1579,"em")(1580,"strong"),e(1581,"(opcional)"),t()(),i(1582,"p"),e(1583,"Label do "),i(1584,"code"),e(1585,"button"),t(),e(1586," que deve carregar mais resultados no grid, ou seja, exibir mais itens."),t()()(),i(1587,"tr",19)(1588,"td",20)(1589,"div",27)(1590,"span",28),e(1591," loadingData"),o(1592,"br"),t()()(),i(1593,"td",23)(1594,"code",34),e(1595,"string"),t()(),i(1596,"td",26)(1597,"em")(1598,"strong"),e(1599,"(opcional)"),t()(),i(1600,"p"),e(1601,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na grid."),t()()(),i(1602,"tr",19)(1603,"td",20)(1604,"div",27)(1605,"span",28),e(1606," multipleItems"),o(1607,"br"),t()()(),i(1608,"td",23)(1609,"code",34),e(1610,"string"),t()(),i(1611,"td",26)(1612,"em")(1613,"strong"),e(1614,"(opcional)"),t()(),i(1615,"p"),e(1616,"Frase exibida no accordion quando possui mais de um item selecionado."),t()()(),i(1617,"tr",19)(1618,"td",20)(1619,"div",27)(1620,"span",28),e(1621," noColumns"),o(1622,"br"),t()()(),i(1623,"td",23)(1624,"code",34),e(1625,"string"),t()(),i(1626,"td",26)(1627,"em")(1628,"strong"),e(1629,"(opcional)"),t()(),i(1630,"p"),e(1631,"Texto exibido quando n\xE3o existem colunas definidas no grid."),t()()(),i(1632,"tr",19)(1633,"td",20)(1634,"div",27)(1635,"span",28),e(1636," noData"),o(1637,"br"),t()()(),i(1638,"td",23)(1639,"code",34),e(1640,"string"),t()(),i(1641,"td",26)(1642,"em")(1643,"strong"),e(1644,"(opcional)"),t()(),i(1645,"p"),e(1646,"Texto exibido quando n\xE3o existem itens para serem exibidos no grid."),t()()(),i(1647,"tr",19)(1648,"td",20)(1649,"div",27)(1650,"span",28),e(1651," oneItem"),o(1652,"br"),t()()(),i(1653,"td",23)(1654,"code",34),e(1655,"string"),t()(),i(1656,"td",26)(1657,"em")(1658,"strong"),e(1659,"(opcional)"),t()(),i(1660,"p"),e(1661,"Frase exibida no accordion quando possui apenas um item selecionado."),t()()(),i(1662,"tr",19)(1663,"td",20)(1664,"div",27)(1665,"span",28),e(1666," placeholder"),o(1667,"br"),t()()(),i(1668,"td",23)(1669,"code",34),e(1670,"string"),t()(),i(1671,"td",26)(1672,"em")(1673,"strong"),e(1674,"(opcional)"),t()(),i(1675,"p"),e(1676,"Texto exibido no placeholder do input."),t()()()()(),i(1677,"po-accordion-item",69)(1678,"h4",9)(1679,"code"),e(1680,"ThfLookupDataResponseApi"),t()(),i(1681,"div",10)(1682,"p"),e(1683,"Interface que representa a estrutura de uma resposta de sucesso HTTP."),t(),i(1684,"blockquote")(1685,"p"),e(1686,"Utilizada apenas quando a resposta incluir uma cole\xE7\xE3o de itens. "),t()()(),i(1687,"h4",15),e(1688,"Propriedades"),t(),i(1689,"table",16)(1690,"tr",17)(1691,"th",18),e(1692,"Nome"),t(),i(1693,"th",18),e(1694,"Tipo"),t(),i(1695,"th",18),e(1696,"Descri\xE7\xE3o"),t()(),i(1697,"tr",19)(1698,"td",20)(1699,"div",27)(1700,"span",28),e(1701," hasNext"),o(1702,"br"),t()()(),i(1703,"td",23)(1704,"code",33),e(1705,"boolean"),t()(),i(1706,"td",26)(1707,"p"),e(1708,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(1709,"tr",19)(1710,"td",20)(1711,"div",27)(1712,"span",28),e(1713," items"),o(1714,"br"),t()()(),i(1715,"td",23)(1716,"code",32),e(1717,"Array<any>"),t()(),i(1718,"td",26)(1719,"p"),e(1720,"Lista de itens retornados."),t()()()()()()(),D(1721,4),t(),i(1722,"po-tab",70)(1723,"po-container",5),D(1724,5),i(1725,"h3",71),e(1726,"Tokens customiz\xE1veis"),t(),i(1727,"p"),e(1728,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(1729,"blockquote")(1730,"p"),e(1731,"Para maiores informa\xE7\xF5es, acesse o guia "),i(1732,"a",72),e(1733,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(1734,"."),t()(),i(1735,"p"),e(1736,"O componente "),i(1737,"strong"),e(1738,"THF-Lookup-Data"),t(),e(1739," \xE9 composto pelos componentes "),i(1740,"strong"),e(1741,"PO-Search"),t(),e(1742," e "),i(1743,"strong"),e(1744,"THF-Grid"),t(),e(1745,"."),t(),i(1746,"p"),e(1747,"Verifique os tokens dispon\xEDveis para customiza\xE7\xE3o em:"),t(),i(1748,"p")(1749,"strong"),e(1750,"- PO-Search:"),t(),e(1751," \xA0"),i(1752,"a",73),e(1753,"https://po-ui.io/documentation/po-search"),t()(),i(1754,"p")(1755,"strong"),e(1756,"- THF-Grid:"),t(),e(1757," \xA0"),i(1758,"a",74),e(1759,"https://thf.totvs.app/v19/documentation/thf-grid"),t()()(),D(1760,6),t(),i(1761,"po-tab",75),D(1762,7),t()()())},dependencies:[z,$,y,te,N],encapsulation:2});let d=l;return d})();var Ii=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","labs",""]]],Li=["[overview]","[especificacao-before]","[especificacao-after]","[labs]"],_t=(()=>{let l=class l{constructor(r){this.el=r}ngAfterViewInit(){this.accordions.forEach(r=>{setTimeout(()=>{r.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(r){setTimeout(()=>{let n=this.tabs.tabs.find(a=>a.elementRef.nativeElement.className===`docs-tab-${r}`);if(n){let a=n.elementRef.nativeElement;a.textContent.trim()!==""||a.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(S=>{let C=S.querySelector(".po-tab-button-label");C&&C?.textContent?.trim().toLowerCase()===r&&S.remove()}),a.remove(),n.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(S=>!S.hide)))}},100)}};l.\u0275fac=function(n){return new(n||l)(R(X))},l.\u0275cmp=b({type:l,selectors:[["api-thf-splitter-pane"]],viewQuery:function(n,a){if(n&1&&(A(N,5),A(z,5)),n&2){let s;q(s=k())&&(a.tabs=s.first),q(s=k())&&(a.accordions=s)}},standalone:!1,ngContentSelectors:Li,decls:140,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["p-label","Labs",1,"docs-tab-labs"]],template:function(n,a){n&1&&(Y(Ii),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),D(4),t(),i(5,"po-tab",4),D(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterPaneComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter-pane"),t(),e(21," representa uma das se\xE7\xF5es que comp\xF5em o "),i(22,"code"),e(23,"thf-splitter"),t(),e(24,"."),t(),i(25,"p"),e(26,"Devem ser utilizados "),i(27,"strong"),e(28,"exatamente dois panes"),t(),e(29," por splitter; panes adicionais ser\xE3o ignorados."),t(),i(30,"p"),e(31,"Cada "),i(32,"code"),e(33,"pane"),t(),e(34," se ajusta dinamicamente conforme o redimensionamento."),t(),i(35,"pre")(36,"code",11),e(37,`<thf-splitter>
 <thf-splitter-pane [(t-size)]="50%">
   Conte\xFAdo do painel
 </thf-splitter-pane>
 ...
</thf-splitter>`),t()()(),i(38,"div",12)(39,"h4",13),e(40,"Seletor"),t(),i(41,"pre",14),e(42,`<thf-splitter-pane
  t-scrollable="boolean, any"
  t-size="string"
  (t-size-change)="EventEmitter" >
</thf-splitter-pane>
`),t()()(),i(43,"po-accordion-item",15)(44,"h4",16),e(45,"Propriedades"),t(),i(46,"table",17)(47,"tr",18)(48,"th",19),e(49,"Nome"),t(),i(50,"th",19),e(51,"Tipo"),t(),i(52,"th",19),e(53,"Padr\xE3o"),t(),i(54,"th",19),e(55,"Descri\xE7\xE3o"),t()(),i(56,"tr",20)(57,"td",21)(58,"div",22)(59,"span",23),e(60," t-scrollable"),o(61,"br"),t()()(),i(62,"td",24)(63,"code",25),e(64,"boolean, any"),t()(),i(65,"td",26)(66,"p"),e(67,"false"),t()(),i(68,"td",27)(69,"p"),e(70,`Habilita a rolagem horizontal/vertical do pane quando o conte\xFAdo exceder o valor de tamanho definido. A rolagem \xE9 aplicada
somente se o tamanho m\xEDnimo for atingido durante o redimensionamento.`),t()()(),i(71,"tr",20)(72,"td",21)(73,"div",22)(74,"span",23),e(75," t-size"),o(76,"br"),t()()(),i(77,"td",24)(78,"code",28),e(79,"string"),t()(),i(80,"td",26),e(81,"-"),t(),i(82,"td",27)(83,"p"),e(84,"Define o tamanho inicial do pane (% ou px), respeitando os limites entre "),i(85,"strong"),e(86,"30% e 70%"),t(),e(87,` do tamanho total
do splitter.`),t(),i(88,"p"),e(89,"Suporta two-way binding com "),i(90,"code"),e(91,"t-size-change"),t(),e(92,"."),t(),i(93,"blockquote")(94,"p"),e(95,"Apenas um pane pode definir "),i(96,"code"),e(97,"t-size"),t(),e(98,`; caso contr\xE1rio, ser\xE1 exibido um erro no console.
Quando o valor definido em `),i(99,"code"),e(100,"px"),t(),e(101,` estiver fora dos limites percentuais, ao realizar o redimensionamento os limites de 30% a 70% ser\xE3o aplicados automaticamente.
O uso de `),i(102,"code"),e(103,"px"),t(),e(104," \xE9 \xFAtil para cen\xE1rios onde o "),i(105,"code"),e(106,"thf-splitter"),t(),e(107," est\xE1 com "),i(108,"code"),e(109,"t-disabled"),t(),e(110," habilitado, pois o tamanho fixo n\xE3o ser\xE1 alterado."),t()(),i(111,"pre")(112,"code",11),e(113,`<!-- One-way -->
<thf-splitter-pane [t-size]="'50%'">

<!-- Two-way -->
<thf-splitter-pane [(t-size)]="variavel">`),t()()()(),i(114,"tr",20)(115,"td",21)(116,"div",29)(117,"span",30),e(118," (t-size-change)"),o(119,"br"),t()()(),i(120,"td",24)(121,"code",31),e(122,"EventEmitter"),t()(),i(123,"td",26),e(124,"-"),t(),i(125,"td",27)(126,"p"),e(127,"Evento emitido quando o tamanho do pane que possui "),i(128,"code"),e(129,"t-size"),t(),e(130," \xE9 modificada. Caso nenhum pane possua "),i(131,"code"),e(132,"t-size"),t(),e(133,`, o
evento n\xE3o ser\xE1 disparado.`),t(),i(134,"pre")(135,"code",11),e(136,'<thf-splitter-pane (t-size-change)="onSizeChange($event)">'),t()()()()()()()(),D(137,2),t(),i(138,"po-tab",32),D(139,3),t()()())},dependencies:[z,$,y,te,N],encapsulation:2});let d=l;return d})();var Ri=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Vi=["[overview]","[especificacao-before]","[especificacao-after]","[enums-before]","[enums-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],Ft=(()=>{let l=class l{constructor(r){this.el=r}ngAfterViewInit(){this.accordions.forEach(r=>{setTimeout(()=>{r.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(r){setTimeout(()=>{let n=this.tabs.tabs.find(a=>a.elementRef.nativeElement.className===`docs-tab-${r}`);if(n){let a=n.elementRef.nativeElement;a.textContent.trim()!==""||a.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(S=>{let C=S.querySelector(".po-tab-button-label");C&&C?.textContent?.trim().toLowerCase()===r&&S.remove()}),a.remove(),n.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(S=>!S.hide)))}},100)}};l.\u0275fac=function(n){return new(n||l)(R(X))},l.\u0275cmp=b({type:l,selectors:[["api-thf-splitter"]],viewQuery:function(n,a){if(n&1&&(A(N,5),A(z,5)),n&2){let s;q(s=k())&&(a.tabs=s.first),q(s=k())&&(a.accordions=s)}},standalone:!1,ngContentSelectors:Vi,decls:326,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],["id","boas-pr\xE1ticas"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ThfSplitterOrientation,","string"],[1,"language-typescript"],["p-label","Enums"],["p-label","ThfSplitterOrientation"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(n,a){n&1&&(Y(Ri),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),D(4),t(),i(5,"po-tab",4),D(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter"),t(),e(21,` \xE9 respons\xE1vel por dividir visualmente a tela em duas se\xE7\xF5es, com suporte a
redimensionamento entre elas. \xC9 ideal para estruturar interfaces com pain\xE9is laterais e conte\xFAdos principais de forma
flex\xEDvel.`),t(),i(22,"p"),e(23,"O redimensionamento \xE9 realizado por meio de um "),i(24,"em"),e(25,"trigger"),t(),e(26,` interativo, que pode ser manipulado com o mouse ou pelo
teclado, utilizando as teclas `),i(27,"code"),e(28,"\u2190"),t(),e(29," e "),i(30,"code"),e(31,"\u2192"),t(),e(32," na orienta\xE7\xE3o "),i(33,"code"),e(34,"horizontal"),t(),e(35,", e "),i(36,"code"),e(37,"\u2191"),t(),e(38," e "),i(39,"code"),e(40,"\u2193"),t(),e(41," na orienta\xE7\xE3o "),i(42,"code"),e(43,"vertical"),t(),e(44,". O "),i(45,"em"),e(46,"trigger"),t(),e(47," recebe foco ao navegar com "),i(48,"code"),e(49,"TAB"),t(),e(50,"."),t(),i(51,"p"),e(52,"Cada "),i(53,"code"),e(54,"pane"),t(),e(55," respeita limites de largura entre "),i(56,"strong"),e(57,"30% e 70%"),t(),e(58,". O "),i(59,"em"),e(60,"trigger"),t(),e(61,` ser\xE1 automaticamente bloqueado ao tentar
ultrapassar esses limites.`),t(),i(62,"h4",11),e(63,"Boas pr\xE1ticas"),t(),i(64,"ul")(65,"li"),e(66,"Evite usar o "),i(67,"code"),e(68,"thf-splitter"),t(),e(69," dentro de um modal ou componentes semelhantes que possam comprometer a usabilidade."),t()(),i(70,"pre")(71,"code",12),e(72,`<thf-splitter>
  <thf-splitter-pane [t-size]="'30%'">
    Conte\xFAdo do Painel Esquerdo
  </thf-splitter-pane>
  <thf-splitter-pane>
    Conte\xFAdo do Painel Direito (ocupa espa\xE7o restante)
  </thf-splitter-pane>
</thf-splitter>`),t()()(),i(73,"div",13)(74,"h4",14),e(75,"Seletor"),t(),i(76,"pre",15),e(77,`<thf-splitter
  t-disabled="boolean, any"
  (t-layout-change)="EventEmitter"
  t-orientation="ThfSplitterOrientation, string" >
</thf-splitter>
`),t()()(),i(78,"po-accordion-item",16)(79,"h4",17),e(80,"Propriedades"),t(),i(81,"table",18)(82,"tr",19)(83,"th",20),e(84,"Nome"),t(),i(85,"th",20),e(86,"Tipo"),t(),i(87,"th",20),e(88,"Padr\xE3o"),t(),i(89,"th",20),e(90,"Descri\xE7\xE3o"),t()(),i(91,"tr",21)(92,"td",22)(93,"div",23)(94,"span",24),e(95," t-disabled"),o(96,"br"),t()()(),i(97,"td",25)(98,"code",26),e(99,"boolean, any"),t()(),i(100,"td",27)(101,"p"),e(102,"false"),t()(),i(103,"td",28)(104,"p"),e(105,"Desabilita o redimensionamento entre os panes, ocultando a intera\xE7\xE3o via trigger."),t()()(),i(106,"tr",21)(107,"td",22)(108,"div",29)(109,"span",30),e(110," (t-layout-change)"),o(111,"br"),t()()(),i(112,"td",25)(113,"code",31),e(114,"EventEmitter"),t()(),i(115,"td",27),e(116,"-"),t(),i(117,"td",28)(118,"p"),e(119,"Evento emitido sempre que houver altera\xE7\xE3o de layout provocada por redimensionamento. Quando "),i(120,"code"),e(121,"t-disabled"),t(),e(122,` estiver
ativado, este evento n\xE3o ser\xE1 disparado.`),t(),i(123,"pre")(124,"code",12),e(125,'<thf-splitter (t-layout-change)="onLayoutChange($event)">'),t()()()(),i(126,"tr",21)(127,"td",22)(128,"div",23)(129,"span",24),e(130," t-orientation"),o(131,"br"),t()()(),i(132,"td",25)(133,"code",32),e(134,"ThfSplitterOrientation, string"),t()(),i(135,"td",27)(136,"p"),e(137,"'horizontal'"),t()(),i(138,"td",28)(139,"p"),e(140,`Define a orienta\xE7\xE3o dos pain\xE9is do splitter.
Valores aceitos: `),i(141,"code"),e(142,"'horizontal'"),t(),e(143," ou "),i(144,"code"),e(145,"'vertical'"),t(),e(146,"."),t(),i(147,"pre")(148,"code",12),e(149,'<thf-splitter t-orientation="vertical"> ...'),t()(),i(150,"p"),e(151,"ou"),t(),i(152,"pre")(153,"code",33),e(154,"orientation = ThfSplitterOrientation.Vertical;"),t()(),i(155,"pre")(156,"code",12),e(157,'<thf-splitter [t-orientation]="orientation"> ...'),t()()()()()()()(),D(158,2),t(),i(159,"po-tab",34),D(160,3),i(161,"po-container",5)(162,"po-accordion",6)(163,"po-accordion-item",35)(164,"h4",9)(165,"code"),e(166,"ThfSplitterOrientation"),t()(),i(167,"h4",17),e(168,"Propriedades"),t(),i(169,"table",18)(170,"tr",19)(171,"th",20),e(172,"Nome"),t(),i(173,"th",20),e(174,"Descri\xE7\xE3o"),t()(),i(175,"tr",21)(176,"td",22)(177,"div",23)(178,"span",24),e(179," Horizontal"),o(180,"br"),t()()(),i(181,"td",28)(182,"p"),e(183,"Divide o espa\xE7o na "),i(184,"strong"),e(185,"horizontal"),t(),e(186," (esquerda/direita)"),t()()(),i(187,"tr",21)(188,"td",22)(189,"div",23)(190,"span",24),e(191," Vertical"),o(192,"br"),t()()(),i(193,"td",28)(194,"p"),e(195,"Divide o espa\xE7o na "),i(196,"strong"),e(197,"vertical"),t(),e(198," (cima/baixo)"),t()()()()()()(),D(199,4),t(),i(200,"po-tab",36)(201,"po-container",5),D(202,5),i(203,"h3",37),e(204,"Tokens customiz\xE1veis"),t(),i(205,"p"),e(206,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(207,"blockquote")(208,"p"),e(209,"Para maiores informa\xE7\xF5es, acesse o guia "),i(210,"a",38),e(211,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(212,"."),t()(),i(213,"table")(214,"thead")(215,"tr")(216,"th"),e(217,"Propriedade"),t(),i(218,"th"),e(219,"Descri\xE7\xE3o"),t(),i(220,"th"),e(221,"Valor Padr\xE3o"),t()()(),i(222,"tbody")(223,"tr")(224,"td")(225,"strong"),e(226,"Splitter Track"),t()(),o(227,"td")(228,"td"),t(),i(229,"tr")(230,"td")(231,"code"),e(232,"--background-track"),t()(),i(233,"td"),e(234,"Cor de background do Track apresentado no Splitter"),t(),i(235,"td")(236,"code"),e(237,"var(--color-neutral-light-10)"),t()()(),i(238,"tr"),o(239,"td")(240,"td")(241,"td"),t(),i(242,"tr")(243,"td")(244,"strong"),e(245,"Splitter Trigger"),t()(),o(246,"td")(247,"td"),t(),i(248,"tr")(249,"td")(250,"code"),e(251,"--box-shadow"),t()(),i(252,"td"),e(253,"Sombra aplicado no bot\xE3o do trigger"),t(),i(254,"td")(255,"code"),e(256,"var(--shadow-sm)"),t()()(),i(257,"tr")(258,"td")(259,"code"),e(260,"--background-color"),t()(),i(261,"td"),e(262,"Cor de background"),t(),i(263,"td")(264,"code"),e(265,"var(--color-neutral-light-00)"),t()()(),i(266,"tr")(267,"td")(268,"code"),e(269,"--color"),t()(),i(270,"td"),e(271,"Cor do \xEDcone"),t(),i(272,"td")(273,"code"),e(274,"var(--color-action-default)"),t()()(),i(275,"tr")(276,"td")(277,"strong"),e(278,"Hover"),t()(),o(279,"td")(280,"td"),t(),i(281,"tr")(282,"td")(283,"code"),e(284,"--background-color-hover"),t()(),i(285,"td"),e(286,"Cor de background no estado hover"),t(),i(287,"td")(288,"code"),e(289,"var(--color-brand-01-lighter)"),t()()(),i(290,"tr")(291,"td")(292,"code"),e(293,"--color-hover"),t()(),i(294,"td"),e(295,"Cor do \xEDcone no estado hover"),t(),i(296,"td")(297,"code"),e(298,"var(--color-brand-01-darkest)"),t()()(),i(299,"tr")(300,"td")(301,"strong"),e(302,"Pressed"),t()(),o(303,"td")(304,"td"),t(),i(305,"tr")(306,"td")(307,"code"),e(308,"--background-color-pressed"),t()(),i(309,"td"),e(310,"Cor de background quando pressionada"),t(),i(311,"td")(312,"code"),e(313,"var(--color-brand-01-ligh)"),t()()(),i(314,"tr")(315,"td")(316,"code"),e(317,"--color-pressed"),t()(),i(318,"td"),e(319,"Cor de \xEDcone quando pressionado"),t(),i(320,"td")(321,"code"),e(322,"var(--color-brand-01-darkest)"),t()()()()()(),D(323,6),t(),i(324,"po-tab",39),D(325,7),t()()())},dependencies:[z,$,y,te,N],encapsulation:2});let d=l;return d})();var It=(()=>{let l=class l{};l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=Ee({type:l}),l.\u0275inj=ue({imports:[we,Le]});let d=l;return d})();var ze=[{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:!1,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America"},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:!1,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps"},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:!1,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:!1,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:!0,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48998,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:!1,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:!1,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:!1,airline:"Aero M\xE9xico",status:"available",region:"Latin America"},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:!0,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:!1,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:!0,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:!0,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:!1,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:!0,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:!1,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:!1,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:!0,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:!1,airline:"LATAM",status:"reserved",region:"Latin America"}],Lt=`export const DATA = ${JSON.stringify(ze,null,2)};`;function ji(d,l){}function Oi(d,l){d&1&&G(0,ji,0,0,"ng-template")}function Gi(d,l){if(d&1&&(i(0,"po-accordion-item",7),G(1,Oi,1,0,null,8),t()),d&2){let m=x();p(),c("ngTemplateOutlet",m.dynamicTemplate)}}function Ni(d,l){if(d&1&&o(0,"po-code-editor",9),d&2){let m=x();c("p-readonly",!0)("ngModel",m.htmlCode)("p-theme",m.themeActive===1?"vs-dark":"vs")}}function Qi(d,l){if(d&1&&o(0,"po-code-editor",10),d&2){let m=x();c("p-readonly",!0)("p-theme",m.themeActive===1?"vs-dark":"vs")("ngModel",m.tsCode)}}function Bi(d,l){if(d&1&&o(0,"po-code-editor",10),d&2){let m=x();c("p-readonly",!0)("p-theme",m.themeActive===1?"vs-dark":"vs")("ngModel",m.serviceCode)}}function Hi(d,l){if(d&1&&o(0,"po-code-editor",10),d&2){let m=x();c("p-readonly",!0)("p-theme",m.themeActive===1?"vs-dark":"vs")("ngModel",m.othersCode==null?null:m.othersCode.body)}}var w=(()=>{let l=class l{constructor(r){this.sharedService=r,this.htmlCode="",this.marginTopClass="po-mt-3",this.properties=!1,this.serviceCode="",this.showOthersCodeButton=!1,this.showServiceButton=!1,this.tsCode="",this.buttons=[],this.selectedCode="html"}ngOnInit(){this.buttons=[{label:"HTML",selected:!0,action:()=>this.selectedCode="html"},{label:"TS",action:()=>this.selectedCode="ts"}],this.showServiceButton&&this.buttons.push({label:"Service",action:()=>this.selectedCode="service"}),this.showOthersCodeButton&&this.buttons.push({label:this.othersCode.label,action:()=>this.selectedCode="othersCode"}),this.sharedService.getThemeActive().subscribe(r=>{this.themeActive=r.type||0})}};l.\u0275fac=function(n){return new(n||l)(R(Pt))},l.\u0275cmp=b({type:l,selectors:[["app-code-accordion-doc"]],inputs:{dynamicTemplate:"dynamicTemplate",htmlCode:"htmlCode",marginTopClass:"marginTopClass",othersCode:"othersCode",properties:"properties",serviceCode:"serviceCode",showOthersCodeButton:"showOthersCodeButton",showServiceButton:"showServiceButton",tsCode:"tsCode"},standalone:!1,decls:10,vars:8,consts:[[3,"ngClass"],["p-label","Propriedades",4,"ngIf"],["p-label","Fontes"],[1,"po-pt-1"],["p-toggle","single","ngDefaultControl","",3,"ngModelChange","p-buttons","ngModel"],["class","po-pt-2","p-height","350","p-language","html","ngDefaultControl","",3,"p-readonly","ngModel","p-theme",4,"ngIf"],["class","po-pt-2","p-height","350","p-language","typescript","ngDefaultControl","",3,"p-readonly","p-theme","ngModel",4,"ngIf"],["p-label","Propriedades"],[4,"ngTemplateOutlet"],["p-height","350","p-language","html","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","ngModel","p-theme"],["p-height","350","p-language","typescript","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","p-theme","ngModel"]],template:function(n,a){n&1&&(i(0,"div",0)(1,"po-accordion"),G(2,Gi,2,1,"po-accordion-item",1),i(3,"po-accordion-item",2)(4,"div",3)(5,"po-button-group",4),g("ngModelChange",function(S){return v(a.selectedCode,S)||(a.selectedCode=S),S}),t(),G(6,Ni,1,3,"po-code-editor",5)(7,Qi,1,3,"po-code-editor",6)(8,Bi,1,3,"po-code-editor",6)(9,Hi,1,3,"po-code-editor",6),t()()()()),n&2&&(c("ngClass",a.marginTopClass),p(2),c("ngIf",a.properties),p(3),c("p-buttons",a.buttons),f("ngModel",a.selectedCode),p(),c("ngIf",a.selectedCode==="html"),p(),c("ngIf",a.selectedCode==="ts"),p(),c("ngIf",a.selectedCode==="service"),p(),c("ngIf",a.selectedCode==="othersCode"))},dependencies:[rt,he,dt,pt,B,K,z,$,ft,xt],encapsulation:2});let d=l;return d})();var Mt=(()=>{let l=class l{constructor(){this.htmlCode=`<thf-grid
    [t-actions-filter]="true"
    [t-columns]="columnsTotalizador"
    [t-resizable]="true"
    [t-groupable]="true"
    [t-draggable]="true"
    [t-items]="itemsTotalizador"
    [t-selectable]="true"
    [t-show-densification-configuration]="true"
    [t-aggregates]="aggregatesDescriptor"
    [t-show-footer-aggregates]="true"
    [t-height]="450"
  />
  `,this.tsCode=`import { Component } from '@angular/core';
import { ThfAggregateDescriptor, ThfGridColumn } from '@totvs/thf-components';
import { DATA, DATA_STRING } from './data';
  
@Component({
  selector: 'app-thf-grid-aggregates-doc',
  templateUrl: './thf-grid-aggregates-doc.component.html',
  styleUrl: './thf-grid-aggregates-doc.component.css',
})
export class ThfGridAggregateDocComponent {
  columnsTotalizador: Array<ThfGridColumn> = [
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'available', color: 'color-11', label: 'Available' },
        { value: 'reserved', color: 'color-08', label: 'Reserved' },
        { value: 'closed', color: 'color-07', label: 'Closed' },
      ],
    },
    { property: 'region', label: 'Region' },
    { property: 'country', label: 'Country' },
    { property: 'destination', label: 'Destination' },
    { property: 'value', type: 'currency', label: 'Value', format: 'BRL' },
  ];

  aggregatesDescriptor: Array<ThfAggregateDescriptor> = [
    { field: 'value', aggregate: 'sum', label: 'Totalx' },
    { field: 'country', aggregate: 'count', label: 'Contagem' },
  ];
  itemsTotalizador = DATA;
}
  `,this.tsOthersCode={label:"Data",body:Lt},this.columnsTotalizador=[{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}]},{property:"region",label:"Region"},{property:"country",label:"Country"},{property:"destination",label:"Destination"},{property:"value",type:"currency",label:"Value",format:"BRL"}],this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"country",aggregate:"count",label:"Contagem"}],this.itemsTotalizador=ze}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-aggregates-doc"]],standalone:!1,decls:6,vars:15,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-actions-filter","t-columns","t-resizable","t-groupable","t-draggable","t-items","t-selectable","t-show-densification-configuration","t-aggregates","t-show-footer-aggregates","t-height"],[3,"htmlCode","tsCode","othersCode","showOthersCodeButton"]],template:function(n,a){n&1&&(i(0,"po-container")(1,"span",0),e(2,"Totalizador por Colunas"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),n&2&&(p(4),c("t-actions-filter",!0)("t-columns",a.columnsTotalizador)("t-resizable",!0)("t-groupable",!0)("t-draggable",!0)("t-items",a.itemsTotalizador)("t-selectable",!0)("t-show-densification-configuration",!0)("t-aggregates",a.aggregatesDescriptor)("t-show-footer-aggregates",!0)("t-height",450),p(),c("htmlCode",a.htmlCode)("tsCode",a.tsCode)("othersCode",a.tsOthersCode)("showOthersCodeButton",!0))},dependencies:[y,P,M,w],encapsulation:2});let d=l;return d})();var Rt=(()=>{let l=class l{constructor(){this.htmlCode=`<thf-grid
  t-service-api="https://po-sample-api.onrender.com/v1/heroes"
  [t-columns]="column"
  [t-height]="400"
/>
  `,this.tsCode=`import { Component } from '@angular/core';
import { ThfGridColumn } from '@totvs/thf-components';
  
@Component({
  selector: 'app-thf-grid-basic-doc',
  templateUrl: './thf-grid-basic-doc.component.html',
  styleUrl: './thf-grid-basic-doc.component.css',
})
export class ThfGridBasicDocComponent {
  column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', visible: false },
    { property: 'label', label: 'Label', visible: false },
    { property: 'value', label: 'Code' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail', width: 100 },
  ];
}
  `,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"value",label:"Code"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-basic-doc"]],standalone:!1,decls:6,vars:4,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/heroes",3,"t-columns","t-height"],[3,"htmlCode","tsCode"]],template:function(n,a){n&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Service"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),n&2&&(p(4),c("t-columns",a.column)("t-height",400),p(),c("htmlCode",a.htmlCode)("tsCode",a.tsCode))},dependencies:[y,P,M,w],encapsulation:2});let d=l;return d})();var Re=(()=>{let l=class l{constructor(r){this.httpClient=r}deleteItem(r,n,a){return this.httpClient.delete("https://po-sample-api.onrender.com/v1/people"+"/"+a)}};l.\u0275fac=function(n){return new(n||l)(He(st))},l.\u0275prov=Be({token:l,factory:l.\u0275fac,providedIn:"root"});let d=l;return d})();var Vt=(()=>{let l=class l{constructor(r){this.serviceDeleteApi=r,this.htmlCode=`<thf-grid
    t-service-api="https://po-sample-api.onrender.com/v1/people"
    [t-action-delete]="true"
    [t-columns]="column"
    [t-height]="400"
    [t-literals]="literals"
    [t-selectable]="true"
    [t-service-delete-api]="serviceDeleteApi"
    (t-selected)="selectedItem($event)"
  />
  `,this.tsCode=`import { Component } from '@angular/core';
import { ThfGridColumn, ThfGridLiterals } from '@totvs/thf-components';
import { ThfDeleteService } from './thf-grid-delete-service-doc.service';
  
@Component({
  selector: 'app-thf-grid-delete-service-doc',
  templateUrl: './thf-grid-delete-service-doc.component.html',
  styleUrl: './thf-grid-delete-service-doc.component.css',
  providers: [ThfDeleteService],
})
export class ThfGridDeleteServiceDocComponent {
  literals!: ThfGridLiterals;
  column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', visible: false },
    { property: 'label', label: 'Label', visible: false },
    { property: 'name', label: 'Nome' },
    { property: 'cityName', label: 'Cidade' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail', width: 100 },
  ];

  constructor(protected serviceDeleteApi: ThfDeleteService) {}

  selectedItem(event: any) {
    this.literals = {
      bodyDelete: \`Tem certeza que deseja excluir \${event.name}?\`,
    };
  }
}
  `,this.serviceCode=`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThfGridDeleteService } from '@totvs/thf-components';

import { Observable } from 'rxjs';
  
@Injectable({
  providedIn: 'root',
})
export class ThfDeleteService implements ThfGridDeleteService {
  constructor(private httpClient: HttpClient) {}

  deleteItem(
    selectedRow: any,
    filterParams?: any,
    keyValue?: any
  ): Observable<any> {
    const urlDelete = 'https://po-sample-api.onrender.com/v1/people';
    return this.httpClient.delete(urlDelete + '/' + keyValue);
  }
}
  `,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"name",label:"Nome"},{property:"cityName",label:"Cidade"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}selectedItem(r){this.literals={bodyDelete:"Tem certeza que deseja excluir "+r.name+"?"}}};l.\u0275fac=function(n){return new(n||l)(R(Re))},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-delete-service-doc"]],standalone:!1,features:[tt([Re])],decls:6,vars:10,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-selected","t-action-delete","t-columns","t-height","t-literals","t-selectable","t-service-delete-api"],[3,"htmlCode","tsCode","serviceCode","showServiceButton"]],template:function(n,a){n&1&&(i(0,"po-container")(1,"span",0),e(2,"Grid Dele\xE7\xE3o com Servi\xE7o Customizado"),t(),o(3,"po-divider",1),i(4,"thf-grid",2),T("t-selected",function(S){return a.selectedItem(S)}),t(),o(5,"app-code-accordion-doc",3),t()),n&2&&(p(4),c("t-action-delete",!0)("t-columns",a.column)("t-height",400)("t-literals",a.literals)("t-selectable",!0)("t-service-delete-api",a.serviceDeleteApi),p(),c("htmlCode",a.htmlCode)("tsCode",a.tsCode)("serviceCode",a.serviceCode)("showServiceButton",!0))},dependencies:[y,P,M,w],encapsulation:2});let d=l;return d})();var Ji=()=>[];function Zi(d,l){if(d&1){let m=I();i(0,"div",7)(1,"po-container",8)(2,"po-checkbox-group",9),g("ngModelChange",function(n){u(m);let a=x();return v(a.columnsName,n)||(a.columnsName=n),E(n)}),T("p-change",function(){u(m);let n=x();return E(n.updateColumns())}),t()(),i(3,"po-container",8)(4,"po-checkbox-group",10),g("ngModelChange",function(n){u(m);let a=x();return v(a.selection,n)||(a.selection=n),E(n)}),T("p-change",function(){u(m);let n=x();return E(n.changeSelectionOptions())}),t()(),i(5,"po-container",8)(6,"po-checkbox-group",11),g("ngModelChange",function(n){u(m);let a=x();return v(a.otherProperties,n)||(a.otherProperties=n),E(n)}),T("p-change",function(){u(m);let n=x();return E(n.changeOtherProperties())}),t()(),i(7,"po-container",8)(8,"po-radio-group",12),g("ngModelChange",function(n){u(m);let a=x();return v(a.spacing,n)||(a.spacing=n),E(n)}),t()(),i(9,"po-container",8)(10,"po-radio-group",13),g("ngModelChange",function(n){u(m);let a=x();return v(a.componentsSize,n)||(a.componentsSize=n),E(n)}),t(),i(11,"po-radio-group",14),g("ngModelChange",function(n){u(m);let a=x();return v(a.filterinputModeValue,n)||(a.filterinputModeValue=n),E(n)}),t()(),i(12,"po-container",15)(13,"po-number",16),g("ngModelChange",function(n){u(m);let a=x();return v(a.minResizableValue,n)||(a.minResizableValue=n),E(n)}),t(),i(14,"po-number",17),g("ngModelChange",function(n){u(m);let a=x();return v(a.maxResizableValue,n)||(a.maxResizableValue=n),E(n)}),t()(),i(15,"po-container",15)(16,"po-number",18),g("ngModelChange",function(n){u(m);let a=x();return v(a.height,n)||(a.height=n),E(n)}),t(),i(17,"po-number",19),g("ngModelChange",function(n){u(m);let a=x();return v(a.maxHeight,n)||(a.maxHeight=n),E(n)}),t(),i(18,"po-number",20),g("ngModelChange",function(n){u(m);let a=x();return v(a.minHeight,n)||(a.minHeight=n),E(n)}),t()(),i(19,"po-container",15)(20,"po-textarea",21),g("ngModelChange",function(n){u(m);let a=x();return v(a.literals,n)||(a.literals=n),E(n)}),T("p-change-model",function(){u(m);let n=x();return E(n.changeLiterals())}),t()(),i(21,"po-container",15)(22,"po-textarea",22),g("ngModelChange",function(n){u(m);let a=x();return v(a.sort,n)||(a.sort=n),E(n)}),T("p-change-model",function(){u(m);let n=x();return E(n.changeSort())}),t()(),i(23,"po-container",23)(24,"div",24)(25,"po-checkbox-group",25),g("ngModelChange",function(n){u(m);let a=x();return v(a.pagination,n)||(a.pagination=n),E(n)}),T("p-change",function(){u(m);let n=x();return E(n.changePagination())}),t(),i(26,"po-textarea",26),g("ngModelChange",function(n){u(m);let a=x();return v(a.optionsPage,n)||(a.optionsPage=n),E(n)}),T("p-change-model",function(){u(m);let n=x();return E(n.changeOptionsPage())}),t()()()(),i(27,"div",27)(28,"po-button",28),T("p-click",function(){u(m);let n=x();return E(n.restore())}),t()()}if(d&2){let m=x();p(2),f("ngModel",m.columnsName),c("p-options",m.columnsOptions),p(2),c("p-options",m.selectionOptions),f("ngModel",m.selection),p(2),c("p-columns",4)("p-options",m.otherPropertiesOptions),f("ngModel",m.otherProperties),p(2),c("p-columns",4)("p-options",m.spacingOptions),f("ngModel",m.spacing),p(2),f("ngModel",m.componentsSize),c("p-options",m.componentsSizeOptions),p(),f("ngModel",m.filterinputModeValue),c("p-options",m.filterModeOptions),p(2),f("ngModel",m.minResizableValue),c("disabled",!m.resizable),p(),f("ngModel",m.maxResizableValue),c("disabled",!m.resizable),p(2),f("ngModel",m.height),p(),f("ngModel",m.maxHeight),p(),f("ngModel",m.minHeight),p(2),f("ngModel",m.literals),p(2),f("ngModel",m.sort),p(3),c("p-options",m.paginationOptions),f("ngModel",m.pagination),p(),f("ngModel",m.optionsPage),c("disabled",!m.pagination.includes("pageable"))}}var zt=(()=>{let l=class l{constructor(r){this.poNotification=r,this.htmlCode=`<po-container>
  <span class="po-font-text-large-bold">Labs</span>
  <po-divider class="po-divider-mb-0"></po-divider>
  <thf-grid
    [t-action-delete]="selection.includes('actionDelete')"
    [t-action-edit]="selection.includes('actionEdit')"
    [t-action-excel]="selection.includes('actionExcel')"
    [t-action-pdf]="selection.includes('actionPdf')"
    [t-actions]="actions || []"
    [t-actions-filter]="otherProperties.includes('actionsFilter')"
    [t-actions-right]="otherProperties.includes('actionRight')"
    [t-columns]="columns"
    [t-components-size]="componentsSize"
    [t-draggable]="otherProperties.includes('draggable')"
    [t-filter-input-mode]="filterinputModeValue"
    [t-groupable]="otherProperties.includes('groupable')"
    [t-height]="height"
    [t-max-height]="maxHeight"
    [t-min-height]="minHeight"
    [t-hide-columns-manager]="otherProperties.includes('hideColumnsManager')"
    [t-hide-action-fixed-columns]="
      otherProperties.includes('hideActionFixedColumns')
    "
    [t-hide-batch-actions]="selection.includes('hideBatchActions')"
    [t-hide-select-all]="selection.includes('hideSelectAll')"
    [t-hide-table-search]="otherProperties.includes('hideTableSearch')"
    [t-literals]="literalsCustom"
    [t-loading]="otherProperties.includes('loading')"
    [t-max-resizable-width]="maxResizableValue"
    [t-min-resizable-width]="minResizableValue"
    [t-options-paging]="customOptionsPage"
    [t-pageable]="pagination.includes('pageable')"
    t-param-delete-api="value"
    [t-resizable]="resizable"
    [t-selectable]="selection.includes('selectable')"
    [t-selectable-entire-line]="selection.includes('selectableEntireLine')"
    [t-show-densification-configuration]="
      otherProperties.includes('showDensificationConfiguration')
    "
    [t-show-draggable-icon]="otherProperties.includes('showDraggableIcon')"
    [t-show-more-disabled]="pagination.includes('showMoreDisabled')"
    [t-show-more-visible]="pagination.includes('showMoreVisible')"
    [t-single-select]="selection.includes('singleSelect')"
    [t-sort]="customSort"
    [t-sortable]="otherProperties.includes('sortable')"
    [t-spacing]="spacing"
    [t-striped]="otherProperties.includes('striped')"
    [t-text-wrap]="otherProperties.includes('textWrap')"
    [t-virtual-scroll]="otherProperties.includes('virtualScroll')"
    [t-items]="items"
    (t-change-fixed-columns)="changeEvent('t-change-fixed-columns')"
    (t-change-order-column)="changeEvent('t-change-order-column')"
    (t-change-page-size)="changeEvent('t-change-page-size')"
    (t-change-sort-column)="changeEvent('t-change-sort-column')"
    (t-change-visible-columns)="changeEvent('t-change-visible-columns')"
    (t-change-options-column-manager)="
      changeEvent('t-change-options-column-manager')
    "
    (t-changed-density)="changeEvent('t-changed-density')"
    (t-delete-item)="changeEvent('t-delete-item')"
    (t-delete-items)="changeEvent('t-delete-items')"
    (t-delete-item-error)="changeEvent('t-delete-item-error')"
    (t-filter-item-error)="changeEvent('t-filter-item-error')"
    (t-restore-column-manager)="changeEvent('t-restore-column-manager')"
    (t-selected)="changeEvent('t-selected')"
    (t-all-selected)="changeEvent('t-all-selected')"
    (t-unselected)="changeEvent('t-unselected')"
    (t-all-unselected)="changeEvent('t-all-unselected')"
    (t-change-group)="changeEvent('t-change-group')"
    (t-rows-selected)="changeEvent('t-rows-selected')"
  />

  <po-container class="po-mt-2" style="display: flex">
    <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
  </po-container>

  <div class="po-row po-mt-2 po-mb-2" style="display: block">
      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="columnsName"
          [(ngModel)]="columnsName"
          p-columns="4"
          p-label="Columns"
          [p-options]="columnsOptions"
          (p-change)="updateColumns()"
        >
        </po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="selection"
          p-label="Selection"
          p-columns="4"
          [p-options]="selectionOptions"
          [(ngModel)]="selection"
          (p-change)="changeSelectionOptions()"
        ></po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="otherProperties"
          p-label="Other Properties"
          [p-columns]="4"
          [p-options]="otherPropertiesOptions"
          [(ngModel)]="otherProperties"
          (p-change)="changeOtherProperties()"
        >
        </po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          name="spacing"
          p-help="Para aplicar o tamanho Extra Small, defina o n\xEDvel de acessibilidade como AA no navbar."
          p-label="Spacing"
          [p-columns]="4"
          [p-options]="spacingOptions"
          [(ngModel)]="spacing"
        ></po-radio-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          class="po-lg-6"
          name="componentsSize"
          [(ngModel)]="componentsSize"
          p-label="Components size"
          p-help="Para aplicar o tamanho small, defina o n\xEDvel de acessibilidade como AA no navbar."
          [p-options]="componentsSizeOptions"
        >
        </po-radio-group>

        <po-radio-group
          class="po-lg-6"
          name="filterinputModeValue"
          p-label="Filter Input Mode"
          [(ngModel)]="filterinputModeValue"
          [p-options]="filterModeOptions"
        ></po-radio-group>
      </po-container>

      <po-container class="po-mb-2 po-lg-6" style="display: flex">
        <po-number
          class="po-md-6"
          p-label="Min Resizable Width"
          [(ngModel)]="minResizableValue"
          [disabled]="!resizable"
        ></po-number>
        <po-number
          class="po-md-6"
          p-label="Max Resizable Width"
          [(ngModel)]="maxResizableValue"
          [disabled]="!resizable"
        ></po-number>
      </po-container>

      <po-container class="po-mb-2 po-lg-6" style="display: flex">
        <po-number
          class="po-md-6 po-lg-4"
          p-label="Height"
          [(ngModel)]="height"
        ></po-number>
        <po-number
          class="po-md-6 po-lg-4"
          p-label="Max Height"
          [(ngModel)]="maxHeight"
        ></po-number>
        <po-number
          class="po-md-6 po-lg-4"
          p-label="Min Height"
          [(ngModel)]="minHeight"
        ></po-number>
      </po-container>

      <po-container class="po-mb-2 po-lg-6" style="display: flex">
        <po-textarea
          name="literals"
          p-label="Literals"
          p-help='{"noData": "Sem dados a serem exibidos"}'
          [(ngModel)]="literals"
          (p-change-model)="changeLiterals()"
        ></po-textarea>
      </po-container>

      <po-container class="po-mb-2 po-lg-6" style="display: flex">
        <po-textarea
          name="sort"
          p-label="Sort"
          p-help='[{ "field":"name", "dir":"asc" }]'
          [(ngModel)]="sort"
          (p-change-model)="changeSort()"
        ></po-textarea>
      </po-container>

      <po-container class="po-mb-2 po-lg-12" style="display: flex">
        <div style="display: flex; flex-wrap: wrap">
          <po-checkbox-group
            class="po-lg-6"
            name="pagination"
            p-label="Pagination"
            [p-options]="paginationOptions"
            [(ngModel)]="pagination"
            (p-change)="changePagination()"
          ></po-checkbox-group>

          <po-textarea
            class="po-lg-6"
            name="optionsPage"
            p-label="Options Page"
            p-help='[{ "value":"25", "label":"25" }, { "value":"50", "label":"50" }]'
            [(ngModel)]="optionsPage"
            (p-change-model)="changeOptionsPage()"
            [disabled]="!pagination.includes('pageable')"
          ></po-textarea>
        </div>
      </po-container>
    </div>

    <div class="po-row">
      <po-button
        class="po-lg-3 po-md-6"
        p-label="Restore"
        (p-click)="restore()"
      >
      </po-button>
    </div>
</po-container>
`,this.tsCode=`import { Component } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoNotificationService,
  PoRadioGroupOption,
} from '@po-ui/ng-components';
import {
  ThfColumnSpacing,
  ThfGridColumn,
  ThfGridColumnSort,
  ThfGridLiterals,
  ThfTableAction,
} from '@totvs/thf-components';
import { ThfGridOptionPaging } from '@totvs/thf-components/lib/components/thf-grid-lookup/thf-grid/interfaces/thf-grid-option-paging.interface';

@Component({
  selector: 'app-thf-grid-labs-doc',
  templateUrl: './thf-grid-labs-doc.component.html',
  styleUrls: ['./thf-grid-labs-doc.component.css'],
})
export class ThfGridLabsDocComponent {
  actions: Array<ThfTableAction> | undefined = undefined;
  columnsName: Array<string> = ['id', 'name', 'birthdate', 'email'];
  componentsSize: string = 'medium';
  customOptionsPage: Array<ThfGridOptionPaging> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
    { value: 1000, label: '1000' }
  ];
  customSort: Array<ThfGridColumnSort> = [
    {
      field: '',
      dir: 'asc'
    }
  ];
  event: string = '';
  filterinputModeValue: string = 'basic';
  height = 400;
  minHeight = undefined;
  maxHeight = undefined;
  literals: string = '';
  literalsCustom: ThfGridLiterals = {};
  maxResizableValue: number = 300;
  minResizableValue: number = 10;
  optionsPage: string = \`[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]\`;
  pagination: Array<string> = [];
  properties: Array<string> = [];
  resizable: boolean = false;
  selection: Array<string> = ['selectableEntireLine'];
  sort: string = '[{"field": "", "dir": "asc"}]';
  spacing: ThfColumnSpacing = ThfColumnSpacing.Medium;
  otherProperties: Array<string> = ['actionsFilter', 'draggable', 'groupable', 'sortable', 'striped', 'virtualScroll'];

  customAction: Array<ThfTableAction> = [
    {
      label: '',
      action: (e: any) => {
        this.poNotification.information(\`\${e.id} - \${e.name}\`);
      },
      icon: 'ICON_MENU_OPEN',
      fixed: true
    }
  ];

  componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  selectionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Selectable', value: 'selectable' },
    { label: 'Single', value: 'singleSelect', disabled: true },
    { label: 'Entire Line', value: 'selectableEntireLine', disabled: true },
    { label: 'Hide Select All', value: 'hideSelectAll', disabled: true },
    { label: 'Action Delete', value: 'actionDelete', disabled: true },
    { label: 'Action Edit', value: 'actionEdit', disabled: true },
    { label: 'Action Excel', value: 'actionExcel', disabled: true },
    { label: 'Action PDF', value: 'actionPdf', disabled: true },
    { label: 'Hide Batch Actions', value: 'hideBatchActions', disabled: true }
  ];
  spacingOptions: Array<PoRadioGroupOption> = [
    { label: 'extraSmall', value: ThfColumnSpacing.ExtraSmall },
    { label: 'Small', value: ThfColumnSpacing.Small },
    { label: 'Medium', value: ThfColumnSpacing.Medium },
    { label: 'Large', value: ThfColumnSpacing.Large }
  ];
  filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Basic', value: 'basic' },
    { label: 'Service', value: 'service' }
  ];
  otherPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Actions Filter', value: 'actionsFilter' },
    { label: 'Action Right', value: 'actionRight' },
    { label: 'Draggable', value: 'draggable' },
    { label: 'Groupable', value: 'groupable' },
    { label: 'Hide Columns Manager', value: 'hideColumnsManager' },
    { label: 'Hide Actions Fixed Columns', value: 'hideActionFixedColumns' },
    { label: 'Hide Table Search', value: 'hideTableSearch' },
    { label: 'Loading', value: 'loading' },
    { label: 'Resizable', value: 'resizable' },
    {
      label: 'Show Densification Configuration',
      value: 'showDensificationConfiguration'
    },
    { label: 'Show Draggable Icon', value: 'showDraggableIcon' },
    { label: 'Sortable', value: 'sortable' },
    { label: 'Striped', value: 'striped' },
    { label: 'Text Wrap', value: 'textWrap', disabled: false },
    { label: 'Virtual Scroll', value: 'virtualScroll' }
  ];
  paginationOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Pageable', value: 'pageable' },
    { label: 'Show More Disabled', value: 'showMoreDisabled', disabled: false },
    { label: 'Show More Visible', value: 'showMoreVisible', disabled: false }
  ];

  items = [
    {
      id: 1,
      name: 'Jo\xE3o Silva',
      birthdate: '1990-05-15',
      lastLogin: '2024-02-14T15:30:00Z',
      active: true,
      email: 'joao.silva@example.com'
    },
    {
      id: 2,
      name: 'Maria Souza',
      birthdate: '1985-10-23',
      lastLogin: '2024-02-13T08:45:00Z',
      active: false,
      email: 'maria.souza@example.com'
    },
    {
      id: 3,
      name: 'Carlos Almeida',
      birthdate: '1998-07-09',
      lastLogin: '2024-02-14T20:15:00Z',
      active: true,
      email: 'carlos.almeida@example.com'
    },
    {
      id: 4,
      name: 'Fernanda Costa',
      birthdate: '1992-03-12',
      lastLogin: '2024-02-12T18:00:00Z',
      active: false,
      email: 'fernanda.costa@example.com'
    },
    {
      id: 5,
      name: 'Ricardo Lima',
      birthdate: '1980-11-30',
      lastLogin: '2024-02-11T07:25:00Z',
      active: true,
      email: 'ricardo.lima@example.com'
    },
    {
      id: 6,
      name: 'Ana Pereira',
      birthdate: '1995-09-18',
      lastLogin: '2024-02-10T14:10:00Z',
      active: true,
      email: 'ana.pereira@example.com'
    },
    {
      id: 7,
      name: 'Pedro Henrique',
      birthdate: '1993-06-25',
      lastLogin: '2024-02-09T12:30:00Z',
      active: false,
      email: 'pedro.henrique@example.com'
    },
    {
      id: 8,
      name: 'Beatriz Ramos',
      birthdate: '1999-04-03',
      lastLogin: '2024-02-08T09:15:00Z',
      active: true,
      email: 'beatriz.ramos@example.com'
    },
    {
      id: 9,
      name: 'Lucas Oliveira',
      birthdate: '1987-07-22',
      lastLogin: '2024-02-07T16:45:00Z',
      active: false,
      email: 'lucas.oliveira@example.com'
    },
    {
      id: 10,
      name: 'Juliana Martins',
      birthdate: '1996-01-05',
      lastLogin: '2024-02-06T11:00:00Z',
      active: true,
      email: 'juliana.martins@example.com'
    },
    {
      id: 11,
      name: 'Eduardo Nunes',
      birthdate: '1982-08-17',
      lastLogin: '2024-02-05T17:20:00Z',
      active: false,
      email: 'eduardo.nunes@example.com'
    },
    {
      id: 12,
      name: 'Camila Ferreira',
      birthdate: '2000-12-29',
      lastLogin: '2024-02-04T13:40:00Z',
      active: true,
      email: 'camila.ferreira@example.com'
    }
  ];

  columns: Array<ThfGridColumn> = [
    { property: 'id', label: 'Number' },
    { property: 'name', label: 'Text' },
    { property: 'birthdate', label: 'Date', type: 'date' },
    {
      property: 'email',
      label: 'Link',
      type: 'link',
      action: this.openEmail.bind(this)
    }
  ];

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Number' },
    { value: 'name', label: 'Text' },
    { value: 'birthdate', label: 'Date' },
    { value: 'lastLogin', label: 'DateTime' },
    { value: 'active', label: 'Boolean' },
    { value: 'email', label: 'Link' }
  ];

  private readonly columnsDefinition: any = {
    id: <ThfGridColumn>{ property: 'id', label: 'Number' },
    name: <ThfGridColumn>{ property: 'name', label: 'Text' },
    birthdate: <ThfGridColumn>{
      property: 'birthdate',
      label: 'Date',
      type: 'date'
    },
    lastLogin: <ThfGridColumn>{
      property: 'lastLogin',
      label: 'DateTime',
      type: 'dateTime'
    },
    active: <ThfGridColumn>{ property: 'active', label: 'Boolean' },
    email: <ThfGridColumn>{
      property: 'email',
      label: 'Link',
      type: 'link',
      action: this.openEmail.bind(this)
    }
  };

  constructor(private readonly poNotification: PoNotificationService) {}

  ngAfterViewInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  changeLiterals() {
    try {
      this.literalsCustom = JSON.parse(this.literals);
    } catch {
      this.literalsCustom = {};
    }
  }

  changeOptionsPage() {
    try {
      this.customOptionsPage = JSON.parse(this.optionsPage);
    } catch {
      this.customOptionsPage = [
        { value: 10, label: '10' },
        { value: 20, label: '20' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
        { value: 1000, label: '1000' }
      ];
    }
  }

  changeOtherProperties() {
    this.actions = this.otherProperties.includes('actions') ? this.customAction : [];

    const isVirtualScrollEnabled = this.otherProperties.includes('virtualScroll');
    const isResizableEnabled = this.otherProperties.includes('resizable');

    this.otherPropertiesOptions = this.otherPropertiesOptions.map(option => {
      if (option.value === 'textWrap') {
        return { ...option, disabled: isVirtualScrollEnabled };
      }
      return option;
    });

    if (isVirtualScrollEnabled && this.otherProperties.includes('textWrap')) {
      this.otherProperties = this.otherProperties.filter(prop => prop !== 'textWrap');
    }

    this.resizable = isResizableEnabled;
  }

  changePagination() {
    const pageable = this.pagination.includes('pageable');

    this.paginationOptions[1].disabled = !pageable;
    this.paginationOptions[2].disabled = !pageable;
    this.paginationOptions = [...this.paginationOptions];
  }

  changeSelectionOptions() {
    const selectable = this.selection.includes('selectable');

    this.selectionOptions[1].disabled = !selectable;
    this.selectionOptions[2].disabled = !selectable;
    this.selectionOptions[3].disabled = !selectable;
    this.selectionOptions[4].disabled = !selectable;
    this.selectionOptions[5].disabled = !selectable;
    this.selectionOptions[6].disabled = !selectable;
    this.selectionOptions[7].disabled = !selectable;
    this.selectionOptions[8].disabled = !selectable;
    this.selectionOptions = [...this.selectionOptions];
  }

  changeSort() {
    try {
      this.customSort = JSON.parse(this.sort);
    } catch {
      this.customSort = [
        {
          field: '',
          dir: 'asc'
        }
      ];
    }
  }

  openEmail(email: string) {
    window.open(\`mailto:\${email}\`, '_blank');
  }

  restore() {
    this.actions = undefined;
    this.columnsName = ['id', 'name', 'birthdate', 'email'];
    this.componentsSize = 'medium';
    this.event = '';
    this.filterinputModeValue = 'basic';
    this.literals = '';
    this.literalsCustom = {};
    this.maxResizableValue = 300;
    this.minResizableValue = 10;
    this.height = 400;
    this.minHeight = undefined;
    this.maxHeight = undefined;
    this.optionsPage = \`[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]\`;
    this.pagination = ['showMoreVisible'];
    this.properties = [];
    this.resizable = false;
    this.selection = ['selectableEntireLine'];
    this.sort = '[{"field": "", "dir": "asc"}]';
    this.spacing = ThfColumnSpacing.Medium;
    this.otherProperties = ['actionsFilter', 'draggable', 'groupable', 'sortable', 'striped', 'virtualScroll'];

    this.updateColumns();
    this.changeLiterals();
    this.changeSort();
    this.changePagination();
    this.changeSelectionOptions();
    this.changeOtherProperties();
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach(column => this.columns.push(this.columnsDefinition[column]));
  }
}
  `,this.actions=void 0,this.columnsName=["id","name","birthdate","email"],this.componentsSize="medium",this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}],this.customSort=[{field:"",dir:"asc"}],this.event="",this.filterinputModeValue="basic",this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=[],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=ce.Medium,this.otherProperties=["actionsFilter","draggable","container","groupable","sortable","striped","virtualScroll"],this.customAction=[{label:"",action:n=>{this.poNotification.information(`${n.id} - ${n.name}`)},icon:"ICON_MENU_OPEN",fixed:!0}],this.componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Single",value:"singleSelect",disabled:!0},{label:"Entire Line",value:"selectableEntireLine",disabled:!0},{label:"Hide Select All",value:"hideSelectAll",disabled:!0},{label:"Action Delete",value:"actionDelete",disabled:!0},{label:"Action Edit",value:"actionEdit",disabled:!0},{label:"Action Excel",value:"actionExcel",disabled:!0},{label:"Action PDF",value:"actionPdf",disabled:!0},{label:"Hide Batch Actions",value:"hideBatchActions",disabled:!0}],this.spacingOptions=[{label:"extraSmall",value:ce.ExtraSmall},{label:"Small",value:ce.Small},{label:"Medium",value:ce.Medium},{label:"Large",value:ce.Large}],this.filterModeOptions=[{label:"Basic",value:"basic"},{label:"Service",value:"service"}],this.otherPropertiesOptions=[{label:"Actions",value:"actions"},{label:"Actions Filter",value:"actionsFilter"},{label:"Action Right",value:"actionRight"},{label:"Container",value:"container"},{label:"Draggable",value:"draggable"},{label:"Groupable",value:"groupable"},{label:"Hide Columns Manager",value:"hideColumnsManager"},{label:"Hide Actions Fixed Columns",value:"hideActionFixedColumns"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Loading",value:"loading"},{label:"Resizable",value:"resizable"},{label:"Show Densification Configuration",value:"showDensificationConfiguration"},{label:"Show Draggable Icon",value:"showDraggableIcon"},{label:"Sortable",value:"sortable"},{label:"Striped",value:"striped"},{label:"Text Wrap",value:"textWrap",disabled:!1},{label:"Virtual Scroll",value:"virtualScroll"}],this.paginationOptions=[{label:"Pageable",value:"pageable"},{label:"Show More Disabled",value:"showMoreDisabled",disabled:!1},{label:"Show More Visible",value:"showMoreVisible",disabled:!1}],this.items=[{id:1,name:"Jo\xE3o Silva",birthdate:"1990-05-15",lastLogin:"2024-02-14T15:30:00Z",active:!0,email:"joao.silva@example.com"},{id:2,name:"Maria Souza",birthdate:"1985-10-23",lastLogin:"2024-02-13T08:45:00Z",active:!1,email:"maria.souza@example.com"},{id:3,name:"Carlos Almeida",birthdate:"1998-07-09",lastLogin:"2024-02-14T20:15:00Z",active:!0,email:"carlos.almeida@example.com"},{id:4,name:"Fernanda Costa",birthdate:"1992-03-12",lastLogin:"2024-02-12T18:00:00Z",active:!1,email:"fernanda.costa@example.com"},{id:5,name:"Ricardo Lima",birthdate:"1980-11-30",lastLogin:"2024-02-11T07:25:00Z",active:!0,email:"ricardo.lima@example.com"},{id:6,name:"Ana Pereira",birthdate:"1995-09-18",lastLogin:"2024-02-10T14:10:00Z",active:!0,email:"ana.pereira@example.com"},{id:7,name:"Pedro Henrique",birthdate:"1993-06-25",lastLogin:"2024-02-09T12:30:00Z",active:!1,email:"pedro.henrique@example.com"},{id:8,name:"Beatriz Ramos",birthdate:"1999-04-03",lastLogin:"2024-02-08T09:15:00Z",active:!0,email:"beatriz.ramos@example.com"},{id:9,name:"Lucas Oliveira",birthdate:"1987-07-22",lastLogin:"2024-02-07T16:45:00Z",active:!1,email:"lucas.oliveira@example.com"},{id:10,name:"Juliana Martins",birthdate:"1996-01-05",lastLogin:"2024-02-06T11:00:00Z",active:!0,email:"juliana.martins@example.com"},{id:11,name:"Eduardo Nunes",birthdate:"1982-08-17",lastLogin:"2024-02-05T17:20:00Z",active:!1,email:"eduardo.nunes@example.com"},{id:12,name:"Camila Ferreira",birthdate:"2000-12-29",lastLogin:"2024-02-04T13:40:00Z",active:!0,email:"camila.ferreira@example.com"}],this.columns=[{property:"id",label:"Number"},{property:"name",label:"Text"},{property:"birthdate",label:"Date",type:"date"},{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)}],this.columnsOptions=[{value:"id",label:"Number"},{value:"name",label:"Text"},{value:"birthdate",label:"Date"},{value:"lastLogin",label:"DateTime"},{value:"active",label:"Boolean"},{value:"email",label:"Link"}],this.columnsDefinition={id:{property:"id",label:"Number"},name:{property:"name",label:"Text"},birthdate:{property:"birthdate",label:"Date",type:"date"},lastLogin:{property:"lastLogin",label:"DateTime",type:"dateTime"},active:{property:"active",label:"Boolean"},email:{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)}}}ngAfterViewInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.literalsCustom=JSON.parse(this.literals)}catch{this.literalsCustom={}}}changeOptionsPage(){try{this.customOptionsPage=JSON.parse(this.optionsPage)}catch{this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}]}}changeOtherProperties(){this.actions=this.otherProperties.includes("actions")?this.customAction:[];let r=this.otherProperties.includes("virtualScroll"),n=this.otherProperties.includes("resizable");this.otherPropertiesOptions=this.otherPropertiesOptions.map(a=>a.value==="textWrap"?Q(O({},a),{disabled:r}):a),r&&this.otherProperties.includes("textWrap")&&(this.otherProperties=this.otherProperties.filter(a=>a!=="textWrap")),this.resizable=n}changePagination(){let r=this.pagination.includes("pageable");this.paginationOptions[1].disabled=!r,this.paginationOptions[2].disabled=!r,this.paginationOptions=[...this.paginationOptions]}changeSelectionOptions(){let r=this.selection.includes("selectable");this.selectionOptions[1].disabled=!r,this.selectionOptions[2].disabled=!r,this.selectionOptions[3].disabled=!r,this.selectionOptions[4].disabled=!r,this.selectionOptions[5].disabled=!r,this.selectionOptions[6].disabled=!r,this.selectionOptions[7].disabled=!r,this.selectionOptions[8].disabled=!r,this.selectionOptions=[...this.selectionOptions]}changeSort(){try{this.customSort=JSON.parse(this.sort)}catch{this.customSort=[{field:"",dir:"asc"}]}}openEmail(r){window.open(`mailto:${r}`,"_blank")}restore(){this.actions=void 0,this.columnsName=["id","name","birthdate","email"],this.componentsSize="medium",this.event="",this.filterinputModeValue="basic",this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=["showMoreVisible"],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=ce.Medium,this.otherProperties=["actionsFilter","container","draggable","groupable","sortable","striped","virtualScroll"],this.updateColumns(),this.changeLiterals(),this.changeSort(),this.changePagination(),this.changeSelectionOptions(),this.changeOtherProperties()}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}};l.\u0275fac=function(n){return new(n||l)(R(ve))},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-labs-doc"]],standalone:!1,decls:10,vars:48,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-param-delete-api","value",3,"t-change-fixed-columns","t-change-order-column","t-change-page-size","t-change-sort-column","t-change-visible-columns","t-change-options-column-manager","t-changed-density","t-delete-item","t-delete-items","t-delete-item-error","t-filter-item-error","t-restore-column-manager","t-selected","t-all-selected","t-unselected","t-all-unselected","t-change-group","t-rows-selected","t-action-delete","t-action-edit","t-action-excel","t-action-pdf","t-actions","t-actions-filter","t-actions-right","t-components-size","t-columns","t-container","t-draggable","t-filter-input-mode","t-groupable","t-height","t-max-height","t-min-height","t-hide-columns-manager","t-hide-action-fixed-columns","t-hide-batch-actions","t-hide-select-all","t-hide-table-search","t-literals","t-loading","t-max-resizable-width","t-min-resizable-width","t-options-paging","t-pageable","t-resizable","t-selectable","t-selectable-entire-line","t-show-densification-configuration","t-show-draggable-icon","t-show-more-disabled","t-show-more-visible","t-single-select","t-sort","t-sortable","t-spacing","t-striped","t-text-wrap","t-virtual-scroll","t-items"],[1,"po-mt-2",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","columnsName","p-columns","4","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-options"],["name","selection","p-label","Selection","p-columns","4",3,"ngModelChange","p-change","p-options","ngModel"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","spacing","p-help","Para aplicar o tamanho Extra Small, defina o n\xEDvel de acessibilidade como AA no navbar.","p-label","Spacing",3,"ngModelChange","p-columns","p-options","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, defina o n\xEDvel de acessibilidade como AA no navbar.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterinputModeValue","p-label","Filter Input Mode",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],[1,"po-mb-2","po-lg-6",2,"display","flex"],["p-label","Min Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Max Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Max Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Min Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","literals","p-label","Literals","p-help",'{"noData": "Sem dados a serem exibidos"}',3,"ngModelChange","p-change-model","ngModel"],["name","sort","p-label","Sort","p-help",'[{ "field":"name", "dir":"asc" }]',3,"ngModelChange","p-change-model","ngModel"],[1,"po-mb-2","po-lg-12",2,"display","flex"],[2,"display","flex","flex-wrap","wrap"],["name","pagination","p-label","Pagination",1,"po-lg-6",3,"ngModelChange","p-change","p-options","ngModel"],["name","optionsPage","p-label","Options Page","p-help",'[{ "value":"25", "label":"25" }, { "value":"50", "label":"50" }]',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel","disabled"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(n,a){if(n&1){let s=I();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"thf-grid",3),T("t-change-fixed-columns",function(){return u(s),E(a.changeEvent("t-change-fixed-columns"))})("t-change-order-column",function(){return u(s),E(a.changeEvent("t-change-order-column"))})("t-change-page-size",function(){return u(s),E(a.changeEvent("t-change-page-size"))})("t-change-sort-column",function(){return u(s),E(a.changeEvent("t-change-sort-column"))})("t-change-visible-columns",function(){return u(s),E(a.changeEvent("t-change-visible-columns"))})("t-change-options-column-manager",function(){return u(s),E(a.changeEvent("t-change-options-column-manager"))})("t-changed-density",function(){return u(s),E(a.changeEvent("t-changed-density"))})("t-delete-item",function(){return u(s),E(a.changeEvent("t-delete-item"))})("t-delete-items",function(){return u(s),E(a.changeEvent("t-delete-items"))})("t-delete-item-error",function(){return u(s),E(a.changeEvent("t-delete-item-error"))})("t-filter-item-error",function(){return u(s),E(a.changeEvent("t-filter-item-error"))})("t-restore-column-manager",function(){return u(s),E(a.changeEvent("t-restore-column-manager"))})("t-selected",function(){return u(s),E(a.changeEvent("t-selected"))})("t-all-selected",function(){return u(s),E(a.changeEvent("t-all-selected"))})("t-unselected",function(){return u(s),E(a.changeEvent("t-unselected"))})("t-all-unselected",function(){return u(s),E(a.changeEvent("t-all-unselected"))})("t-change-group",function(){return u(s),E(a.changeEvent("t-change-group"))})("t-rows-selected",function(){return u(s),E(a.changeEvent("t-rows-selected"))}),t(),i(5,"po-container",4),o(6,"po-info",5),t(),o(7,"app-code-accordion-doc",6),G(8,Zi,29,27,"ng-template",null,0,Z),t()}if(n&2){let s=W(9);p(4),c("t-action-delete",a.selection.includes("actionDelete"))("t-action-edit",a.selection.includes("actionEdit"))("t-action-excel",a.selection.includes("actionExcel"))("t-action-pdf",a.selection.includes("actionPdf"))("t-actions",a.actions||J(47,Ji))("t-actions-filter",a.otherProperties.includes("actionsFilter"))("t-actions-right",a.otherProperties.includes("actionRight"))("t-components-size",a.componentsSize)("t-columns",a.columns)("t-container",a.otherProperties.includes("container"))("t-draggable",a.otherProperties.includes("draggable"))("t-filter-input-mode",a.filterinputModeValue)("t-groupable",a.otherProperties.includes("groupable"))("t-height",a.height)("t-max-height",a.maxHeight)("t-min-height",a.minHeight)("t-hide-columns-manager",a.otherProperties.includes("hideColumnsManager"))("t-hide-action-fixed-columns",a.otherProperties.includes("hideActionFixedColumns"))("t-hide-batch-actions",a.selection.includes("hideBatchActions"))("t-hide-select-all",a.selection.includes("hideSelectAll"))("t-hide-table-search",a.otherProperties.includes("hideTableSearch"))("t-literals",a.literalsCustom)("t-loading",a.otherProperties.includes("loading"))("t-max-resizable-width",a.maxResizableValue)("t-min-resizable-width",a.minResizableValue)("t-options-paging",a.customOptionsPage)("t-pageable",a.pagination.includes("pageable"))("t-resizable",a.resizable)("t-selectable",a.selection.includes("selectable"))("t-selectable-entire-line",a.selection.includes("selectableEntireLine"))("t-show-densification-configuration",a.otherProperties.includes("showDensificationConfiguration"))("t-show-draggable-icon",a.otherProperties.includes("showDraggableIcon"))("t-show-more-disabled",a.pagination.includes("showMoreDisabled"))("t-show-more-visible",a.pagination.includes("showMoreVisible"))("t-single-select",a.selection.includes("singleSelect"))("t-sort",a.customSort)("t-sortable",a.otherProperties.includes("sortable"))("t-spacing",a.spacing)("t-striped",a.otherProperties.includes("striped"))("t-text-wrap",a.otherProperties.includes("textWrap"))("t-virtual-scroll",a.otherProperties.includes("virtualScroll"))("t-items",a.items),p(2),c("p-value",a.event),p(),c("properties",!0)("dynamicTemplate",s)("htmlCode",a.htmlCode)("tsCode",a.tsCode)}},dependencies:[B,K,U,y,P,fe,le,Ct,ge,me,M,w],encapsulation:2});let d=l;return d})();var Yi=["gridComponent"],jt=(()=>{let l=class l{constructor(){this.htmlCode=`<thf-grid
  #gridComponent
  t-service-api="https://po-sample-api.onrender.com/v1/people"
  [t-auto-size]="true"
  [t-columns]="columns"
  [t-actions-filter]="true"
  [t-selectable]="true"
  [t-actions-right]="true"
  [t-draggable]="true"
  [t-groupable]="true"
  [t-height]="400"
  [t-edit-properties]="editProperties"
/>
  `,this.tsCode=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThfGridColumn, ThfGridComponent, ThfGridEditProperties } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-editing-inline-doc',
  templateUrl: './thf-grid-editing-inline-doc.component.html',
  styleUrls: ['./thf-grid-editing-inline-doc.component.css'],
  standalone: false,
})
export class ThfGridEditingInlineDocComponent {
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columns: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', editProperties: { disabled: true } },
    { property: 'name', label: 'Nome' },
    {
      property: 'birthdate',
      label: 'Data de  nascimento',
      type: 'date',
      editProperties: {
        componentEditable: 'datepicker',
        clean: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        helper: 'Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.',
        keydown: this.onKeyDown.bind(this, 'birthdate')
      }
    },
    {
      property: 'city',
      label: 'Cidade',
      editProperties: {
        componentEditable: 'combo',
        options: [
          { value: '4201307', label: 'Araquari' },
          { value: '1501402', label: 'Bel\xE9m' },
          { value: '3509502', label: 'Campinas' },
          { value: '4106902', label: 'Curitiba' },
          { value: '4209102', label: 'Joinville' },
          { value: '3534401', label: 'Osasco' },
          { value: '3304557', label: 'Rio de Janeiro' },
          { value: '4215802', label: 'S\xE3o Bento do Sul' },
          { value: '4216206', label: 'S\xE3o Francisco do Sul' },
          { value: '3550308', label: 'S\xE3o Paulo' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        removeInitialFilter: true,
        controlValueWithLabel: true,
      },
    },
  ];

  form!: FormGroup;
  editProperties!: ThfGridEditProperties;

  ngOnInit() {
    this.editProperties = {
      actionEdit: this.setFormGroup.bind(this),
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  setFormGroup(dataItem: any) {
    this.form = new FormGroup({
      id: new FormControl(dataItem.id, [Validators.required]),
      name: new FormControl(dataItem.name),
      city: new FormControl(dataItem.city),
      birthdate: new FormControl(dataItem.birthdate),
    });
    return this.form;
  }
}
  `,this.columns=[{property:"id",label:"Id",editProperties:{disabled:!0}},{property:"name",label:"Nome"},{property:"birthdate",label:"Data de  nascimento",type:"date",editProperties:{componentEditable:"datepicker",clean:!0,required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,helper:"Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.",keydown:this.onKeyDown.bind(this,"birthdate")}},{property:"city",label:"Cidade",editProperties:{componentEditable:"combo",options:[{value:"4201307",label:"Araquari"},{value:"1501402",label:"Bel\xE9m"},{value:"3509502",label:"Campinas"},{value:"4106902",label:"Curitiba"},{value:"4209102",label:"Joinville"},{value:"3534401",label:"Osasco"},{value:"3304557",label:"Rio de Janeiro"},{value:"4215802",label:"S\xE3o Bento do Sul"},{value:"4216206",label:"S\xE3o Francisco do Sul"},{value:"3550308",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}}]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)}}onKeyDown(r,n){n.code==="F9"&&this.thfGrid.showAdditionalHelp(r)}setFormGroup(r){return this.form=new H({id:new h(r.id,[L.required]),name:new h(r.name),city:new h(r.city),birthdate:new h(r.birthdate)}),this.form}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-editing-inline-doc"]],viewQuery:function(n,a){if(n&1&&A(Yi,5),n&2){let s;q(s=k())&&(a.thfGrid=s.first)}},standalone:!1,decls:7,vars:11,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-auto-size","t-columns","t-actions-filter","t-selectable","t-actions-right","t-draggable","t-groupable","t-height","t-edit-properties"],[3,"htmlCode","tsCode"]],template:function(n,a){n&1&&(i(0,"po-container")(1,"span",1),e(2,"Edi\xE7\xE3o em linha"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),n&2&&(p(4),c("t-auto-size",!0)("t-columns",a.columns)("t-actions-filter",!0)("t-selectable",!0)("t-actions-right",!0)("t-draggable",!0)("t-groupable",!0)("t-height",400)("t-edit-properties",a.editProperties),p(2),c("htmlCode",a.htmlCode)("tsCode",a.tsCode))},dependencies:[y,P,M,w],encapsulation:2});let d=l;return d})();var Ot=`<div class="po-row po-mb-2">
  <po-button
    class="po-mr-2"
    p-label="Finaliza modo edi\xE7\xE3o"
    (p-click)="finishEditMode()"
  ></po-button>
  <po-button
    p-label="Get itens alterados"
    [p-disabled]="getChangedItems()?.length === 0"
    (p-click)="poModal.open()"
  ></po-button>
</div>

<thf-grid
  #gridComponent
  [t-height]="400"
  [t-selectable]="true"
  [t-single-select]="true"
  [t-items]="items"
  [t-columns]="columnWithItems"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-actions-right]="true"
  [t-sortable]="true"
  [t-custom-templates]="{ name: nameTemplate, perfil: perfilTemplate }"
/>

<ng-template #nameTemplate let-formControl="formControl">
  <po-input
    #input
    p-additional-help-tooltip="Informe pelo menos o primeiro nome."
    p-placeholder="Informe o nome"
    [formControl]="formControl"
    [p-error-pattern]="'Obrigat\xF3rio'"
    [p-required]="true"
    [p-required-field-error-message]="true"
    (p-keydown)="onKeyDown('name', $event)"
  ></po-input>
</ng-template>
<ng-template #perfilTemplate let-formControl="formControl">
  <po-multiselect
    #multiselect
    [formControl]="formControl"
    [p-field-error-message]="'Obrigat\xF3rio'"
    [p-required]="true"
    [p-additional-help-tooltip]="
      'Marque um ou mais status, conforme necess\xE1rio.'
    "
    [p-options]="[
      { value: 1, label: 'RH' },
      { value: 2, label: 'Almoxarifado' },
      { value: 3, label: 'Vendedor' }
    ]"
    [p-field-label]="'label'"
    [p-field-value]="'value'"
    [p-control-value-with-label]="true"
    (p-keydown)="onKeyDown('otherStatus', $event)"
  ></po-multiselect>
</ng-template>

<po-modal #modal p-title="Itens que foram alterados">
  <div class="code" *ngIf="getChangedItems()?.length">
    <pre>{{ getLabelChangedItems() }}</pre>
  </div>
</po-modal>`,Gt=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  PoInputComponent,
  PoModalComponent,
  PoMultiselectComponent,
} from '@po-ui/ng-components';
import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-row-actions-doc',
  templateUrl: './thf-grid-grid-row-actions-doc.component.html',
  styleUrls: ['./thf-grid-grid-row-actions-doc.component.css'],
  standalone: false,
})
export class ThfGridRowActionsDocComponent {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  @ViewChild('multiselect', { static: false })
  multiselect!: PoMultiselectComponent;
  @ViewChild('input', { static: false }) input!: PoInputComponent;

  items = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      perfil: [1],
      state: { value: 'SC', label: 'Santa Catarina' },
      city: 'Lages',
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      perfil: [2],
      state: { value: 'SC', label: 'Santa Catarina' },
      city: 'Brusque',
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      perfil: [3],
      state: { value: 'SP', label: 'S\xE3o Paulo' },
      city: 'Guarulhos',
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      perfil: [3],
      state: { value: 'SP', label: 'S\xE3o Paulo' },
      city: 'Campinas',
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      perfil: [2],
      state: { value: 'RJ', label: 'Rio de Janeiro' },
      city: null,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      perfil: [1],
      state: null,
      city: null,
    },
  ];
  currentIdItem: any;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
      editProperties: {
        componentEditable: 'input',
        required: true
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 1, label: 'Ativo' },
          { value: 2, label: 'Inativo' },
          { value: 0, label: 'Other' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    },
    {
      property: 'values',
      label: 'Values',
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        helper:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        keydown: this.onKeyDown.bind(this, 'values'),
      },
    },
    {
      property: 'perfil',
      label: 'Perfil',
      editProperties: {
        componentEditable: 'multiselect',
        options: [
          { value: 1, label: 'RH' },
          { value: 2, label: 'Almoxarifado' },
          { value: 3, label: 'Vendedor' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        controlValueWithLabel: true,
        required: true
      },
    },
    {
      property: 'state',
      label: 'Estado',
      editProperties: {
        componentEditable: 'combo',
        required: false,
        removeInitialFilter: true,
        options: [
          { value: 'MG', label: 'Minas Gerais' },
          { value: 'RJ', label: 'Rio de Janeiro' },
          { value: 'SC', label: 'Santa Catarina' },
          { value: 'SP', label: 'S\xE3o Paulo' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        controlValueWithLabel: true,
      },
    },
    {
      property: 'city',
      label: 'cidade',
      editProperties: {
        componentEditable: 'combo',
        required: false,
        removeInitialFilter: true,
        disabled: false,
        fieldLabel: 'value',
        fieldValue: 'value',
      },
    },
  ];

  itemsUpdated: Array<any> = [];
  disabledIncludeButton!: boolean;
  gridRowsActionsWithItems!: ThfGridRowActions;
  myForm!: FormGroup;

  ngOnInit() {
    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        this.myForm = new FormGroup({
          name: new FormControl(dataItem.name),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          values: new FormControl(dataItem.values, [Validators.required]),
          perfil: new FormControl(dataItem.perfil, [Validators.required]),
          state: new FormControl(dataItem.state),
          city: new FormControl(dataItem.city),
        });
        this.handleStateAndCity(this.myForm?.controls['state'].value);
        return this.myForm;
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
      validateField: this.onValidate.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
    const city = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (city?.editProperties) {
      city.editProperties.disabled = true;
    }
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.disabledIncludeButton = false;
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    const city = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (city?.editProperties) {
      city.editProperties.disabled = true;
    }
    return true;
  }

  onValidate(value: any, columnProperty: any) {
    console.log('onValidateField:', value, columnProperty);

    if (columnProperty === 'state') {
      this.myForm?.controls['city'].setValue(null);
      const stateValue = this.myForm.controls['state'].value;
      const cityColumn = this.columnWithItems.find(
        (column) => column.property === 'city'
      );

      if (!cityColumn?.editProperties) {
        return true;
      }

      if (!stateValue) {
        cityColumn.editProperties.disabled = true;
      } else {
        cityColumn.editProperties.disabled = false;
        cityColumn.editProperties.options = this.getCity(stateValue.value);

        this.myForm?.controls['city'].setValue('');
      }
    }

    return true;
  }

  handleStateAndCity(value: any) {
    const cityColumn = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (!cityColumn?.editProperties) {
      return;
    }
    if (value) {
      cityColumn.editProperties.options = this.getCity(value);
      cityColumn.editProperties.disabled = false;
    } else {
      cityColumn.editProperties.disabled = true;
    }
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  getChangedItems() {
    return this.thfGrid?.getChangedItems() || [];
  }

  getLabelChangedItems() {
    return JSON.stringify(this.thfGrid?.getChangedItems() || [], null, 2);
  }

  finishEditMode() {
    this.thfGrid.cleanRowActionsMode();
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      if (property === 'otherStatus') {
        this.multiselect.showAdditionalHelp();
        return;
      } else if (property === 'name') {
        this.input.showAdditionalHelp();
        return;
      }
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  private getCity(state: string) {
    const city = {
      MG: [
        { value: 'Belo Horizonte' },
        { value: 'Contagem' },
        { value: 'Juiz de Fora' },
        { value: 'Uberl\xE2ndia' },
      ],
      RJ: [
        { value: 'Duque de Caxias' },
        { value: 'Nova Igua\xE7u' },
        { value: 'Rio de Janeiro' },
        { value: 'S\xE3o Gon\xE7alo' },
      ],
      SP: [
        { value: 'Campinas' },
        { value: 'Guarulhos' },
        { value: 'S\xE3o Bernardo do Campo' },
        { value: 'S\xE3o Paulo' },
      ],
      SC: [
        { value: 'Balne\xE1rio Cambori\xFA' },
        { value: 'Brusque' },
        { value: 'Lages' },
        { value: 'Palho\xE7a' },
      ],
    };

    return city[state as keyof typeof city] || [];
  }
}`;var tn=["modal"],nn=["gridComponent"],on=["multiselect"],an=["input"],rn=(d,l)=>({name:d,perfil:l}),ln=()=>({value:1,label:"RH"}),dn=()=>({value:2,label:"Almoxarifado"}),mn=()=>({value:3,label:"Vendedor"}),sn=(d,l,m)=>[d,l,m];function pn(d,l){if(d&1){let m=I();i(0,"po-input",14,4),T("p-keydown",function(n){u(m);let a=x();return E(a.onKeyDown("name",n))}),t()}if(d&2){let m=l.formControl;c("formControl",m)("p-error-pattern","Obrigat\xF3rio")("p-required",!0)("p-required-field-error-message",!0)}}function cn(d,l){if(d&1){let m=I();i(0,"po-multiselect",15,5),T("p-keydown",function(n){u(m);let a=x();return E(a.onKeyDown("otherStatus",n))}),t()}if(d&2){let m=l.formControl;c("formControl",m)("p-field-error-message","Obrigat\xF3rio")("p-required",!0)("p-additional-help-tooltip","Marque um ou mais status, conforme necess\xE1rio.")("p-options",it(11,sn,J(8,ln),J(9,dn),J(10,mn)))("p-field-label","label")("p-field-value","value")("p-control-value-with-label",!0)}}function un(d,l){if(d&1&&(i(0,"div",16)(1,"pre"),e(2),t()()),d&2){let m=x();p(2),be(m.getLabelChangedItems())}}var Nt=(()=>{let l=class l{constructor(){this.htmlCode=Ot,this.tsCode=Gt,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],perfil:[1],state:{value:"SC",label:"Santa Catarina"},city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],perfil:[2],state:{value:"SC",label:"Santa Catarina"},city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],perfil:[2],state:{value:"RJ",label:"Rio de Janeiro"},city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],perfil:[1],state:null,city:null}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome",editProperties:{componentEditable:"input",required:!0}},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"values",label:"Values",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",keydown:this.onKeyDown.bind(this,"values")}},{property:"perfil",label:"Perfil",editProperties:{componentEditable:"multiselect",options:[{value:1,label:"RH"},{value:2,label:"Almoxarifado"},{value:3,label:"Vendedor"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0,required:!0}},{property:"state",label:"Estado",editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,options:[{value:"MG",label:"Minas Gerais"},{value:"RJ",label:"Rio de Janeiro"},{value:"SC",label:"Santa Catarina"},{value:"SP",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0}},{property:"city",label:"cidade",editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,disabled:!1,fieldLabel:"value",fieldValue:"value"}}],this.itemsUpdated=[]}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!1,actionEdit:(r,n)=>(n==="include"&&!r.id&&(console.log("mode: ",n),this.disabledIncludeButton=!0,r.id=r.$uuidThfIncluded,r.dependents=[],this.currentIdItem=r.id),this.myForm=new H({name:new h(r.name),status:new h(r.status,[L.min(1)]),values:new h(r.values,[L.required]),perfil:new h(r.perfil,[L.required]),state:new h(r.state),city:new h(r.city)}),this.handleStateAndCity(this.myForm?.controls.state.value),this.myForm),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),validateField:this.onValidate.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(r){console.log("onAfterSave(new): ",r);let n=this.columnWithItems.find(a=>a.property==="city");n?.editProperties&&(n.editProperties.disabled=!0)}onBeforeSave(r,n){return console.log("before new value: ",r),console.log("before old value: ",n),!0}onBeforeInsert(r){console.log("before insert new value: ",r),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,r];let n=this.columnWithItems.find(a=>a.property==="city");return n?.editProperties&&(n.editProperties.disabled=!0),!0}onValidate(r,n){if(console.log("onValidateField:",r,n),n==="state"){this.myForm?.controls.city.setValue(null);let a=this.myForm.controls.state.value,s=this.columnWithItems.find(S=>S.property==="city");if(!s?.editProperties)return!0;a?(s.editProperties.disabled=!1,s.editProperties.options=this.getCity(a.value),this.myForm?.controls.city.setValue("")):s.editProperties.disabled=!0}return!0}handleStateAndCity(r){let n=this.columnWithItems.find(a=>a.property==="city");n?.editProperties&&(r?(n.editProperties.options=this.getCity(r),n.editProperties.disabled=!1):n.editProperties.disabled=!0)}onBeforeRemove(r){return!0}onAfterRemove(r){return console.log("afterRemove: ",r),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(r,n){if(n.code==="F9"){if(r==="otherStatus"){this.multiselect.showAdditionalHelp();return}else if(r==="name"){this.input.showAdditionalHelp();return}this.thfGrid.showAdditionalHelp(r)}}getCity(r){return{MG:[{value:"Belo Horizonte"},{value:"Contagem"},{value:"Juiz de Fora"},{value:"Uberl\xE2ndia"}],RJ:[{value:"Duque de Caxias"},{value:"Nova Igua\xE7u"},{value:"Rio de Janeiro"},{value:"S\xE3o Gon\xE7alo"}],SP:[{value:"Campinas"},{value:"Guarulhos"},{value:"S\xE3o Bernardo do Campo"},{value:"S\xE3o Paulo"}],SC:[{value:"Balne\xE1rio Cambori\xFA"},{value:"Brusque"},{value:"Lages"},{value:"Palho\xE7a"}]}[r]||[]}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-row-actions-doc"]],viewQuery:function(n,a){if(n&1&&(A(tn,7),A(nn,5),A(on,5),A(an,5)),n&2){let s;q(s=k())&&(a.poModal=s.first),q(s=k())&&(a.thfGrid=s.first),q(s=k())&&(a.multiselect=s.first),q(s=k())&&(a.input=s.first)}},standalone:!1,decls:17,vars:16,consts:[["gridComponent",""],["nameTemplate",""],["perfilTemplate",""],["modal",""],["input",""],["multiselect",""],[1,"po-font-text-large-bold"],[1,"po-row","po-mb-2"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-single-select","t-items","t-columns","t-grid-row-actions","t-actions-right","t-sortable","t-custom-templates"],["p-title","Itens que foram alterados"],["class","code",4,"ngIf"],[3,"htmlCode","tsCode"],["p-additional-help-tooltip","Informe pelo menos o primeiro nome.","p-placeholder","Informe o nome",3,"p-keydown","formControl","p-error-pattern","p-required","p-required-field-error-message"],[3,"p-keydown","formControl","p-field-error-message","p-required","p-additional-help-tooltip","p-options","p-field-label","p-field-value","p-control-value-with-label"],[1,"code"]],template:function(n,a){if(n&1){let s=I();i(0,"po-container")(1,"span",6),e(2,"Edi\xE7\xE3o flu\xEDda"),t(),o(3,"po-divider"),i(4,"div",7)(5,"po-button",8),T("p-click",function(){return u(s),E(a.finishEditMode())}),t(),i(6,"po-button",9),T("p-click",function(){return u(s),E(a.poModal.open())}),t()(),o(7,"thf-grid",10,0),G(9,pn,2,4,"ng-template",null,1,Z)(11,cn,2,15,"ng-template",null,2,Z),i(13,"po-modal",11,3),G(15,un,3,1,"div",12),t(),o(16,"app-code-accordion-doc",13),t()}if(n&2){let s,S,C=W(10),Ci=W(12);p(6),c("p-disabled",((s=a.getChangedItems())==null?null:s.length)===0),p(),c("t-height",400)("t-selectable",!0)("t-single-select",!0)("t-items",a.items)("t-columns",a.columnWithItems)("t-grid-row-actions",a.gridRowsActionsWithItems)("t-actions-right",!0)("t-sortable",!0)("t-custom-templates",Pe(13,rn,C,Ci)),p(8),c("ngIf",(S=a.getChangedItems())==null?null:S.length),p(),c("htmlCode",a.htmlCode)("tsCode",a.tsCode)}},dependencies:[he,B,ct,U,y,P,de,Fe,ke,M,w],styles:[".code[_ngcontent-%COMP%]{padding:1rem;background-color:#000;color:#adff2f;margin-top:.5rem;margin-left:2rem;border-radius:.5rem}"]});let d=l;return d})();var Qt=`<div class="po-row po-mb-2">
  <po-button
    class="po-mr-2"
    p-label="Finaliza modo edi\xE7\xE3o"
    (p-click)="finishEditMode()"
  ></po-button>
  <po-button
    p-label="Get itens alterados"
    [p-disabled]="getChangedItems()?.length === 0"
    (p-click)="poModal.open()"
  ></po-button>
</div>

<thf-grid
  #gridComponent
  [t-height]="400"
  [t-selectable]="true"
  [t-items]="items"
  [t-columns]="columnWithItems"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-aggregates]="aggregatesDescriptor"
  [t-show-footer-aggregates]="true"
  [t-actions]="lineActions"
  [t-actions-right]="true"
  [t-sortable]="true"
  [t-action-pdf]="true"
  [t-action-excel]="true"
  [t-custom-actions]="customBulkActions"
/>

<po-modal #modal p-title="Itens que foram alterados">
  <div class="code" *ngIf="getChangedItems()?.length">
    <pre>{{ getLabelChangedItems() }}</pre>
  </div>
</po-modal>

<po-modal
  #bulkEditModal
  p-title="Edi\xE7\xE3o em lote (a\xE7\xE3o customizada)"
  [p-primary-action]="bulkEditModalConfirm"
>
  <po-multiselect [(ngModel)]="editColumnsFilterValues" name="editColumnsFilterValues" p-label="Propriedades para Editar" [p-options]="editColumnsFilter"></po-multiselect>

  @for (column of editColumnsFilter; track column.property) {
    <ng-container *ngIf="editColumnsFilterValues.includes(column.property)">
      @switch (column.editProperties.componentEditable) {
        @case ('combo') {
          <po-combo
            p-label="{{ column.label }}"
            [(ngModel)]="column.valueModel"
            [p-options]="column.editProperties.options"
            [p-required]="column.required"
            [p-placeholder]="column.editProperties.placeholder"
            [p-disabled]="column.editProperties.disabled"
          />
        }
        @case ('decimal') {
          <po-decimal
            p-label="{{ column.label }}"
            [(ngModel)]="column.valueModel"
            [p-decimals-length]="column.editProperties.decimalsLength"
            [p-required]="column.required"
            [p-placeholder]="column.editProperties.placeholder"
            [p-disabled]="column.editProperties.disabled"
          />
        }
        @default {
          <po-input
            p-label="{{ column.label }}"
            [(ngModel)]="column.valueModel"
            [p-required]="column.required"
            [p-placeholder]="column.editProperties.placeholder"
            [p-disabled]="column.editProperties.disabled"
          />
        }
      }
    </ng-container>
  }
</po-modal>`,Bt=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PoDropdownAction, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import {
  ThfAggregateDescriptor,
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
  ThfTableAction,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-editing-fluid-currency-doc',
  templateUrl: './thf-grid-editing-fluid-currency-doc.component.html',
  styleUrls: ['./thf-grid-editing-fluid-currency-doc.component.css'],
  standalone: false,
})
export class ThfGridEditingFluidCurrencyDocComponent {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  @ViewChild('bulkEditModal', { static: true }) bulkEditModal!: PoModalComponent;

  items = [
    {
      id: 11234,
      country: 'Brazil',
      value: 1000.0,
      value_pt: 1000.0,
      value_en: 1000.0,
      value_ru: 1000.0,
      value_es: 1000.0,
      value_edit_pt: 1000.0,
      value_edit_en: 1000.0,
      value_edit_ru: 1000.0,
      value_edit_es: 1000.0,
      destination: 'Rio de Janeiro',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 22467,
      country: 'France',
      value: 5000.0,
      value_pt: 5000.0,
      value_en: 5000.0,
      value_ru: 5000.0,
      value_es: 5000.0,
      value_edit_pt: 5000.0,
      value_edit_en: 5000.0,
      value_edit_ru: 5000.0,
      value_edit_es: 5000.0,
      destination: 'Paris',
      status: 'closed',
      region: 'Alps',
    },
    {
      id: 40670,
      country: 'Senegal',
      value: 3200.0,
      value_pt: 3200.0,
      value_en: 3200.0,
      value_ru: 3200.0,
      value_es: 3200.0,
      value_edit_pt: 3200.0,
      value_edit_en: 3200.0,
      value_edit_ru: 3200.0,
      value_edit_es: 3200.0,
      destination: 'Dakar',
      status: 'closed',
      region: 'Western Africa',
    },
    {
      id: 34679,
      country: 'Portugal',
      value: 5500.0,
      value_pt: 5500.0,
      value_en: 5500.0,
      value_ru: 5500.0,
      value_es: 5500.0,
      value_edit_pt: 5500.0,
      value_edit_en: 5500.0,
      value_edit_ru: 5500.0,
      value_edit_es: 5500.0,
      destination: 'Lisbon',
      status: 'closed',
      region: 'Mediterranean',
    },
    {
      id: 49000,
      country: 'Russia',
      value: 6700.0,
      value_pt: 6700.0,
      value_en: 6700.0,
      value_ru: 6700.0,
      value_es: 6700.0,
      value_edit_pt: 6700.0,
      value_edit_en: 6700.0,
      value_edit_ru: 6700.0,
      value_edit_es: 6700.0,
      destination: 'Moscow',
      status: 'reserved',
      region: 'Caucasus',
    },
    {
      id: 48999,
      country: 'United States',
      value: 2700.49,
      value_pt: 2700.49,
      value_en: 2700.49,
      value_ru: 2700.49,
      value_es: 2700.49,
      value_edit_pt: 2700.49,
      value_edit_en: 2700.49,
      value_edit_ru: 2700.49,
      value_edit_es: 2700.49,
      destination: 'Los Angeles',
      status: 'reserved',
      region: 'North America',
    },
    {
      id: 54563,
      country: 'Chile',
      value: 2000.0,
      value_pt: 2000.0,
      value_en: 2000.0,
      value_ru: 2000.0,
      value_es: 2000.0,
      value_edit_pt: 2000.0,
      value_edit_en: 2000.0,
      value_edit_ru: 2000.0,
      value_edit_es: 2000.0,
      destination: 'Cusco',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 64568,
      country: 'Mexico',
      value: 2100.0,
      value_pt: 2100.0,
      value_en: 2100.0,
      value_ru: 2100.0,
      value_es: 2100.0,
      value_edit_pt: 2100.0,
      value_edit_en: 2100.0,
      value_edit_ru: 2100.0,
      value_edit_es: 2100.0,
      destination: 'Mexico City',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 75456,
      country: 'Ireland',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      value_edit_pt: 6300.0,
      value_edit_en: 6300.0,
      value_edit_ru: 6300.0,
      value_edit_es: 6300.0,
      destination: 'Cork',
      status: 'reserved',
      region: 'British Isle',
    },
    {
      id: 23445,
      country: 'South Africa',
      value: 1900.0,
      value_pt: 1900.0,
      value_en: 1900.0,
      value_ru: 1900.0,
      value_es: 1900.0,
      value_edit_pt: 1900.0,
      value_edit_en: 1900.0,
      value_edit_ru: 1900.0,
      value_edit_es: 1900.0,
      destination: 'Cape Town',
      status: 'available',
      region: 'Southern Africa',
    },
    {
      id: 19238,
      country: 'Australia',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      value_edit_pt: 6300.0,
      value_edit_en: 6300.0,
      value_edit_ru: 6300.0,
      value_edit_es: 6300.0,
      destination: 'Sydney',
      status: 'reserved',
      region: 'Australasia',
    },
    {
      id: 85456,
      country: 'Japan',
      value: 5900.0,
      value_pt: 5900.0,
      value_en: 5900.0,
      value_ru: 5900.0,
      value_es: 5900.0,
      value_edit_pt: 5900.0,
      value_edit_en: 5900.0,
      value_edit_ru: 5900.0,
      value_edit_es: 5900.0,
      destination: 'Tokio',
      status: 'available',
      region: 'East Asia',
    },
    {
      id: 94565,
      country: 'China',
      value: 2900.0,
      value_pt: 2900.0,
      value_en: 2900.0,
      value_ru: 2900.0,
      value_es: 2900.0,
      value_edit_pt: 2900.0,
      value_edit_en: 2900.0,
      value_edit_ru: 2900.0,
      value_edit_es: 2900.0,
      destination: 'Beijing',
      status: 'available',
      region: 'East Asia',
    },
    {
      id: 32330,
      country: 'England',
      value: 2090.5,
      value_pt: 2090.5,
      value_en: 2090.5,
      value_ru: 2090.5,
      value_es: 2090.5,
      value_edit_pt: 2090.5,
      value_edit_en: 2090.5,
      value_edit_ru: 2090.5,
      value_edit_es: 2090.5,
      destination: 'London',
      status: 'available',
      region: 'British Isle',
    },
    {
      id: 14560,
      country: 'Canada',
      value: 2090.5,
      value_pt: 2090.5,
      value_en: 2090.5,
      value_ru: 2090.5,
      value_es: 2090.5,
      value_edit_pt: 2090.5,
      value_edit_en: 2090.5,
      value_edit_ru: 2090.5,
      value_edit_es: 2090.5,
      destination: 'Quebec',
      status: 'available',
      region: 'North America',
    },
    {
      id: 93800,
      country: 'Iceland',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      value_edit_pt: 6300.0,
      value_edit_en: 6300.0,
      value_edit_ru: 6300.0,
      value_edit_es: 6300.0,
      destination: 'Reykjav\xEDk',
      status: 'available',
      region: 'Nordics',
    },
    {
      id: 34239,
      country: 'Germany',
      value: 3070.5,
      value_pt: 3070.5,
      value_en: 3070.5,
      value_ru: 3070.5,
      value_es: 3070.5,
      value_edit_pt: 3070.5,
      value_edit_en: 3070.5,
      value_edit_ru: 3070.5,
      value_edit_es: 3070.5,
      destination: 'Berlin',
      status: 'available',
      region: 'Danube',
    },
    {
      id: 45611,
      country: 'Argentina',
      value: 3500.5,
      value_pt: 3500.5,
      value_en: 3500.5,
      value_ru: 3500.5,
      value_es: 3500.5,
      value_edit_pt: 3500.5,
      value_edit_en: 3500.5,
      value_edit_ru: 3500.5,
      value_edit_es: 3500.5,
      destination: 'Ushuaia',
      status: 'reserved',
      region: 'Latin America',
    },
  ];
  currentIdItem: any;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'available', color: 'color-11', label: 'Available' },
        { value: 'reserved', color: 'color-08', label: 'Reserved' },
        { value: 'closed', color: 'color-07', label: 'Closed' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 'available', label: 'Available' },
          { value: 'reserved', label: 'Reserved' },
          { value: 'closed', label: 'Closed' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    },
    {
      property: 'region',
      label: 'Region',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe a regi\xE3o referida.',
        keydown: this.onKeyDown.bind(this, 'region'),
      },
    },
    {
      property: 'country',
      label: 'Country',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o pa\xEDs referido.',
        keydown: this.onKeyDown.bind(this, 'country'),
      },
    },
    {
      property: 'destination',
      label: 'Destination',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o destino dentro do pa\xEDs informado.',
        keydown: this.onKeyDown.bind(this, 'destination'),
      },
    },
    {
      property: 'value',
      label: 'Value',
      type: 'currency',
      format: 'USD',
      width: 220,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_en',
      label: 'Value (en)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'en',
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_pt',
      label: 'Value (pt)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'pt',
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_ru',
      label: 'Value (ru)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'ru',
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_es',
      label: 'Value (es)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'es',
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_edit_en',
      label: 'Value Edit (en)',
      type: 'currency',
      format: 'USD',
      width: 220,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'en'
      },
    },
    {
      property: 'value_edit_pt',
      label: 'Value Edit (pt)',
      type: 'currency',
      format: 'USD',
      width: 220,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'pt'
      },
    },
    {
      property: 'value_edit_ru',
      label: 'Value Edit (ru)',
      type: 'currency',
      format: 'USD',
      width: 220,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'ru'
      },
    },
    {
      property: 'value_edit_es',
      label: 'Value Edit (es)',
      type: 'currency',
      format: 'USD',
      width: 220,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'es'
      },
    },
  ];

  aggregatesDescriptor: Array<ThfAggregateDescriptor> = [
    { field: 'value', aggregate: 'sum', label: 'Total' },
    { field: 'value_en', aggregate: 'sum', label: 'Total (en)' },
    { field: 'value_pt', aggregate: 'sum', label: 'Total (pt)' },
    { field: 'value_ru', aggregate: 'sum', label: 'Total (ru)' },
    { field: 'value_es', aggregate: 'sum', label: 'Total (es)' },
    { field: 'value_edit_en', aggregate: 'sum', label: 'Total (en)' },
    { field: 'value_edit_pt', aggregate: 'sum', label: 'Total (pt)' },
    { field: 'value_edit_ru', aggregate: 'sum', label: 'Total (ru)' },
    { field: 'value_edit_es', aggregate: 'sum', label: 'Total (es)' },
  ];

  itemsUpdated: Array<any> = [];
  disabledIncludeButton!: boolean;
  gridRowsActionsWithItems!: ThfGridRowActions;
  lineActions: Array<ThfTableAction> = [
    {
      label: 'Detalhes',
      action: (e: any) => {
        this.poNotificationService.success('Item ' + e.id + ' com destino a ' + e.destination + ' no valor de ' + e.value)
      },
      icon: 'ICON_INFO'
    }
  ];

  customBulkActions: Array<PoDropdownAction> = [
    { label: 'Editar selecionados (custom action)', action: this.editSelected.bind(this) },
    { label: 'Excluir selecionados (custom action)', action: this.bulkDelete.bind(this) }
  ]

  editColumnsFilter: Array<any> = [];
  editColumnsFilterValues: Array<string> = [];

  bulkEditModalConfirm: PoModalAction = {
    label: 'Confirmar',
    action: this.bulkEdit.bind(this)
  };

  constructor(private readonly poNotificationService: PoNotificationService) {}

  ngOnInit() {
    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        return new FormGroup({
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          region: new FormControl(dataItem.region, [Validators.required]),
          country: new FormControl(dataItem.country, [Validators.required]),
          destination: new FormControl(dataItem.destination, [Validators.required]),
          value: new FormControl(dataItem.value, [Validators.required]),
          value_en: new FormControl(dataItem.value_en, [Validators.required]),
          value_pt: new FormControl(dataItem.value_pt, [Validators.required]),
          value_ru: new FormControl(dataItem.value_ru, [Validators.required]),
          value_es: new FormControl(dataItem.value_es, [Validators.required]),
          value_edit_en: new FormControl(dataItem.value_edit_en, [Validators.required]),
          value_edit_pt: new FormControl(dataItem.value_edit_pt, [Validators.required]),
          value_edit_ru: new FormControl(dataItem.value_edit_ru, [Validators.required]),
          value_edit_es: new FormControl(dataItem.value_edit_es, [Validators.required]),
        });
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeSaveSubItems(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.disabledIncludeButton = false;
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    return true;
  }

  onBeforeInsertSubItems(newValue: { id: any; $uuidThfIncluded: any }) {
    newValue.id = newValue.$uuidThfIncluded;
    const item = this.itemsUpdated.find(
      (item) => item.id === this.currentIdItem
    );
    item.dependents = item.dependents
      ? [...item.dependents, newValue]
      : [newValue];
    return true;
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  getChangedItems() {
    return this.thfGrid?.getChangedItems() || [];
  }

  getLabelChangedItems() {
    return JSON.stringify(this.thfGrid?.getChangedItems() || [], null, 2);
  }

  finishEditMode() {
    this.thfGrid.cleanRowActionsMode();
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  editSelected() {
    const editableColumns = this.columnWithItems.filter(
      (column) => ['status', 'value'].includes(column.property)
    );
    
    this.editColumnsFilter = editableColumns.map((column) => ({
      label: column.label,
      value: column.property,
      property: column.property,
      valueModel: '',
      required: column.editProperties?.required,
      editProperties: column.editProperties,
    }));
      
    this.bulkEditModal.open();
  }

  bulkEdit() {
    const selectedItems = this.thfGrid.getSelectedRows();

    const updatedColumns =
      this.editColumnsFilter
        .filter(item => this.editColumnsFilterValues.includes(item.property))
        .filter(item => item.valueModel !== '');

    for (const updatedColumn of updatedColumns) {
      for (const item of selectedItems) {
        item[updatedColumn.property] = updatedColumn.valueModel;
        item.$edited = true;
        this.thfGrid.updateItem(item, item);
        this.thfGrid.unselectRowItem(item);
      }

      updatedColumn.valueModel = '';
    }

    this.editColumnsFilterValues = [];

    this.bulkEditModal.close();
  }

  bulkDelete() {
    const selectedItems = this.thfGrid.getSelectedRows();

    for (const item of selectedItems) {
      item.$removed = true;
      this.thfGrid.updateItem(item, item);
      this.thfGrid.unselectRowItem(item);
    }

    this.poNotificationService.success('Itens exclu\xEDdos com sucesso!');
  }
}
`;var xn=["modal"],Sn=["gridComponent"],bn=["bulkEditModal"],hn=(d,l)=>l.property;function fn(d,l){if(d&1&&(i(0,"div",13)(1,"pre"),e(2),t()()),d&2){let m=x();p(2),be(m.getLabelChangedItems())}}function vn(d,l){if(d&1){let m=I();i(0,"po-combo",18),g("ngModelChange",function(n){u(m);let a=x(2).$implicit;return v(a.valueModel,n)||(a.valueModel=n),E(n)}),t()}if(d&2){let m=x(2).$implicit;c("p-label",Te(m.label)),f("ngModel",m.valueModel),c("p-options",m.editProperties.options)("p-required",m.required)("p-placeholder",m.editProperties.placeholder)("p-disabled",m.editProperties.disabled)}}function gn(d,l){if(d&1){let m=I();i(0,"po-decimal",19),g("ngModelChange",function(n){u(m);let a=x(2).$implicit;return v(a.valueModel,n)||(a.valueModel=n),E(n)}),t()}if(d&2){let m=x(2).$implicit;c("p-label",Te(m.label)),f("ngModel",m.valueModel),c("p-decimals-length",m.editProperties.decimalsLength)("p-required",m.required)("p-placeholder",m.editProperties.placeholder)("p-disabled",m.editProperties.disabled)}}function yn(d,l){if(d&1){let m=I();i(0,"po-input",20),g("ngModelChange",function(n){u(m);let a=x(2).$implicit;return v(a.valueModel,n)||(a.valueModel=n),E(n)}),t()}if(d&2){let m=x(2).$implicit;c("p-label",Te(m.label)),f("ngModel",m.valueModel),c("p-required",m.required)("p-placeholder",m.editProperties.placeholder)("p-disabled",m.editProperties.disabled)}}function Cn(d,l){if(d&1&&(Xe(0),xe(1,vn,1,7,"po-combo",15)(2,gn,1,7,"po-decimal",16)(3,yn,1,6,"po-input",17),Ye()),d&2){let m,r=x().$implicit;p(),Se((m=r.editProperties.componentEditable)==="combo"?1:m==="decimal"?2:3)}}function Tn(d,l){if(d&1&&G(0,Cn,4,1,"ng-container",14),d&2){let m=l.$implicit,r=x();c("ngIf",r.editColumnsFilterValues.includes(m.property))}}var Ht=(()=>{let l=class l{constructor(r){this.poNotificationService=r,this.htmlCode=Qt,this.tsCode=Bt,this.items=[{id:11234,country:"Brazil",value:1e3,value_pt:1e3,value_en:1e3,value_ru:1e3,value_es:1e3,value_edit_pt:1e3,value_edit_en:1e3,value_edit_ru:1e3,value_edit_es:1e3,destination:"Rio de Janeiro",status:"available",region:"Latin America"},{id:22467,country:"France",value:5e3,value_pt:5e3,value_en:5e3,value_ru:5e3,value_es:5e3,value_edit_pt:5e3,value_edit_en:5e3,value_edit_ru:5e3,value_edit_es:5e3,destination:"Paris",status:"closed",region:"Alps"},{id:40670,country:"Senegal",value:3200,value_pt:3200,value_en:3200,value_ru:3200,value_es:3200,value_edit_pt:3200,value_edit_en:3200,value_edit_ru:3200,value_edit_es:3200,destination:"Dakar",status:"closed",region:"Western Africa"},{id:34679,country:"Portugal",value:5500,value_pt:5500,value_en:5500,value_ru:5500,value_es:5500,value_edit_pt:5500,value_edit_en:5500,value_edit_ru:5500,value_edit_es:5500,destination:"Lisbon",status:"closed",region:"Mediterranean"},{id:49e3,country:"Russia",value:6700,value_pt:6700,value_en:6700,value_ru:6700,value_es:6700,value_edit_pt:6700,value_edit_en:6700,value_edit_ru:6700,value_edit_es:6700,destination:"Moscow",status:"reserved",region:"Caucasus"},{id:48999,country:"United States",value:2700.49,value_pt:2700.49,value_en:2700.49,value_ru:2700.49,value_es:2700.49,value_edit_pt:2700.49,value_edit_en:2700.49,value_edit_ru:2700.49,value_edit_es:2700.49,destination:"Los Angeles",status:"reserved",region:"North America"},{id:54563,country:"Chile",value:2e3,value_pt:2e3,value_en:2e3,value_ru:2e3,value_es:2e3,value_edit_pt:2e3,value_edit_en:2e3,value_edit_ru:2e3,value_edit_es:2e3,destination:"Cusco",status:"available",region:"Latin America"},{id:64568,country:"Mexico",value:2100,value_pt:2100,value_en:2100,value_ru:2100,value_es:2100,value_edit_pt:2100,value_edit_en:2100,value_edit_ru:2100,value_edit_es:2100,destination:"Mexico City",status:"available",region:"Latin America"},{id:75456,country:"Ireland",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Cork",status:"reserved",region:"British Isle"},{id:23445,country:"South Africa",value:1900,value_pt:1900,value_en:1900,value_ru:1900,value_es:1900,value_edit_pt:1900,value_edit_en:1900,value_edit_ru:1900,value_edit_es:1900,destination:"Cape Town",status:"available",region:"Southern Africa"},{id:19238,country:"Australia",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Sydney",status:"reserved",region:"Australasia"},{id:85456,country:"Japan",value:5900,value_pt:5900,value_en:5900,value_ru:5900,value_es:5900,value_edit_pt:5900,value_edit_en:5900,value_edit_ru:5900,value_edit_es:5900,destination:"Tokio",status:"available",region:"East Asia"},{id:94565,country:"China",value:2900,value_pt:2900,value_en:2900,value_ru:2900,value_es:2900,value_edit_pt:2900,value_edit_en:2900,value_edit_ru:2900,value_edit_es:2900,destination:"Beijing",status:"available",region:"East Asia"},{id:32330,country:"England",value:2090.5,value_pt:2090.5,value_en:2090.5,value_ru:2090.5,value_es:2090.5,value_edit_pt:2090.5,value_edit_en:2090.5,value_edit_ru:2090.5,value_edit_es:2090.5,destination:"London",status:"available",region:"British Isle"},{id:14560,country:"Canada",value:2090.5,value_pt:2090.5,value_en:2090.5,value_ru:2090.5,value_es:2090.5,value_edit_pt:2090.5,value_edit_en:2090.5,value_edit_ru:2090.5,value_edit_es:2090.5,destination:"Quebec",status:"available",region:"North America"},{id:93800,country:"Iceland",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Reykjav\xEDk",status:"available",region:"Nordics"},{id:34239,country:"Germany",value:3070.5,value_pt:3070.5,value_en:3070.5,value_ru:3070.5,value_es:3070.5,value_edit_pt:3070.5,value_edit_en:3070.5,value_edit_ru:3070.5,value_edit_es:3070.5,destination:"Berlin",status:"available",region:"Danube"},{id:45611,country:"Argentina",value:3500.5,value_pt:3500.5,value_en:3500.5,value_ru:3500.5,value_es:3500.5,value_edit_pt:3500.5,value_edit_en:3500.5,value_edit_ru:3500.5,value_edit_es:3500.5,destination:"Ushuaia",status:"reserved",region:"Latin America"}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"available",label:"Available"},{value:"reserved",label:"Reserved"},{value:"closed",label:"Closed"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"region",label:"Region",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe a regi\xE3o referida.",keydown:this.onKeyDown.bind(this,"region")}},{property:"country",label:"Country",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o pa\xEDs referido.",keydown:this.onKeyDown.bind(this,"country")}},{property:"destination",label:"Destination",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o destino dentro do pa\xEDs informado.",keydown:this.onKeyDown.bind(this,"destination")}},{property:"value",label:"Value",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_en",label:"Value (en)",type:"currency",format:"USD",width:220,locale:"en",editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_pt",label:"Value (pt)",type:"currency",format:"USD",width:220,locale:"pt",editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_ru",label:"Value (ru)",type:"currency",format:"USD",width:220,locale:"ru",editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_es",label:"Value (es)",type:"currency",format:"USD",width:220,locale:"es",editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_edit_en",label:"Value Edit (en)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"en"}},{property:"value_edit_pt",label:"Value Edit (pt)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"pt"}},{property:"value_edit_ru",label:"Value Edit (ru)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"ru"}},{property:"value_edit_es",label:"Value Edit (es)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"es"}}],this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"value_en",aggregate:"sum",label:"Total (en)"},{field:"value_pt",aggregate:"sum",label:"Total (pt)"},{field:"value_ru",aggregate:"sum",label:"Total (ru)"},{field:"value_es",aggregate:"sum",label:"Total (es)"},{field:"value_edit_en",aggregate:"sum",label:"Total (en)"},{field:"value_edit_pt",aggregate:"sum",label:"Total (pt)"},{field:"value_edit_ru",aggregate:"sum",label:"Total (ru)"},{field:"value_edit_es",aggregate:"sum",label:"Total (es)"}],this.itemsUpdated=[],this.lineActions=[{label:"Detalhes",action:n=>{this.poNotificationService.success("Item "+n.id+" com destino a "+n.destination+" no valor de "+n.value)},icon:"ICON_INFO"}],this.customBulkActions=[{label:"Editar selecionados (custom action)",action:this.editSelected.bind(this)},{label:"Excluir selecionados (custom action)",action:this.bulkDelete.bind(this)}],this.editColumnsFilter=[],this.editColumnsFilterValues=[],this.bulkEditModalConfirm={label:"Confirmar",action:this.bulkEdit.bind(this)}}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!1,actionEdit:(r,n)=>(n==="include"&&!r.id&&(console.log("mode: ",n),this.disabledIncludeButton=!0,r.id=r.$uuidThfIncluded,r.dependents=[],this.currentIdItem=r.id),new H({status:new h(r.status,[L.min(1)]),region:new h(r.region,[L.required]),country:new h(r.country,[L.required]),destination:new h(r.destination,[L.required]),value:new h(r.value,[L.required]),value_en:new h(r.value_en,[L.required]),value_pt:new h(r.value_pt,[L.required]),value_ru:new h(r.value_ru,[L.required]),value_es:new h(r.value_es,[L.required]),value_edit_en:new h(r.value_edit_en,[L.required]),value_edit_pt:new h(r.value_edit_pt,[L.required]),value_edit_ru:new h(r.value_edit_ru,[L.required]),value_edit_es:new h(r.value_edit_es,[L.required])})),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(r){console.log("onAfterSave(new): ",r)}onBeforeSave(r,n){return console.log("before new value: ",r),console.log("before old value: ",n),!0}onBeforeSaveSubItems(r,n){return console.log("before new value: ",r),console.log("before old value: ",n),!0}onBeforeInsert(r){return console.log("before insert new value: ",r),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,r],!0}onBeforeInsertSubItems(r){r.id=r.$uuidThfIncluded;let n=this.itemsUpdated.find(a=>a.id===this.currentIdItem);return n.dependents=n.dependents?[...n.dependents,r]:[r],!0}onBeforeRemove(r){return!0}onAfterRemove(r){return console.log("afterRemove: ",r),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(r,n){n.code==="F9"&&this.thfGrid.showAdditionalHelp(r)}editSelected(){let r=this.columnWithItems.filter(n=>["status","value"].includes(n.property));this.editColumnsFilter=r.map(n=>({label:n.label,value:n.property,property:n.property,valueModel:"",required:n.editProperties?.required,editProperties:n.editProperties})),this.bulkEditModal.open()}bulkEdit(){let r=this.thfGrid.getSelectedRows(),n=this.editColumnsFilter.filter(a=>this.editColumnsFilterValues.includes(a.property)).filter(a=>a.valueModel!=="");for(let a of n){for(let s of r)s[a.property]=a.valueModel,s.$edited=!0,this.thfGrid.updateItem(s,s),this.thfGrid.unselectRowItem(s);a.valueModel=""}this.editColumnsFilterValues=[],this.bulkEditModal.close()}bulkDelete(){let r=this.thfGrid.getSelectedRows();for(let n of r)n.$removed=!0,this.thfGrid.updateItem(n,n),this.thfGrid.unselectRowItem(n);this.poNotificationService.success("Itens exclu\xEDdos com sucesso!")}};l.\u0275fac=function(n){return new(n||l)(R(ve))},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-editing-fluid-currency-doc"]],viewQuery:function(n,a){if(n&1&&(A(xn,7),A(Sn,5),A(bn,7)),n&2){let s;q(s=k())&&(a.poModal=s.first),q(s=k())&&(a.thfGrid=s.first),q(s=k())&&(a.bulkEditModal=s.first)}},standalone:!1,decls:18,vars:20,consts:[["gridComponent",""],["modal",""],["bulkEditModal",""],[1,"po-font-text-large-bold"],[1,"po-row","po-mb-2"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-items","t-columns","t-grid-row-actions","t-aggregates","t-show-footer-aggregates","t-actions","t-actions-right","t-sortable","t-action-pdf","t-action-excel","t-custom-actions"],["p-title","Itens que foram alterados"],["class","code",4,"ngIf"],["p-title","Edi\xE7\xE3o em lote (a\xE7\xE3o customizada)",3,"p-primary-action"],["name","editColumnsFilterValues","p-label","Propriedades para Editar",3,"ngModelChange","ngModel","p-options"],[3,"htmlCode","tsCode"],[1,"code"],[4,"ngIf"],[3,"p-label","ngModel","p-options","p-required","p-placeholder","p-disabled"],[3,"p-label","ngModel","p-decimals-length","p-required","p-placeholder","p-disabled"],[3,"p-label","ngModel","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-options","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-decimals-length","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-required","p-placeholder","p-disabled"]],template:function(n,a){if(n&1){let s=I();i(0,"po-container")(1,"span",3),e(2,"Edi\xE7\xE3o Flu\xEDda com Casas Decimais e A\xE7\xF5es em Lote"),t(),o(3,"po-divider"),i(4,"div",4)(5,"po-button",5),T("p-click",function(){return u(s),E(a.finishEditMode())}),t(),i(6,"po-button",6),T("p-click",function(){return u(s),E(a.poModal.open())}),t()(),o(7,"thf-grid",7,0),i(9,"po-modal",8,1),G(11,fn,3,1,"div",9),t(),i(12,"po-modal",10,2)(14,"po-multiselect",11),g("ngModelChange",function(C){return u(s),v(a.editColumnsFilterValues,C)||(a.editColumnsFilterValues=C),E(C)}),t(),Je(15,Tn,1,1,"ng-container",null,hn),t(),o(17,"app-code-accordion-doc",12),t()}if(n&2){let s,S;p(6),c("p-disabled",((s=a.getChangedItems())==null?null:s.length)===0),p(),c("t-height",400)("t-selectable",!0)("t-items",a.items)("t-columns",a.columnWithItems)("t-grid-row-actions",a.gridRowsActionsWithItems)("t-aggregates",a.aggregatesDescriptor)("t-show-footer-aggregates",!0)("t-actions",a.lineActions)("t-actions-right",!0)("t-sortable",!0)("t-action-pdf",!0)("t-action-excel",!0)("t-custom-actions",a.customBulkActions),p(4),c("ngIf",(S=a.getChangedItems())==null?null:S.length),p(),c("p-primary-action",a.bulkEditModalConfirm),p(2),f("ngModel",a.editColumnsFilterValues),c("p-options",a.editColumnsFilter),p(),Ze(a.editColumnsFilter),p(2),c("htmlCode",a.htmlCode)("tsCode",a.tsCode)}},dependencies:[he,B,K,U,y,P,gt,yt,de,Fe,ke,M,w],encapsulation:2});let d=l;return d})();var Ut=(()=>{let l=class l{constructor(){this.htmlCode=`<thf-grid
  [t-items]="products"
  [t-columns]="columns"
  [t-grid-row-actions]="gridRowActions"
  [t-auto-size]="true"
  [t-actions-right]="true"
/>`,this.tsCode=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ThfGridColumn,
  ThfGridRowActions
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-dynamic-properties',
  templateUrl: './thf-grid-dynamic-properties.component.html',
  standalone: false,
})
export class ThfGridEditingInlineDocComponent {
  gridRowActions: ThfGridRowActions;
  editForm!: FormGroup;

  products = [
    { 
      id: 1, 
      status: { value: 'active', label: 'Ativo' },
      name: 'Smartphone', 
      price: 999.99, 
      discount: 0, 
    },
    { 
      id: 2, 
      status: { value: 'inactive', label: 'Inativo' },
      name: 'Tablet', 
      price: 499.99, 
      discount: 50, 
    },
    { 
      id: 3, 
      status: { value: 'active', label: 'Ativo' },
      name: 'Office Chair', 
      price: 299.99, 
      discount: 10, 
    }
  ];

  columns: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'ID',
      editProperties: {
        disabled: true
      }
    },
    {
      property: 'status',
      label: 'Status',
      editProperties: {
        componentEditable: 'combo',
        options: [
          { value: 'active', label: 'Ativo' },
          { value: 'inactive', label: 'Inativo' }
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        removeInitialFilter: true,
        controlValueWithLabel: true,
      }
    },
    {
      property: 'name',
      label: 'Nome do Produto',
      editProperties: {
        readonly: (rowData) => rowData.status === 'inactive'
      }
    },
    {
      property: 'price',
      label: 'Pre\xE7o',
      editProperties: {
        readonly: true
      }
    },
    {
      property: 'discount',
      label: 'Desconto (%)',
      editProperties: {
        disabled: (rowData) => rowData.status === 'inactive'
      }
    },
  ];

  constructor() {
    this.gridRowActions = {
      title: 'Produtos',
      actionEdit: this.onEdit.bind(this),
      validateField: this.onValidate.bind(this),
    };
  }

  onEdit(dataItem: any, mode: string) {
    console.log('Editando produto:', dataItem, 'Modo:', mode);

    this.editForm = new FormGroup({
      id: new FormControl(dataItem.id),
      name: new FormControl(dataItem.name),
      price: new FormControl(dataItem.price),
      discount: new FormControl(dataItem.discount),
      status: new FormControl(dataItem.status),
    });

    return this.editForm;
  }

  onValidate(updatedField: any, columnProperty: any) {
    console.log('onValidateField:', updatedField, columnProperty);
    return true;
  }
}`,this.products=[{id:1,status:{value:"active",label:"Ativo"},name:"Smartphone",price:999.99,discount:0},{id:2,status:{value:"inactive",label:"Inativo"},name:"Tablet",price:499.99,discount:50},{id:3,status:{value:"active",label:"Ativo"},name:"Office Chair",price:299.99,discount:10}],this.columns=[{property:"id",label:"ID",editProperties:{disabled:!0}},{property:"status",label:"Status",editProperties:{componentEditable:"combo",options:[{value:"active",label:"Ativo"},{value:"inactive",label:"Inativo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}},{property:"name",label:"Nome do Produto",editProperties:{readonly:r=>r.status==="inactive"}},{property:"price",label:"Pre\xE7o",editProperties:{readonly:!0}},{property:"discount",label:"Desconto (%)",editProperties:{disabled:r=>r.status==="inactive"}}],this.gridRowActions={title:"Produtos",actionEdit:this.onEdit.bind(this),validateField:this.onValidate.bind(this)}}onEdit(r,n){return console.log("Editando produto:",r,"Modo:",n),this.editForm=new H({id:new h(r.id),name:new h(r.name),price:new h(r.price),discount:new h(r.discount),status:new h(r.status)}),this.editForm}onValidate(r,n){return console.log("onValidateField:",r,n),!0}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-dynamic-properties"]],standalone:!1,decls:6,vars:7,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-items","t-columns","t-grid-row-actions","t-auto-size","t-actions-right"],[3,"htmlCode","tsCode"]],template:function(n,a){n&1&&(i(0,"po-container")(1,"span",0),e(2,"Edi\xE7\xE3o com Propriedades din\xE2micas"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),n&2&&(p(4),c("t-items",a.products)("t-columns",a.columns)("t-grid-row-actions",a.gridRowActions)("t-auto-size",!0)("t-actions-right",!0),p(),c("htmlCode",a.htmlCode)("tsCode",a.tsCode))},dependencies:[y,P,M,w],encapsulation:2});let d=l;return d})();var Dn=["gridComponent"],Wt=(()=>{let l=class l{constructor(){this.htmlCode=`<thf-grid
      #gridComponent
      t-spacing="extraSmall"
      t-components-size="small"
      [t-columns]="columnWithItems"a
      [t-items]="items"
      [t-height]="500"
      [t-page-size-virtual]="20"
      [t-virtual-scroll]="true"
      [t-resizable]="true"
      [t-auto-size]="true"
      [t-auto-size-on-scroll]="true"
    />`,this.tsCode=`import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ThfGridColumn,
  ThfGridComponent
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-auto-fit-scroll',
  templateUrl: './thf-grid-auto-fit-scroll.component.html',
  standalone: false,
})
export class ThfGridAutoFitScrollComponent implements OnInit {
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
    },
    {
      property: 'values',
      label: 'Values',
    },

    {
      property: 'number',
      label: 'Number',
      type: 'number',
    },
    {
      property: 'datepicker',
      label: 'datepicker',
    },
    {
      property: 'otherStatus',
      label: 'Outro Status',
    },
    {
      property: 'select',
      label: 'select',
    },
    {
      property: 'switch',
      label: 'switch',
    },
    {
      property: 'decimal',
      label: 'decimal',
      type: 'currency',
    },
    {
      property: 'checkbox',
      label: 'checkbox',
    },
    {
      property: 'valuesx',
      label: 'Valuesx',
    },
  ];

  items: any[] = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      valuesx: [1495831666871],
      otherStatus: [233],
      number: 1,
      datepicker: '1980-11-01',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      valuesx: [1495831698598],
      otherStatus: [233],
      number: 2,
      datepicker: '1980-11-02',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      valuesx: [1495832652942],
      otherStatus: [3],
      number: 3,
      datepicker: '1980-11-03',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      valuesx: [1495832683682],
      otherStatus: [3],
      number: 4,
      datepicker: '1980-11-04',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      valuesx: [1495833068596],
      otherStatus: [233],
      number: 5,
      datepicker: '1980-11-05',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      valuesx: [1495833068597],
      otherStatus: [233],
      number: 6,
      datepicker: '1980-11-06',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
  ];

  ngOnInit() {
    for (let i = 1; i <= 600; i++) {
      const prop = 'property' + i;
      this.columnWithItems.push({
        property: prop,
        label: 'Dynamic' + i,
        editProperties: { disabled: false },
      });
    }

    let itemsUpdatedNew = [];

    const baseItem = this.items[0];
    for (let i = 1; i <= 10000; i++) {
      const randomId = Date.now() + i;
      const newItem = {
        ...baseItem,
        id: randomId + i,
        name: baseItem.name +  i,
      };
      for (let j = 1; j <= 600; j++) {
        newItem['property'+j] = 'Valor'+j;
      }

      itemsUpdatedNew.push(newItem);
    }

    this.items = itemsUpdatedNew;
  }
}`,this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}]},{property:"values",label:"Values"},{property:"number",label:"Number",type:"number"},{property:"datepicker",label:"datepicker"},{property:"otherStatus",label:"Outro Status"},{property:"select",label:"select"},{property:"switch",label:"switch"},{property:"decimal",label:"decimal",type:"currency"},{property:"checkbox",label:"checkbox"},{property:"valuesx",label:"Valuesx"}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",select:"3",switch:!0,decimal:123.45,checkbox:!0}]}ngOnInit(){let r=[],n=this.items[0];for(let a=1;a<=100;a++){let s=Date.now()+a,S=Q(O({},n),{id:s+a,name:`${n.name} ${a}${a}`});r.push(S)}this.items=r}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-auto-fit-scroll"]],viewQuery:function(n,a){if(n&1&&A(Dn,5),n&2){let s;q(s=k())&&(a.thfGrid=s.first)}},standalone:!1,decls:7,vars:10,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","extraSmall","t-components-size","small",3,"t-columns","t-items","t-height","t-page-size-virtual","t-virtual-scroll","t-resizable","t-auto-size","t-auto-size-on-scroll"],[3,"htmlCode","tsCode"]],template:function(n,a){n&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando auto-size e auto-fit-on-scroll"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),n&2&&(p(4),c("t-columns",a.columnWithItems)("t-items",a.items)("t-height",500)("t-page-size-virtual",20)("t-virtual-scroll",!0)("t-resizable",!0)("t-auto-size",!0)("t-auto-size-on-scroll",!0),p(2),c("htmlCode",a.htmlCode)("tsCode",a.tsCode))},dependencies:[y,P,M,w],encapsulation:2});let d=l;return d})();var Kt=`<thf-splitter [t-disabled]="true">
  <thf-splitter-pane>
    <thf-grid
      #mainGrid
      [t-items]="mainGridItems"
      [t-columns]="mainGridColumns"
      [t-grid-row-actions]="mainGridRowsActions"
      [t-actions-right]="true"
      [t-selectable]="true"
      [t-single-select]="true"
      [t-selectable-removed]="true"
      [t-selectable-entire-line]="true"
      [t-height]="320"
      (t-selected)="handleMainGridSelection($event)"
      (t-unselected)="handleMainGridUnselection($event)"
      (t-change-row-state-filter)="onMainGridRowStateFilter($event)"
    />
  </thf-splitter-pane>
  <thf-splitter-pane>
    <thf-grid
      #childGrid
      [t-items]="mainGridSelectedItemIndex !== undefined ? mainGridItems[mainGridSelectedItemIndex].heroes : []"
      [t-columns]="childGridColumns"
      [t-grid-row-actions]="childGridRowsActions"
      [t-disabled-include-button]="childGridDisabledIncludeButton"
      [t-actions-right]="true"
      [t-selectable]="false"
      [t-single-select]="false"
      [t-height]="320"
    />
  </thf-splitter-pane>
</thf-splitter>`,$t=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PoNotificationService } from '@po-ui/ng-components';
import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-parent-detail-editing-doc',
  templateUrl: './thf-grid-parent-detail-editing.component.html',
  styleUrls: ['./thf-grid-parent-detail-editing.component.css'],
  standalone: false,
})
export class ThfGridParentDetailEditingComponent {
  @ViewChild('mainGrid', { static: false }) mainGrid!: ThfGridComponent;
  @ViewChild('childGrid', { static: false }) childGrid!: ThfGridComponent;

  mainGridTitle = 'Equipes (Tabela Pai)';
  childGridTitle = 'Her\xF3is (Tabela Filha)';

  disabledIncludeButton: boolean = false;
  currentIdItem: string | number | undefined;

  mainGridColumns: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
      width: '100px',
    },
    {
      property: 'name',
      label: 'Nome',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o nome da equipe'
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'ativo', color: 'color-11', label: 'Ativo' },
        { value: 'em-missao', color: 'color-09', label: 'Em miss\xE3o' },
        { value: 'inativo', color: 'color-06', label: 'Inativo' },
        { value: 'ferido', color: 'color-07', label: 'Ferido' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 'ativo', label: 'Ativo' },
          { value: 'em-missao', label: 'Em miss\xE3o' },
          { value: 'inativo', label: 'Inativo' },
          { value: 'ferido', label: 'Ferido' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    }
  ];
  mainGridRowsActions!: ThfGridRowActions;
  mainGridItems: Array<any> = [
    {
      id: 1,
      name: 'Vingadores',
      status: 'ativo',
      heroes: [
        { id: 11, name: 'Homem de Ferro', status: 'ativo' },
        { id: 12, name: 'Capit\xE3o Am\xE9rica', status: 'em-missao' },
        { id: 13, name: 'Thor', status: 'ativo' }
      ]
    },
    {
      id: 2,
      name: 'X-man',
      status: 'em-missao',
      heroes: [
        { id: 21, name: 'Wolverine', status: 'ativo' },
        { id: 22, name: 'Ciclope', status: 'reserva' },
        { id: 23, name: 'Jean Grey', status: 'ferido' }
      ]
    },
    {
      id: 3,
      name: 'Jovens Tit\xE3s',
      status: 'ativo',
      heroes: [
        { id: 30, name: 'Ciborgue', status: 'ativo' },
        { id: 31, name: 'Estelar', status: 'ativo' },
        { id: 32, name: 'Mutano', status: 'ativo' },
        { id: 33, name: 'Ravena', status: 'reserva' },
        { id: 34, name: 'Robin', status: 'ativo' },
      ]
    },
    {
      id: 4,
      name: 'Liga da Justi\xE7a',
      status: 'ativo',
      heroes: [
        { id: 41, name: 'Superman', status: 'ativo' },
        { id: 42, name: 'Batman', status: 'reserva' },
        { id: 43, name: 'Mulher Maravilha', status: 'em-missao' }
      ]
    }
  ];
  mainGridItemsUpdated: Array<any> = [];
  mainGridSelectedItem: any;
  mainGridSelectedItemIndex: number | undefined;

  childGridColumns: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
      width: '100px',
    },
    {
      property: 'name',
      label: 'Nome',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o nome da empresa'
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'ativo', color: 'color-11', label: 'Ativo' },
        { value: 'em-missao', color: 'color-09', label: 'Em miss\xE3o' },
        { value: 'reserva', color: 'color-08', label: 'Reserva' },
        { value: 'inativo', color: 'color-06', label: 'Inativo' },
        { value: 'ferido', color: 'color-07', label: 'Ferido' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 'ativo', label: 'Ativo' },
          { value: 'em-missao', label: 'Em miss\xE3o' },
          { value: 'reserva', label: 'Reserva' },
          { value: 'inativo', label: 'Inativo' },
          { value: 'ferido', label: 'Ferido' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    }
  ];
  childGridRowsActions!: ThfGridRowActions;
  childGridItemsUpdated: Array<any> = [];
  childGridSelectedItem: any;
  childGridDisabledIncludeButton: boolean = true;

  constructor(private readonly notificationService: PoNotificationService) {}

  ngOnInit() {
    this.mainGridRowsActions = {
      title: this.mainGridTitle,
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.heroes = [];
          this.currentIdItem = dataItem.id;
        }
        return new FormGroup({
          name: new FormControl(dataItem.name, [Validators.required]),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
        });
      },
      afterRemove: this.afterRemoveMainGrid.bind(this),
      afterUndoRemove: this.afterUndoRemoveMainGrid.bind(this)
    };

    this.mainGridItemsUpdated = [...this.mainGridItems];

    this.childGridRowsActions = {
      title: this.childGridTitle,
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.heroes = [];
          this.currentIdItem = dataItem.id;
        }
        return new FormGroup({
          name: new FormControl(dataItem.name, [Validators.required]),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
        });
      },
      change: this.changeChildGrid.bind(this),
      beforeUndoRemove: this.beforeUndoRemoveChildGrid.bind(this),
      afterRemove: this.afterRemoveChildGrid.bind(this),
      afterUndoRemove: this.afterUndoRemoveChildGrid.bind(this),
    };

    this.childGridItemsUpdated = [];
  }

  handleMainGridSelection(event: any) {
    console.log('Selected item from main grid: ', event);
    this.mainGridSelectedItem = event;
    this.mainGridSelectedItemIndex = this.mainGridItems.findIndex(item => item.id === event.id);
    this.childGridItemsUpdated = event.heroes ? [...event.heroes] : [];
    this.childGridDisabledIncludeButton = !!event.$removed;
    this.childGridRowsActions.title = this.childGridTitle + ' - ' + event.name;

    if (event.$removed) {
      this.childGrid.setRowStateFilter('removed', false, false);
    } else {
      this.childGrid.setRowStateFilter('active', false, false);
    }
  }

  handleMainGridUnselection(event?: any) {
    console.log('Unselected item from main grid: ', event);
    this.mainGridSelectedItem = {
      id: null,
      heroes: []
    };
    this.mainGridSelectedItemIndex = undefined;
    this.childGridItemsUpdated = [];
    this.childGridDisabledIncludeButton = true;
    this.childGridRowsActions.title = this.childGridTitle;
  }

  afterRemoveMainGrid(removedItem: any) {
    console.log('Removed item from main grid: ', removedItem);
    removedItem.status = 'inativo';
    removedItem.heroes.forEach((hero: any) => {
      hero.$removed = true;
      hero.status = 'inativo';
      this.childGrid.updateItem(hero, hero);
    });
  }

  afterUndoRemoveMainGrid(undoRemovedItem: any) {
    console.log('Undo removed item from main grid: ', undoRemovedItem);
    undoRemovedItem.status = 'ativo';
    undoRemovedItem.heroes.forEach((hero: any) => {
      hero.$removed = false;
      hero.status = 'ativo';
      this.childGrid.updateItem(hero, hero);
    });
  }

  beforeUndoRemoveChildGrid(undoRemovedItem: any) {
    console.log('Before undo remove item from child grid: ', undoRemovedItem);
    const isParentInactive = this.mainGridItems.find(item => item.heroes.includes(undoRemovedItem))?.$removed;
    if (isParentInactive) {
      this.notificationService.warning('N\xE3o \xE9 poss\xEDvel desfazer a remo\xE7\xE3o de um her\xF3i de um time inativo.');
      return false;
    }
    return true;
  }

  afterRemoveChildGrid(removedItem: any) {
    console.log('Removed item from child grid: ', removedItem);
    removedItem.status = 'inativo';
    this.childGrid.updateItem(removedItem, removedItem);
  }

  afterUndoRemoveChildGrid(undoRemovedItem: any) {
    console.log('Undo removed item from child grid: ', undoRemovedItem);
    undoRemovedItem.status = 'ativo';
    this.childGrid.updateItem(undoRemovedItem, undoRemovedItem);
  }

  changeChildGrid(changedItems: any) {
    console.log('Child grid change event: ', changedItems);
  }

  onMainGridRowStateFilter(filter: any) {
    // Aplica novamente a sele\xE7\xE3o do item
    if (
      this.mainGridSelectedItem !== undefined && (
        (filter === 'active' && !this.mainGridSelectedItem?.$removed) ||
        (filter === 'removed' && this.mainGridSelectedItem?.$removed)
      )
    ) {
      this.mainGrid.selectRowItem(this.mainGridSelectedItem);
    }

    this.childGrid.setRowStateFilter(filter, false, false);
  }
}
`;var qn=["mainGrid"],kn=["childGrid"],_n=()=>[],Jt=(()=>{let l=class l{constructor(r){this.notificationService=r,this.htmlCode=Kt,this.tsCode=$t,this.mainGridTitle="Equipes (Tabela Pai)",this.childGridTitle="Her\xF3is (Tabela Filha)",this.disabledIncludeButton=!1,this.mainGridColumns=[{property:"id",label:"id",editProperties:{disabled:!0},width:"100px"},{property:"name",label:"Nome",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o nome da equipe"}},{property:"status",label:"Status",type:"label",labels:[{value:"ativo",color:"color-11",label:"Ativo"},{value:"em-missao",color:"color-09",label:"Em miss\xE3o"},{value:"inativo",color:"color-06",label:"Inativo"},{value:"ferido",color:"color-07",label:"Ferido"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"ativo",label:"Ativo"},{value:"em-missao",label:"Em miss\xE3o"},{value:"inativo",label:"Inativo"},{value:"ferido",label:"Ferido"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}}],this.mainGridItems=[{id:1,name:"Vingadores",status:"ativo",heroes:[{id:11,name:"Homem de Ferro",status:"ativo"},{id:12,name:"Capit\xE3o Am\xE9rica",status:"em-missao"},{id:13,name:"Thor",status:"ativo"}]},{id:2,name:"X-man",status:"em-missao",heroes:[{id:21,name:"Wolverine",status:"ativo"},{id:22,name:"Ciclope",status:"reserva"},{id:23,name:"Jean Grey",status:"ferido"}]},{id:3,name:"Jovens Tit\xE3s",status:"ativo",heroes:[{id:30,name:"Ciborgue",status:"ativo"},{id:31,name:"Estelar",status:"ativo"},{id:32,name:"Mutano",status:"ativo"},{id:33,name:"Ravena",status:"reserva"},{id:34,name:"Robin",status:"ativo"}]},{id:4,name:"Liga da Justi\xE7a",status:"ativo",heroes:[{id:41,name:"Superman",status:"ativo"},{id:42,name:"Batman",status:"reserva"},{id:43,name:"Mulher Maravilha",status:"em-missao"}]}],this.mainGridItemsUpdated=[],this.childGridColumns=[{property:"id",label:"id",editProperties:{disabled:!0},width:"100px"},{property:"name",label:"Nome",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o nome da empresa"}},{property:"status",label:"Status",type:"label",labels:[{value:"ativo",color:"color-11",label:"Ativo"},{value:"em-missao",color:"color-09",label:"Em miss\xE3o"},{value:"reserva",color:"color-08",label:"Reserva"},{value:"inativo",color:"color-06",label:"Inativo"},{value:"ferido",color:"color-07",label:"Ferido"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"ativo",label:"Ativo"},{value:"em-missao",label:"Em miss\xE3o"},{value:"reserva",label:"Reserva"},{value:"inativo",label:"Inativo"},{value:"ferido",label:"Ferido"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}}],this.childGridItemsUpdated=[],this.childGridDisabledIncludeButton=!0}ngOnInit(){this.mainGridRowsActions={title:this.mainGridTitle,hiddenGrid:!1,actionEdit:(r,n)=>(n==="include"&&!r.id&&(console.log("mode: ",n),this.disabledIncludeButton=!0,r.id=r.$uuidThfIncluded,r.heroes=[],this.currentIdItem=r.id),new H({name:new h(r.name,[L.required]),status:new h(r.status,[L.min(1)])})),afterRemove:this.afterRemoveMainGrid.bind(this),afterUndoRemove:this.afterUndoRemoveMainGrid.bind(this)},this.mainGridItemsUpdated=[...this.mainGridItems],this.childGridRowsActions={title:this.childGridTitle,hiddenGrid:!1,actionEdit:(r,n)=>(n==="include"&&!r.id&&(console.log("mode: ",n),this.disabledIncludeButton=!0,r.id=r.$uuidThfIncluded,r.heroes=[],this.currentIdItem=r.id),new H({name:new h(r.name,[L.required]),status:new h(r.status,[L.min(1)])})),change:this.changeChildGrid.bind(this),beforeUndoRemove:this.beforeUndoRemoveChildGrid.bind(this),afterRemove:this.afterRemoveChildGrid.bind(this),afterUndoRemove:this.afterUndoRemoveChildGrid.bind(this)},this.childGridItemsUpdated=[]}handleMainGridSelection(r){console.log("Selected item from main grid: ",r),this.mainGridSelectedItem=r,this.mainGridSelectedItemIndex=this.mainGridItems.findIndex(n=>n.id===r.id),this.childGridItemsUpdated=r.heroes?[...r.heroes]:[],this.childGridDisabledIncludeButton=!!r.$removed,this.childGridRowsActions.title=this.childGridTitle+" - "+r.name,r.$removed?this.childGrid.setRowStateFilter("removed",!1,!1):this.childGrid.setRowStateFilter("active",!1,!1)}handleMainGridUnselection(r){console.log("Unselected item from main grid: ",r),this.mainGridSelectedItem={id:null,heroes:[]},this.mainGridSelectedItemIndex=void 0,this.childGridItemsUpdated=[],this.childGridDisabledIncludeButton=!0,this.childGridRowsActions.title=this.childGridTitle}afterRemoveMainGrid(r){console.log("Removed item from main grid: ",r),r.status="inativo",r.heroes.forEach(n=>{n.$removed=!0,n.status="inativo",this.childGrid.updateItem(n,n)})}afterUndoRemoveMainGrid(r){console.log("Undo removed item from main grid: ",r),r.status="ativo",r.heroes.forEach(n=>{n.$removed=!1,n.status="ativo",this.childGrid.updateItem(n,n)})}beforeUndoRemoveChildGrid(r){return console.log("Before undo remove item from child grid: ",r),this.mainGridItems.find(a=>a.heroes.includes(r))?.$removed?(this.notificationService.warning("N\xE3o \xE9 poss\xEDvel desfazer a remo\xE7\xE3o de um her\xF3i de um time inativo."),!1):!0}afterRemoveChildGrid(r){console.log("Removed item from child grid: ",r),r.status="inativo",this.childGrid.updateItem(r,r)}afterUndoRemoveChildGrid(r){console.log("Undo removed item from child grid: ",r),r.status="ativo",this.childGrid.updateItem(r,r)}changeChildGrid(r){console.log("Child grid change event: ",r)}onMainGridRowStateFilter(r){this.mainGridSelectedItem!==void 0&&(r==="active"&&!this.mainGridSelectedItem?.$removed||r==="removed"&&this.mainGridSelectedItem?.$removed)&&this.mainGrid.selectRowItem(this.mainGridSelectedItem),this.childGrid.setRowStateFilter(r,!1,!1)}};l.\u0275fac=function(n){return new(n||l)(R(ve))},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-parent-detail-editing-doc"]],viewQuery:function(n,a){if(n&1&&(A(qn,5),A(kn,5)),n&2){let s;q(s=k())&&(a.mainGrid=s.first),q(s=k())&&(a.childGrid=s.first)}},standalone:!1,decls:12,vars:21,consts:[["mainGrid",""],["childGrid",""],[1,"po-font-text-large-bold"],[3,"t-disabled"],[3,"t-selected","t-unselected","t-change-row-state-filter","t-items","t-columns","t-grid-row-actions","t-actions-right","t-selectable","t-single-select","t-selectable-removed","t-selectable-entire-line","t-height"],[3,"t-items","t-columns","t-grid-row-actions","t-disabled-include-button","t-actions-right","t-selectable","t-single-select","t-height"],[3,"htmlCode","tsCode"]],template:function(n,a){if(n&1){let s=I();i(0,"po-container")(1,"span",2),e(2,"Edi\xE7\xE3o Flu\xEDda em Grade (Pai-Filha)"),t(),o(3,"po-divider"),i(4,"thf-splitter",3)(5,"thf-splitter-pane")(6,"thf-grid",4,0),T("t-selected",function(C){return u(s),E(a.handleMainGridSelection(C))})("t-unselected",function(C){return u(s),E(a.handleMainGridUnselection(C))})("t-change-row-state-filter",function(C){return u(s),E(a.onMainGridRowStateFilter(C))}),t()(),i(8,"thf-splitter-pane"),o(9,"thf-grid",5,1),t()(),o(11,"app-code-accordion-doc",6),t()}n&2&&(p(4),c("t-disabled",!0),p(2),c("t-items",a.mainGridItems)("t-columns",a.mainGridColumns)("t-grid-row-actions",a.mainGridRowsActions)("t-actions-right",!0)("t-selectable",!0)("t-single-select",!0)("t-selectable-removed",!0)("t-selectable-entire-line",!0)("t-height",320),p(3),c("t-items",a.mainGridSelectedItemIndex!==void 0?a.mainGridItems[a.mainGridSelectedItemIndex].heroes:J(20,_n))("t-columns",a.childGridColumns)("t-grid-row-actions",a.childGridRowsActions)("t-disabled-include-button",a.childGridDisabledIncludeButton)("t-actions-right",!0)("t-selectable",!1)("t-single-select",!1)("t-height",320),p(2),c("htmlCode",a.htmlCode)("tsCode",a.tsCode))},dependencies:[y,P,M,ne,ie,w],encapsulation:2});let d=l;return d})();var Zt=`<thf-grid
  #gridComponent
  t-spacing="small"
  [t-selectable]="true"
  [t-single-select]="true"
  [t-columns]="columnWithItems"
  [t-items]="items"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-actions-right]="true"
  [t-auto-size]="false"
  [t-height]="500"
  [t-virtual-columns]="true"
  [t-virtual-scroll]="true"
/>`,Xt=`import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridEditProperties,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-virtual-doc',
  templateUrl: './thf-grid-virtual-doc.component.html',
  standalone: false,
})
export class ThfGridVirtualDocComponent implements OnInit {
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  gridRowsActionsWithItems!: ThfGridRowActions;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
      editProperties: {
        required: true,
        componentEditable: 'input',
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
        keydown: this.onKeyDown.bind(this, 'name'),
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
      editProperties: {
        componentEditable: 'combo',
        required: true,
        disabledInitFilter: true,
        options: [
          { value: 1, label: 'Ativo' },
          { value: 2, label: 'Inativo' },
          { value: 0, label: 'Other' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'values',
      label: 'Values',
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: false,
        errorMessage: 'Obrigat\xF3rio',
        helper:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        help: 'Input lookup',
        keydown: this.onKeyDown.bind(this, 'values'),
        controlValueWithLabel: true,
      },
    },

    {
      property: 'number',
      label: 'Number',
      type: 'number',
      editProperties: {
        componentEditable: 'number',
        errorMessage: 'Number \xE9 obrigat\xF3rio',
        help: 'Input number',
        helper: 'Digite um n\xFAmero aqui',
      },
    },
    {
      property: 'datepicker',
      label: 'datepicker',
      editProperties: {
        componentEditable: 'datepicker',
        errorMessage: 'Datepicker \xE9 obrigat\xF3rio',
        help: 'Entre com a data',
        helper: 'Valor do tipo date',
      },
    },
    {
      property: 'otherStatus',
      label: 'Outro Status',
      editProperties: {
        componentEditable: 'multiselect',
        options: [
          { value: 123, label: 'Ativo' },
          { value: 233, label: 'Inativo' },
          { value: 3, label: 'Other' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        errorMessage: 'Obrigat\xF3rio',
        helper: 'Marque um ou mais status, conforme necess\xE1rio.',
        help: 'status',
        keydown: this.onKeyDown.bind(this, 'otherStatus'),
        controlValueWithLabel: true,
      },
    },
    {
      property: 'select',
      label: 'select',
      editProperties: {
        componentEditable: 'select',
        options: [
          { value: 123, label: 'Ativo' },
          { value: 233, label: 'Inativo' },
          { value: 3, label: 'Other' },
        ],
        errorMessage: 'select \xE9 obrigat\xF3rio',
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'switch',
      label: 'switch',
      editProperties: {
        componentEditable: 'switch',
        hideLabelStatus: false,
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'decimal',
      label: 'decimal',
      type: 'currency',
      editProperties: {
        componentEditable: 'decimal',
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'checkbox',
      label: 'checkbox',
      editProperties: {
        componentEditable: 'checkbox',
        disabled: false,
        help: 'lorem impsum',
        helper: ' ok ok ok',
      },
    },
    {
      property: 'valuesx',
      label: 'Valuesx',
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        helper:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        help: 'Input lookup',
        keydown: this.onKeyDown.bind(this, 'valuesx'),
        controlValueWithLabel: true,
      },
    },
  ];

  items: any[] = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      valuesx: [1495831666871],
      otherStatus: [233],
      number: 1,
      datepicker: '1980-11-01',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      valuesx: [1495831698598],
      otherStatus: [233],
      number: 2,
      datepicker: '1980-11-02',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      valuesx: [1495832652942],
      otherStatus: [3],
      number: 3,
      datepicker: '1980-11-03',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      valuesx: [1495832683682],
      otherStatus: [3],
      number: 4,
      datepicker: '1980-11-04',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      valuesx: [1495833068596],
      otherStatus: [233],
      number: 5,
      datepicker: '1980-11-05',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      valuesx: [1495833068597],
      otherStatus: [233],
      number: 6,
      datepicker: '1980-11-06',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
  ];

  form!: FormGroup;
  itemsUpdated: Array<any> = [];
  editProperties!: ThfGridEditProperties;
  currentIdItem: any;

  ngOnInit() {
    this.editProperties = {
      actionEdit: this.setFormGroup.bind(this),
    };

    for (let i = 1; i <= 600; i++) {
      const prop = \`property\` + i;
      this.columnWithItems.push({
        property: prop,
        label: \`Dynamic\` + i,
        editProperties: { disabled: false },
      });
    }

    let itemsUpdatedNew = [];

    const baseItem = this.items[0];
    for (let i = 1; i <= 10000; i++) {
      const randomId = Date.now() + i;
      const newItem = {
        ...baseItem,
        id: randomId + i,
        name: \`\${baseItem.name} \${i}\`,
      };
      for (let j = 1; j <= 600; j++) {
        newItem[\`property\${j}\`] = \`Valor \${j}\`;
      }

      itemsUpdatedNew.push(newItem);
    }

    this.items = itemsUpdatedNew;

    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: true,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        let group: any = {
          name: new FormControl(dataItem.name),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          values: new FormControl(dataItem.values, [Validators.required]),
          valuesx: new FormControl(dataItem.valuesx, [Validators.required]),
          otherStatus: new FormControl(dataItem.otherStatus),
          number: new FormControl(dataItem.number),
          datepicker: new FormControl(dataItem.datepicker),
          select: new FormControl(dataItem.select),
          switch: new FormControl(dataItem.switch),
          decimal: new FormControl(dataItem.decimal),
          checkbox: new FormControl(dataItem.checkbox),
        };
        for (let i = 1; i <= 600; i++) {
          group[\`property\${i}\`] = new FormControl(dataItem[\`property\${i}\`]);
        }

        this.form = new FormGroup(group);
        return this.form;
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeSaveSubItems(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    return true;
  }

  onBeforeInsertSubItems(newValue: { id: any; $uuidThfIncluded: any }) {
    newValue.id = newValue.$uuidThfIncluded;
    const item = this.itemsUpdated.find(
      (item) => item.id === this.currentIdItem
    );
    item.dependents = item.dependents
      ? [...item.dependents, newValue]
      : [newValue];
    return true;
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  setFormGroup(dataItem: any) {
    this.form = new FormGroup({
      id: new FormControl(dataItem.id, [Validators.required]),
      name: new FormControl(dataItem.name),
      city: new FormControl(dataItem.city),
      birthdate: new FormControl(dataItem.birthdate),
      status: new FormControl(dataItem.status),
      email: new FormControl(dataItem.email),
    });
    return this.form;
  }
}
`;var In=["gridComponent"],Yt=(()=>{let l=class l{constructor(){this.htmlCode=Zt,this.tsCode=Xt,this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome",editProperties:{required:!0,componentEditable:"input",errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,helper:"Informe pelo menos o primeiro nome.",help:"Input text",keydown:this.onKeyDown.bind(this,"name")}},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}],editProperties:{componentEditable:"combo",required:!0,disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value",helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"values",label:"Values",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!1,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"values"),controlValueWithLabel:!0}},{property:"number",label:"Number",type:"number",editProperties:{componentEditable:"number",errorMessage:"Number \xE9 obrigat\xF3rio",help:"Input number",helper:"Digite um n\xFAmero aqui"}},{property:"datepicker",label:"datepicker",editProperties:{componentEditable:"datepicker",errorMessage:"Datepicker \xE9 obrigat\xF3rio",help:"Entre com a data",helper:"Valor do tipo date"}},{property:"otherStatus",label:"Outro Status",editProperties:{componentEditable:"multiselect",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],fieldLabel:"label",fieldValue:"value",errorMessage:"Obrigat\xF3rio",helper:"Marque um ou mais status, conforme necess\xE1rio.",help:"status",keydown:this.onKeyDown.bind(this,"otherStatus"),controlValueWithLabel:!0}},{property:"select",label:"select",editProperties:{componentEditable:"select",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],errorMessage:"select \xE9 obrigat\xF3rio",helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"switch",label:"switch",editProperties:{componentEditable:"switch",hideLabelStatus:!1,helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"decimal",label:"decimal",type:"currency",editProperties:{componentEditable:"decimal",helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"checkbox",label:"checkbox",editProperties:{componentEditable:"checkbox",disabled:!1,help:"lorem impsum",helper:" ok ok ok"}},{property:"valuesx",label:"Valuesx",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"valuesx"),controlValueWithLabel:!0}}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",select:"3",switch:!0,decimal:123.45,checkbox:!0}],this.itemsUpdated=[]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)};for(let a=1;a<=600;a++){let s=`property${a}`;this.columnWithItems.push({property:s,label:`Dynamic ${a}`,editProperties:{disabled:!1}})}let r=[],n=this.items[0];for(let a=1;a<=1e4;a++){let s=Date.now()+a,S=Q(O({},n),{id:s+a,name:`${n.name} ${a}`});for(let C=1;C<=600;C++)S[`property${C}`]=`Valor ${C}`;r.push(S)}this.items=r,this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!0,actionEdit:(a,s)=>{s==="include"&&!a.id&&(console.log("mode: ",s),a.id=a.$uuidThfIncluded,a.dependents=[],this.currentIdItem=a.id);let S={name:new h(a.name),status:new h(a.status,[L.min(1)]),values:new h(a.values,[L.required]),valuesx:new h(a.values,[L.required]),otherStatus:new h(a.otherStatus),number:new h(a.number),datepicker:new h(a.datepicker),select:new h(a.select),switch:new h(a.switch),decimal:new h(a.decimal),checkbox:new h(a.checkbox)};for(let C=1;C<=600;C++)S[`property${C}`]=new h(a[`property${C}`]);return this.form=new H(S),this.form},afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onKeyDown(r,n){n.code==="F9"&&this.thfGrid.showAdditionalHelp(r)}onBeforeSave(r,n){return console.log("before new value: ",r),console.log("before old value: ",n),!0}onBeforeSaveSubItems(r,n){return console.log("before new value: ",r),console.log("before old value: ",n),!0}onBeforeInsert(r){return console.log("before insert new value: ",r),this.itemsUpdated=[...this.itemsUpdated,r],!0}onBeforeInsertSubItems(r){r.id=r.$uuidThfIncluded;let n=this.itemsUpdated.find(a=>a.id===this.currentIdItem);return n.dependents=n.dependents?[...n.dependents,r]:[r],!0}onBeforeRemove(r){return!0}onAfterSave(r){console.log("onAfterSave(new): ",r)}onAfterRemove(r){return console.log("afterRemove: ",r),!0}setFormGroup(r){return this.form=new H({id:new h(r.id,[L.required]),name:new h(r.name),city:new h(r.city),birthdate:new h(r.birthdate),status:new h(r.status),email:new h(r.email)}),this.form}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-virtual-doc"]],viewQuery:function(n,a){if(n&1&&A(In,5),n&2){let s;q(s=k())&&(a.thfGrid=s.first)}},standalone:!1,decls:7,vars:12,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","small",3,"t-selectable","t-single-select","t-columns","t-items","t-grid-row-actions","t-actions-right","t-auto-size","t-height","t-virtual-columns","t-virtual-scroll"],[3,"htmlCode","tsCode"]],template:function(n,a){n&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando virtual-columns e virtual-scroll"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),n&2&&(p(4),c("t-selectable",!0)("t-single-select",!0)("t-columns",a.columnWithItems)("t-items",a.items)("t-grid-row-actions",a.gridRowsActionsWithItems)("t-actions-right",!0)("t-auto-size",!1)("t-height",500)("t-virtual-columns",!0)("t-virtual-scroll",!0),p(2),c("htmlCode",a.htmlCode)("tsCode",a.tsCode))},dependencies:[y,P,M,w],encapsulation:2});let d=l;return d})();var ei=(()=>{let l=class l{};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid"]],standalone:!1,decls:15,vars:0,consts:[["p-title","THF-Grid","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview","",1,"samples-container"],["labs","",1,"samples-container"]],template:function(n,a){n&1&&(i(0,"po-page-default",0)(1,"api-thf-grid")(2,"div",1),o(3,"app-thf-grid-basic-doc")(4,"app-thf-grid-editing-inline-doc")(5,"app-thf-grid-row-actions-doc")(6,"app-thf-grid-aggregates-doc")(7,"app-thf-grid-editing-fluid-currency-doc")(8,"app-thf-grid-delete-service-doc")(9,"app-thf-grid-virtual-doc")(10,"app-thf-grid-dynamic-properties")(11,"app-thf-grid-auto-fit-scroll")(12,"app-thf-grid-parent-detail-editing-doc"),t(),i(13,"div",2),o(14,"app-thf-grid-labs-doc"),t()()())},dependencies:[ee,At,Mt,Rt,Vt,zt,jt,Nt,Ht,Ut,Wt,Jt,Yt],encapsulation:2});let d=l;return d})();function Mn(d,l){if(d&1){let m=I();i(0,"div",7)(1,"po-container",8)(2,"po-input",9),g("ngModelChange",function(n){u(m);let a=x();return v(a.label,n)||(a.label=n),E(n)}),t(),i(3,"po-input",10),g("ngModelChange",function(n){u(m);let a=x();return v(a.help,n)||(a.help=n),E(n)}),t(),i(4,"po-input",11),g("ngModelChange",function(n){u(m);let a=x();return v(a.helperText,n)||(a.helperText=n),E(n)}),t(),i(5,"po-input",12),g("ngModelChange",function(n){u(m);let a=x();return v(a.placeholder,n)||(a.placeholder=n),E(n)}),t(),i(6,"po-input",13),g("ngModelChange",function(n){u(m);let a=x();return v(a.fieldErrorMessage,n)||(a.fieldErrorMessage=n),E(n)}),t(),i(7,"po-select",14),g("ngModelChange",function(n){u(m);let a=x();return v(a.fieldLabel,n)||(a.fieldLabel=n),E(n)}),t(),i(8,"po-select",15),g("ngModelChange",function(n){u(m);let a=x();return v(a.fieldValue,n)||(a.fieldValue=n),E(n)}),t(),i(9,"po-input",16),g("ngModelChange",function(n){u(m);let a=x();return v(a.fieldFormat,n)||(a.fieldFormat=n),E(n)}),T("p-change",function(n){u(m);let a=x();return E(a.onFieldFormatChange(n))}),t()(),i(10,"po-container",8)(11,"po-checkbox-group",17),g("ngModelChange",function(n){u(m);let a=x();return v(a.columnsName,n)||(a.columnsName=n),E(n)}),T("p-change",function(){u(m);let n=x();return E(n.updateColumns())}),t(),i(12,"po-checkbox-group",18),g("ngModelChange",function(n){u(m);let a=x();return v(a.gridPropertiesName,n)||(a.gridPropertiesName=n),E(n)}),T("p-change",function(){u(m);let n=x();return E(n.updateGridProperties())}),t()(),i(13,"po-container",8)(14,"po-checkbox-group",19),g("ngModelChange",function(n){u(m);let a=x();return v(a.otherProperties,n)||(a.otherProperties=n),E(n)}),T("p-change",function(){u(m);let n=x();return E(n.changeOtherPropertiesOptions())}),t()(),i(15,"po-container",8)(16,"po-radio-group",20),g("ngModelChange",function(n){u(m);let a=x();return v(a.lookupModalSize,n)||(a.lookupModalSize=n),E(n)}),t(),i(17,"po-radio-group",21),g("ngModelChange",function(n){u(m);let a=x();return v(a.searchOnEnter,n)||(a.searchOnEnter=n),E(n)}),t()(),i(18,"po-container",8)(19,"po-radio-group",22),g("ngModelChange",function(n){u(m);let a=x();return v(a.size,n)||(a.size=n),E(n)}),t(),i(20,"po-textarea",23),g("ngModelChange",function(n){u(m);let a=x();return v(a.literals,n)||(a.literals=n),E(n)}),T("p-change-model",function(){u(m);let n=x();return E(n.changeLiterals())}),t(),i(21,"po-textarea",24),g("ngModelChange",function(n){u(m);let a=x();return v(a.filterSearchSelect,n)||(a.filterSearchSelect=n),E(n)}),T("p-change-model",function(){u(m);let n=x();return E(n.changeFilterSearchSelects())}),t(),i(22,"po-textarea",25),g("ngModelChange",function(n){u(m);let a=x();return v(a.keysLabel,n)||(a.keysLabel=n),E(n)}),T("p-change-model",function(){u(m);let n=x();return E(n.changeKeysLabel())}),t()()(),i(23,"div",26)(24,"po-button",27),T("p-click",function(){u(m);let n=x();return E(n.restore())}),t()()}if(d&2){let m=x();p(2),f("ngModel",m.label),p(),f("ngModel",m.help),p(),f("ngModel",m.helperText),p(),f("ngModel",m.placeholder),p(),f("ngModel",m.fieldErrorMessage),p(),f("ngModel",m.fieldLabel),c("p-options",m.fieldLabelOptions),p(),f("ngModel",m.fieldValue),c("p-options",m.fieldValueOptions),p(),f("ngModel",m.fieldFormat),p(2),f("ngModel",m.columnsName),c("p-columns",4)("p-options",m.columnsOptions),p(),f("ngModel",m.gridPropertiesName),c("p-columns",4)("p-options",m.gridPropertiesOptions),p(2),c("p-columns",4)("p-options",m.otherPropertiesOptions),f("ngModel",m.otherProperties),p(2),c("p-columns",3)("p-options",m.lookupModalSizeOptions),f("ngModel",m.lookupModalSize),p(),f("ngModel",m.searchOnEnter),c("p-options",m.searchOnEnterOptions),p(2),f("ngModel",m.size),c("p-options",m.sizesOptions),p(),f("ngModel",m.literals),p(),f("ngModel",m.filterSearchSelect),p(),f("ngModel",m.keysLabel)}}var ti=(()=>{let l=class l{constructor(){this.htmlCode=`<po-container>
  <span class="po-font-text-large-bold">Labs</span>
  <po-divider class="po-divider-mb-0-75"></po-divider>

  <thf-lookup
    name="lookup"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    [t-helper]="helperText"
    [t-auto-height]="otherProperties.includes('autoHeight')"
    [t-clean]="otherProperties.includes('clean')"
    [t-columns]="columns"
    [t-disabled]="otherProperties.includes('disabled')"
    [t-error-limit]="otherProperties.includes('fieldErrorLimit')"
    [t-field-error-message]="fieldErrorMessage"
    [t-field-format]="fieldFormat"
    [t-field-label]="fieldLabel"
    [t-field-value]="fieldValue"
    [t-field-error-message]="fieldErrorMessage"
    [t-filter-search-select]="customFilterSearchSelect"
    [t-grid-properties]="gridProperties"
    [t-help]="help"
    [t-keys-label]="customKeysLabel"
    [t-label]="label"
    [t-literals]="customLiterals"
    [t-loading]="otherProperties.includes('loading')"
    [t-modal-size]="lookupModalSize"
    [t-multiple]="otherProperties.includes('multiple')"
    [t-no-autocomplete]="otherProperties.includes('noAutoComplete')"
    [t-optional]="otherProperties.includes('optional')"
    [t-placeholder]="placeholder"
    [t-required]="otherProperties.includes('required')"
    [t-show-required]="otherProperties.includes('showRequired')"
    [t-search-on-enter]="searchOnEnter"
    [t-size]="size"
    [t-label-text-wrap]="otherProperties?.includes('labelTextWrap')"
    (t-change)="changeEvent('t-change')"
    (t-error)="changeEvent('t-error')"
    (t-selected)="changeEvent('t-selected')"
    (t-focus)="changeEvent('t-focus')"
    (t-keydown)="changeEvent('t-keydown')"
    (t-rows-selected)="changeEvent('t-rows-selected')"
    [(ngModel)]="lookupSingle"
  ></thf-lookup>

  <po-container class="po-mt-1" style="display: flex">
    <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
  </po-container>

    <div class="po-row po-mt-2 po-mb-2" style="display: block">
      <po-container class="po-mb-2" style="display: flex">
        <po-input
          class="po-md-6"
          name="label"
          [(ngModel)]="label"
          p-clean
          p-label="Label"
        ></po-input>
        <po-input
          class="po-md-6"
          name="help"
          [(ngModel)]="help"
          p-clean
          p-label="Help"
        ></po-input>
        <po-input
          class="po-md-6"
          name="helperText"
          [(ngModel)]="helperText"
          p-clean
          p-label="Additional Help"
        >
        </po-input>
        <po-input
          class="po-md-6"
          name="placeholder"
          [(ngModel)]="placeholder"
          p-clean
          p-label="Placeholder"
        ></po-input>

        <po-input
          class="po-md-6"
          name="fieldErrorMessage"
          [(ngModel)]="fieldErrorMessage"
          p-clean
          p-label="Field Error Message"
        ></po-input>

        <po-select
          class="po-md-6 po-lg-3"
          name="fieldLabel"
          [(ngModel)]="fieldLabel"
          p-label="Field Label"
          p-required
          [p-options]="fieldLabelOptions"
        ></po-select>

        <po-select
          class="po-md-6 po-lg-3"
          name="fieldValue"
          [(ngModel)]="fieldValue"
          p-label="Field Value"
          p-required
          [p-options]="fieldValueOptions"
        ></po-select>

        <po-input
          name="formatField"
          [(ngModel)]="fieldFormat"
          class="po-md-6"
          p-label="Field Format"
          p-help='Ex.: ["id", "name"]'
          (p-change)="onFieldFormatChange($event)"
        >
        </po-input>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="columnsName"
          [(ngModel)]="columnsName"
          [p-columns]="4"
          p-label="Columns"
          [p-options]="columnsOptions"
          (p-change)="updateColumns()"
        ></po-checkbox-group>
        <po-checkbox-group
          name="gridPropertiesName"
          [(ngModel)]="gridPropertiesName"
          [p-columns]="4"
          p-label="Grid Properties"
          [p-options]="gridPropertiesOptions"
          (p-change)="updateGridProperties()"
        ></po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="otherProperties"
          p-label="Other Properties"
          [p-columns]="4"
          [p-options]="otherPropertiesOptions"
          [(ngModel)]="otherProperties"
          (p-change)="changeOtherPropertiesOptions()"
        ></po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          class="po-lg-6"
          name="lookupModalSize"
          p-label="Modal Size"
          [p-columns]="3"
          [p-options]="lookupModalSizeOptions"
          [(ngModel)]="lookupModalSize"
        ></po-radio-group>

        <po-radio-group
          class="po-lg-6"
          name="searchOnEnter"
          [(ngModel)]="searchOnEnter"
          p-label="SearchOnEnter"
          [p-options]="searchOnEnterOptions"
        >
        </po-radio-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          class="po-lg-6"
          name="size"
          [(ngModel)]="size"
          p-label="Size"
          p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA."
          [p-options]="sizesOptions"
        >
        </po-radio-group>

        <po-textarea
          class="po-lg-6"
          name="literals"
          p-label="Literals"
          p-help='{ "modalTitle": "Busca avan\xE7ada" }'
          [(ngModel)]="literals"
          (p-change-model)="changeLiterals()"
        ></po-textarea>

        <po-textarea
          class="po-lg-6"
          name="filterSearchSelect"
          [(ngModel)]="filterSearchSelect"
          (p-change-model)="changeFilterSearchSelects()"
          p-help='[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]'
          p-label="Filter Search Select"
        ></po-textarea>

        <po-textarea
          class="po-lg-6"
          name="keysLabel"
          [(ngModel)]="keysLabel"
          (p-change-model)="changeKeysLabel()"
          p-help='[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]'
          p-label="Keys Label"
        ></po-textarea>
      </po-container>
    </div>

    <div class="po-row">
      <po-button
        class="po-lg-3 po-md-6"
        p-label="Restore"
        (p-click)="restore()"
      >
      </po-button>
    </div>
</po-container>
  `,this.tsCode=`import { Component } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption,
} from '@po-ui/ng-components';
import {
  ThfLookupColumn,
  ThfLookupFilterSearchSelect,
  ThfLookupGridProperties,
  ThfLookupKeysLabel,
  ThfLookupLiterals,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-labs-doc',
  templateUrl: './thf-lookup-labs-doc.component.html',
  styleUrl: './thf-lookup-labs-doc.component.css',
  standalone: false,
})
export class ThfLookupLabsDocComponent {
  helperText: string = '';
  columnsName: Array<string> = ['id', 'name', 'nickname', 'email'];
  gridPropertiesName: Array<string> = ['selectableEntireLine', 'showMoreVisible', 'striped', 'sortable', 'virtualScroll'];
  customFilterSearchSelect: Array<ThfLookupFilterSearchSelect> = [];
  customKeysLabel: Array<ThfLookupKeysLabel> = [];
  customLiterals: ThfLookupLiterals = {};
  event: string = '';
  fieldLabel: string = 'name';
  fieldValue: string = 'value';
  filterSearchSelect: string = '';
  help: string = '';
  keysLabel: string = '';
  label: string = '';
  literals: string = '';
  fieldErrorMessage: string = '';
  lookupSingle: any;
  otherProperties: Array<string> = [];
  placeholder: string = '';
  fieldFormat: Array<string> | undefined;
  lookupModalSize: string = 'lg';
  size: string = 'medium';
  searchOnEnter: 'include' | 'equal' = 'equal';

  columns: Array<ThfLookupColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail' },
  ];

  gridProperties!: ThfLookupGridProperties;

  lookupModalSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' },
    { label: 'auto', value: 'auto' },
  ];

  otherPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Auto Height', value: 'autoHeight' },
    { label: 'Clean', value: 'clean', disabled: false },
    { label: 'Disabled', value: 'disabled' },
    { label: 'Multiple', value: 'multiple' },
    { label: 'No Autocomplete', value: 'noAutoComplete' },
    { label: 'Optional', value: 'optional', disabled: false },
    { label: 'Required', value: 'required' },
    { label: 'Show Required', value: 'showRequired', disabled: true },
    { value: 'fieldErrorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' }
  ];

  searchOnEnterOptions: Array<PoRadioGroupOption> = [
    { label: 'equal', value: 'equal' },
    { label: 'include', value: 'include' },
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  readonly gridPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'autoSize', label: 'AutoSize' },
    { value: 'autoSizeOnScroll', label: 'AutoSizeOnScroll' },
    { value: 'draggable', label: 'Draggable' },
    { value: 'groupable', label: 'Groupable' },
    { value: 'hideSelectAll', label: 'HideSelectAll' },
    { value: 'resizable', label: 'Resizable' },
    { value: 'selectableEntireLine', label: 'SelectableEntireLine' },
    { value: 'striped', label: 'Striped' },
    { value: 'showDraggableIcon', label: 'ShowDraggableIcon' },
    { value: 'showMoreDisabled', label: 'ShowMoreDisabled' },
    { value: 'showMoreVisible', label: 'ShowMoreVisible' },
    { value: 'sortable', label: 'Sortable' },
    { value: 'virtualScroll', label: 'VirtualScroll' },
  ];

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Nome' },
    { value: 'nickname', label: 'Apelido' },
    { value: 'email', label: 'E-mail' },
  ];

  readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'Name' },
    ...this.columnsOptions,
  ];

  readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions,
  ];

  private readonly columnsDefinition: any = {
    id: <ThfLookupColumn>{ property: 'id', label: 'Id' },
    name: <ThfLookupColumn>{ property: 'name', label: 'Nome' },
    nickname: <ThfLookupColumn>{ property: 'nickname', label: 'Apelido' },
    email: <ThfLookupColumn>{ property: 'email', label: 'E-mail' },
  };

  ngOnInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  changeFilterSearchSelects() {
    try {
      this.customFilterSearchSelect = JSON.parse(this.filterSearchSelect);
    } catch {
      this.customFilterSearchSelect = [];
    }
  }

  changeKeysLabel() {
    try {
      this.customKeysLabel = JSON.parse(this.keysLabel);
    } catch {
      this.customKeysLabel = [];
    }
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = {};
    }
  }

  changeOtherPropertiesOptions() {
    const multiple = this.otherProperties.includes('multiple');
    const required = this.otherProperties.includes('required');

    this.otherPropertiesOptions[1].disabled = multiple;
    this.otherPropertiesOptions[7].disabled = !required;
    this.otherPropertiesOptions[5].disabled = required;
    this.otherPropertiesOptions = [...this.otherPropertiesOptions];
  }

  onFieldFormatChange(event: any) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  restore() {
    this.helperText = '';
    this.columnsName = ['id', 'name', 'nickname', 'email'];
    this.gridPropertiesName = [
      'selectableEntireLine',
      'showMoreVisible',
      'striped',
      'sortable',
      'virtualScroll',
    ];
    this.customFilterSearchSelect = [];
    this.customKeysLabel = [];
    this.customLiterals = {};
    this.event = '';
    this.fieldErrorMessage = '';
    this.fieldLabel = 'name';
    this.fieldValue = 'value';
    this.filterSearchSelect = '';
    this.help = '';
    this.keysLabel = '';
    this.label = '';
    this.literals = '';
    this.lookupSingle = undefined;
    this.otherProperties = [];
    this.placeholder = '';
    this.fieldFormat = undefined;
    this.size = 'medium';
    this.searchOnEnter = 'equal';
    this.changeFilterSearchSelects();
    this.changeKeysLabel();
    this.changeLiterals();
    this.changeOtherPropertiesOptions();
    this.updateColumns();
    this.updateGridProperties();
    this.lookupModalSize = 'lg';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach((column) =>
      this.columns.push(this.columnsDefinition[column])
    );
  }

  updateGridProperties() {
    this.gridProperties = {};

    this.gridPropertiesName.forEach((properties) => {
      this.gridProperties = {
        ...this.gridProperties,
        [properties]: true,
      };
    });

    if (!this.gridPropertiesName.includes('sortable')) {
      this.gridProperties = {
        ...this.gridProperties,
        sortable: false,
      };
    }

    if (!this.gridPropertiesName.includes('striped')) {
      this.gridProperties = {
        ...this.gridProperties,
        striped: false,
      };
    }

    if (!this.gridPropertiesName.includes('selectableEntireLine')) {
      this.gridProperties = {
        ...this.gridProperties,
        selectableEntireLine: false,
      };
    }

    if (!this.gridPropertiesName.includes('showMoreVisible')) {
      this.gridProperties = {
        ...this.gridProperties,
        showMoreVisible: false,
      };
    }
  }
}
  `,this.helperText="",this.columnsName=["id","name","nickname","email"],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.fieldErrorMessage="",this.otherProperties=[],this.placeholder="",this.lookupModalSize="lg",this.size="medium",this.searchOnEnter="equal",this.columns=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail"}],this.lookupModalSizeOptions=[{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"},{label:"auto",value:"auto"}],this.otherPropertiesOptions=[{label:"Auto Height",value:"autoHeight"},{label:"Clean",value:"clean",disabled:!1},{label:"Disabled",value:"disabled"},{label:"Multiple",value:"multiple"},{label:"No Autocomplete",value:"noAutoComplete"},{label:"Optional",value:"optional",disabled:!1},{label:"Required",value:"required"},{label:"Show Required",value:"showRequired",disabled:!0},{value:"fieldErrorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"}],this.searchOnEnterOptions=[{label:"equal",value:"equal"},{label:"include",value:"include"}],this.sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.gridPropertiesOptions=[{value:"autoSize",label:"AutoSize"},{value:"autoSizeOnScroll",label:"AutoSizeOnScroll"},{value:"draggable",label:"Draggable"},{value:"groupable",label:"Groupable"},{value:"hideSelectAll",label:"HideSelectAll"},{value:"resizable",label:"Resizable"},{value:"selectableEntireLine",label:"SelectableEntireLine"},{value:"striped",label:"Striped"},{value:"showDraggableIcon",label:"ShowDraggableIcon"},{value:"showMoreDisabled",label:"ShowMoreDisabled"},{value:"showMoreVisible",label:"ShowMoreVisible"},{value:"sortable",label:"Sortable"},{value:"virtualScroll",label:"VirtualScroll"}],this.columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Nome"},{value:"nickname",label:"Apelido"},{value:"email",label:"E-mail"}],this.fieldLabelOptions=[{value:"name",label:"Name"},...this.columnsOptions],this.fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions],this.columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Nome"},nickname:{property:"nickname",label:"Apelido"},email:{property:"email",label:"E-mail"}}}ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeFilterSearchSelects(){try{this.customFilterSearchSelect=JSON.parse(this.filterSearchSelect)}catch{this.customFilterSearchSelect=[]}}changeKeysLabel(){try{this.customKeysLabel=JSON.parse(this.keysLabel)}catch{this.customKeysLabel=[]}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals={}}}changeOtherPropertiesOptions(){let r=this.otherProperties.includes("multiple"),n=this.otherProperties.includes("required");this.otherPropertiesOptions[1].disabled=r,this.otherPropertiesOptions[7].disabled=!n,this.otherPropertiesOptions[5].disabled=n,this.otherPropertiesOptions=[...this.otherPropertiesOptions]}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch{this.fieldFormat=void 0}}restore(){this.helperText="",this.columnsName=["id","name","nickname","email"],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldErrorMessage="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.lookupSingle=void 0,this.otherProperties=[],this.placeholder="",this.fieldFormat=void 0,this.size="medium",this.searchOnEnter="equal",this.changeFilterSearchSelects(),this.changeKeysLabel(),this.changeLiterals(),this.changeOtherPropertiesOptions(),this.updateColumns(),this.updateGridProperties(),this.lookupModalSize="lg"}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}updateGridProperties(){this.gridProperties={},this.gridPropertiesName.forEach(r=>{this.gridProperties=Q(O({},this.gridProperties),{[r]:!0})}),this.gridPropertiesName.includes("sortable")||(this.gridProperties=Q(O({},this.gridProperties),{sortable:!1})),this.gridPropertiesName.includes("striped")||(this.gridProperties=Q(O({},this.gridProperties),{striped:!1})),this.gridPropertiesName.includes("selectableEntireLine")||(this.gridProperties=Q(O({},this.gridProperties),{selectableEntireLine:!1})),this.gridPropertiesName.includes("showMoreVisible")||(this.gridProperties=Q(O({},this.gridProperties),{showMoreVisible:!1}))}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-lookup-labs-doc"]],standalone:!1,decls:10,vars:34,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookup","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-change","t-error","t-selected","t-focus","t-keydown","t-rows-selected","ngModelChange","t-helper","t-auto-height","t-clean","t-columns","t-disabled","t-error-limit","t-field-error-message","t-field-format","t-field-label","t-field-value","t-filter-search-select","t-grid-properties","t-help","t-keys-label","t-label","t-literals","t-loading","t-modal-size","t-multiple","t-no-autocomplete","t-optional","t-placeholder","t-required","t-show-required","t-search-on-enter","t-size","t-label-text-wrap","ngModel"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","columnsName","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","gridPropertiesName","p-label","Grid Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","lookupModalSize","p-label","Modal Size",1,"po-lg-6",3,"ngModelChange","p-columns","p-options","ngModel"],["name","searchOnEnter","p-label","SearchOnEnter",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-label","Literals","p-help",'{ "modalTitle": "Busca avan\xE7ada" }',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","filterSearchSelect","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]',"p-label","Filter Search Select",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","keysLabel","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]',"p-label","Keys Label",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(n,a){if(n&1){let s=I();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"thf-lookup",3),T("t-change",function(){return u(s),E(a.changeEvent("t-change"))})("t-error",function(){return u(s),E(a.changeEvent("t-error"))})("t-selected",function(){return u(s),E(a.changeEvent("t-selected"))})("t-focus",function(){return u(s),E(a.changeEvent("t-focus"))})("t-keydown",function(){return u(s),E(a.changeEvent("t-keydown"))})("t-rows-selected",function(){return u(s),E(a.changeEvent("t-rows-selected"))}),g("ngModelChange",function(C){return u(s),v(a.lookupSingle,C)||(a.lookupSingle=C),E(C)}),t(),i(5,"po-container",4),o(6,"po-info",5),t(),o(7,"app-code-accordion-doc",6),G(8,Mn,25,29,"ng-template",null,0,Z),t()}if(n&2){let s=W(9);p(4),c("t-helper",a.helperText)("t-auto-height",a.otherProperties.includes("autoHeight"))("t-clean",a.otherProperties.includes("clean"))("t-columns",a.columns)("t-disabled",a.otherProperties.includes("disabled"))("t-error-limit",a.otherProperties.includes("fieldErrorLimit"))("t-field-error-message",a.fieldErrorMessage)("t-field-format",a.fieldFormat)("t-field-label",a.fieldLabel)("t-field-value",a.fieldValue)("t-field-error-message",a.fieldErrorMessage)("t-filter-search-select",a.customFilterSearchSelect)("t-grid-properties",a.gridProperties)("t-help",a.help)("t-keys-label",a.customKeysLabel)("t-label",a.label)("t-literals",a.customLiterals)("t-loading",a.otherProperties.includes("loading"))("t-modal-size",a.lookupModalSize)("t-multiple",a.otherProperties.includes("multiple"))("t-no-autocomplete",a.otherProperties.includes("noAutoComplete"))("t-optional",a.otherProperties.includes("optional"))("t-placeholder",a.placeholder)("t-required",a.otherProperties.includes("required"))("t-show-required",a.otherProperties.includes("showRequired"))("t-search-on-enter",a.searchOnEnter)("t-size",a.size)("t-label-text-wrap",a.otherProperties==null?null:a.otherProperties.includes("labelTextWrap")),f("ngModel",a.lookupSingle),p(2),c("p-value",a.event),p(),c("properties",!0)("dynamicTemplate",s)("htmlCode",a.htmlCode)("tsCode",a.tsCode)}},dependencies:[B,K,U,y,P,fe,le,de,Ie,ge,me,pe,w],styles:[".po-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px}.containerProperties[_ngcontent-%COMP%]{flex:1 1 100%}"]});let d=l;return d})();var ii=(()=>{let l=class l{constructor(){this.htmlCode=`<form [formGroup]="formMission">
  <thf-lookup
    formControlName="lookup2"
    name="lookupMultiple"
    t-field-label="name"
    t-field-value="value"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    t-key-last-search="lookupMultiple"
    t-label="Her\xF3is"
    t-placeholder="Placeholder multiple"
    [t-columns]="columns"
    [t-grid-properties]="gridProperties"
    [t-keys-label]="keysLabel"
    [t-multiple]="true"
    [t-filter-search-select]="filterSelect"
  ></thf-lookup>
</form>
  `,this.tsCode=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-thf-lookup-form-doc',
  templateUrl: './thf-lookup-form-doc.component.html',
  styleUrl: './thf-lookup-form-doc.component.css',
})
export class ThfLookupFormDocComponent {
  formMission = new FormGroup({
    lookup2: new FormControl(['1495831666871']),
  });

  gridProperties: ThfLookupGridProperties = {
    autoSize: true,
    autoSizeOnScroll: true,
    resizable: true,
    groupable: true,
    draggable: true,
    hideSelectAll: true,
  };

  columns = [
    { property: 'name', label: 'Name' },
    { property: 'nickname', label: 'Nickname' },
    { property: 'email', label: 'Email' },
    { property: 'id', label: 'Id' },
  ];

  keysLabel = [
    { label: 'Nome', value: 'name' },
    { label: 'Email', value: 'email' },
  ];

  filterSelect = [
    { label: 'Nome', value: 'name' },
    { label: 'Nickname', value: 'nickname' },
    { label: 'Email', value: 'email' },
  ];
}
  `,this.formMission=new H({lookup2:new h(["1495831666871"])}),this.gridProperties={autoSize:!0,autoSizeOnScroll:!0,resizable:!0,groupable:!0,draggable:!0,hideSelectAll:!0},this.columns=[{property:"name",label:"Name"},{property:"nickname",label:"Nickname"},{property:"email",label:"Email"},{property:"id",label:"Id"}],this.keysLabel=[{label:"Nome",value:"name"},{label:"Email",value:"email"}],this.filterSelect=[{label:"Nome",value:"name"},{label:"Nickname",value:"nickname"},{label:"Email",value:"email"}]}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-lookup-form-doc"]],standalone:!1,decls:7,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["formControlName","lookup2","name","lookupMultiple","t-field-label","name","t-field-value","value","t-filter-service","https://po-sample-api.onrender.com/v1/heroes","t-key-last-search","lookupMultiple","t-label","Her\xF3is","t-placeholder","Placeholder multiple",3,"t-columns","t-grid-properties","t-keys-label","t-multiple","t-filter-search-select"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(n,a){n&1&&(i(0,"po-container")(1,"span",0),e(2,"Multiple Reactive Form"),t(),o(3,"po-divider",1),i(4,"form",2),o(5,"thf-lookup",3),t(),o(6,"app-code-accordion-doc",4),t()),n&2&&(p(4),c("formGroup",a.formMission),p(),c("t-columns",a.columns)("t-grid-properties",a.gridProperties)("t-keys-label",a.keysLabel)("t-multiple",!0)("t-filter-search-select",a.filterSelect),p(),c("htmlCode",a.htmlCode)("tsCode",a.tsCode))},dependencies:[re,B,ae,Ae,qe,y,P,pe,w],encapsulation:2});let d=l;return d})();var ni=(()=>{let l=class l{constructor(){this.htmlCode=`<thf-lookup
  name="lookupSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
></thf-lookup>
  `,this.tsCode=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-basic-doc',
  templateUrl: './thf-lookup-basic-doc.component.html',
  styleUrl: './thf-lookup-basic-doc.component.css'
})
export class ThfLookupBasicDocComponent {}`}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-lookup-basic-doc"]],standalone:!1,decls:7,vars:2,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupSingle","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(n,a){n&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Single"),t(),o(3,"po-divider",1),i(4,"form"),o(5,"thf-lookup",2),t(),o(6,"app-code-accordion-doc",3),t()),n&2&&(p(6),c("htmlCode",a.htmlCode)("tsCode",a.tsCode))},dependencies:[re,ae,De,y,P,pe,w],encapsulation:2});let d=l;return d})();var oi=`<thf-lookup
  name="lookupSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-custom-items]="customItems"
>
</thf-lookup>`,ai=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-custom-items-doc',
  templateUrl: './thf-lookup-custom-items-doc.component.html',
  styleUrl: './thf-lookup-custom-items-doc.component.css',
  standalone: false
})
export class ThfLookupCustomItemsDocComponent {
  customItems = [
    {
      value: 9999999999999,
      label: "Todos os Her\xF3is",
      id: 9999999999999,
      name: "Todos os Her\xF3is",
      nickname: "Todos",
      email: "-"
    },
    {
      value: 8888888888888,
      label: "Her\xF3i Customizado",
      id: 8888888888888,
      name: "Her\xF3i Customizado",
      nickname: "Customizado",
      email: "customizado@example.com"
    }
  ];
}
`;var ri=(()=>{let l=class l{constructor(){this.htmlCode=oi,this.tsCode=ai,this.customItems=[{value:9999999999999,label:"Todos os Her\xF3is",id:9999999999999,name:"Todos os Her\xF3is",nickname:"Todos",email:"-"},{value:8888888888888,label:"Her\xF3i Customizado",id:8888888888888,name:"Her\xF3i Customizado",nickname:"Customizado",email:"customizado@example.com"}]}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-lookup-custom-items-doc"]],standalone:!1,decls:7,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupSingleCustomItems","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-custom-items"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(n,a){n&1&&(i(0,"po-container")(1,"span",0),e(2,"Custom Items"),t(),o(3,"po-divider",1),i(4,"form"),o(5,"thf-lookup",2),t(),o(6,"app-code-accordion-doc",3),t()),n&2&&(p(5),c("t-custom-items",a.customItems),p(),c("htmlCode",a.htmlCode)("tsCode",a.tsCode))},dependencies:[re,ae,De,y,P,pe,w],encapsulation:2});let d=l;return d})();var li=(()=>{let l=class l{};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-lookup"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Lookup","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],[1,"samples-container"],["labs","",1,"samples-container"]],template:function(n,a){n&1&&(i(0,"po-page-default",0)(1,"api-thf-lookup")(2,"div",1)(3,"div",2),o(4,"app-thf-lookup-basic-doc")(5,"app-thf-lookup-form-doc")(6,"app-thf-lookup-custom-items-doc"),t()(),i(7,"div",3),o(8,"app-thf-lookup-labs-doc"),t()()())},dependencies:[ee,qt,ti,ii,ni,ri],encapsulation:2});let d=l;return d})();var di=`<thf-lookup-data
  name="lookupDataSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-height]="320"
/>`,mi=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-data-basic-doc',
  templateUrl: './thf-lookup-data-basic-doc.component.html',
  standalone: false,
})
export class ThfLookupDataBasicDocComponent {}`;var je=(()=>{let l=class l{constructor(){this.htmlCode=di,this.tsCode=mi}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-lookup-data-basic-doc"]],standalone:!1,decls:6,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupDataSingle","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-height"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(n,a){n&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Single"),t(),o(3,"po-divider",1)(4,"thf-lookup-data",2)(5,"app-code-accordion-doc",3),t()),n&2&&(p(4),c("t-height",320),p(),c("htmlCode",a.htmlCode)("tsCode",a.tsCode))},dependencies:[y,P,se,w],encapsulation:2});let d=l;return d})();var si=`<form [formGroup]="form">
  <thf-lookup-data
    formControlName="lookupData"
    name="lookupDataSingle"
    t-field-label="nickname"
    t-field-value="value"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    [t-columns]="columns"
    [t-grid-properties]="gridProperties"
    [t-keys-label]="keysLabel"
    [t-multiple]="true"
    [t-filter-search-select]="filterSelect"
  />
</form>

<div>
  <p>Valor do Formul\xE1rio:<br />{{ form.value | json }}</p>
</div>

<div>
  @if (!disabledFom) {
  <po-button
    p-label="Desabilitar via FormControl"
    (p-click)="disableEnabledFom()"
  />
  } @else {
  <po-button
    p-label="Habilitar via FormControl"
    (p-click)="disableEnabledFom()"
  />
  }
</div>
`,pi=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ThfLookupDataGridProperties } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-data-form-doc',
  templateUrl: './thf-lookup-data-form-doc.component.html',
  standalone: false,
})
export class ThfLookupDataFormDocComponent {
  disabledFom = false;

  form = new FormGroup({
    lookupData: new FormControl(['1495831666871']),
  });

  gridProperties: ThfLookupDataGridProperties = {
    autoSize: true,
    draggable: true,
    hideSelectAll: true,
    resizable: true,
  };

  columns = [
    { property: 'name', label: 'Name' },
    { property: 'nickname', label: 'Nickname' },
    { property: 'email', label: 'Email' },
  ];

  keysLabel = [
    { label: 'Nome', value: 'name' },
    { label: 'Email', value: 'email' },
  ];

  filterSelect = [
    { label: 'Nome', value: 'name' },
    { label: 'Nickname', value: 'nickname' },
    { label: 'Email', value: 'email' },
  ];

  disableEnabledFom() {
    const lookupData = this.form.get('lookupData');
    this.disabledFom = !this.disabledFom;

    this.disabledFom ? lookupData?.disable() : lookupData?.enable();
  }
}`;function Gn(d,l){if(d&1){let m=I();i(0,"po-button",7),T("p-click",function(){u(m);let n=x();return E(n.disableEnabledFom())}),t()}}function Nn(d,l){if(d&1){let m=I();i(0,"po-button",8),T("p-click",function(){u(m);let n=x();return E(n.disableEnabledFom())}),t()}}var Oe=(()=>{let l=class l{constructor(){this.htmlCode=si,this.tsCode=pi,this.disabledFom=!1,this.form=new H({lookupData:new h(["1495831666871"])}),this.gridProperties={autoSize:!0,draggable:!0,hideSelectAll:!0,resizable:!0},this.columns=[{property:"name",label:"Name"},{property:"nickname",label:"Nickname"},{property:"email",label:"Email"}],this.keysLabel=[{label:"Nome",value:"name"},{label:"Email",value:"email"}],this.filterSelect=[{label:"Nome",value:"name"},{label:"Nickname",value:"nickname"},{label:"Email",value:"email"}]}disableEnabledFom(){let r=this.form.get("lookupData");this.disabledFom=!this.disabledFom,this.disabledFom?r?.disable():r?.enable()}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-lookup-data-form-doc"]],standalone:!1,decls:16,vars:12,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["formControlName","lookupData","name","lookupDataSingle","t-field-label","nickname","t-field-value","value","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-columns","t-grid-properties","t-keys-label","t-multiple","t-filter-search-select"],["p-label","Desabilitar via FormControl"],["p-label","Habilitar via FormControl"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"],["p-label","Desabilitar via FormControl",3,"p-click"],["p-label","Habilitar via FormControl",3,"p-click"]],template:function(n,a){n&1&&(i(0,"po-container")(1,"span",0),e(2,"Multiple Reactive Form"),t(),o(3,"po-divider",1),i(4,"form",2),o(5,"thf-lookup-data",3),t(),i(6,"div")(7,"p"),e(8,"Valor do Formul\xE1rio:"),o(9,"br"),e(10),nt(11,"json"),t()(),i(12,"div"),xe(13,Gn,1,0,"po-button",4)(14,Nn,1,0,"po-button",5),t(),o(15,"app-code-accordion-doc",6),t()),n&2&&(p(4),c("formGroup",a.form),p(),c("t-columns",a.columns)("t-grid-properties",a.gridProperties)("t-keys-label",a.keysLabel)("t-multiple",!0)("t-filter-search-select",a.filterSelect),p(5),be(ot(11,10,a.form.value)),p(3),Se(a.disabledFom?14:13),p(2),c("htmlCode",a.htmlCode)("tsCode",a.tsCode))},dependencies:[re,B,ae,Ae,qe,U,y,P,se,w,mt],encapsulation:2});let d=l;return d})();var ci=`<thf-lookup-data
  name="lookupDataSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-custom-items]="customItems"
  [t-height]="320"
/>`,ui=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-data-basic-doc',
  templateUrl: './thf-lookup-data-basic-doc.component.html',
  standalone: false,
})
export class ThfLookupDataBasicDocComponent {
  customItems = [
    {
      value: 9999999999999,
      label: "Todos os Her\xF3is",
      id: 9999999999999,
      name: "Todos os Her\xF3is",
      nickname: "Todos",
      email: "-"
    },
    {
      value: 8888888888888,
      label: "Her\xF3i Customizado",
      id: 8888888888888,
      name: "Her\xF3i Customizado",
      nickname: "Customizado",
      email: "customizado@example.com"
    }
  ];
}`;var Ge=(()=>{let l=class l{constructor(){this.htmlCode=ci,this.tsCode=ui,this.customItems=[{value:9999999999999,label:"Todos os Her\xF3is",id:9999999999999,name:"Todos os Her\xF3is",nickname:"Todos",email:"-"},{value:8888888888888,label:"Her\xF3i Customizado",id:8888888888888,name:"Her\xF3i Customizado",nickname:"Customizado",email:"customizado@example.com"}]}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-lookup-data-custom-items-doc"]],standalone:!1,decls:6,vars:4,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupDataSingleCustomItems","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-custom-items","t-height"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(n,a){n&1&&(i(0,"po-container")(1,"span",0),e(2,"Custom Items"),t(),o(3,"po-divider",1)(4,"thf-lookup-data",2)(5,"app-code-accordion-doc",3),t()),n&2&&(p(4),c("t-custom-items",a.customItems)("t-height",320),p(),c("htmlCode",a.htmlCode)("tsCode",a.tsCode))},dependencies:[y,P,se,w],encapsulation:2});let d=l;return d})();var Ei=`<thf-lookup-data
  [t-columns]="columns"
  [t-disabled]="disabled"
  [t-field-label]="fieldLabel"
  [t-field-value]="fieldValue"
  [t-filter-search-select]="customFilterSearchSelect"
  [t-grid-properties]="gridProperties"
  [t-height]="height"
  [t-keys-label]="customKeysLabel"
  [t-literals]="customLiterals"
  [t-multiple]="multiple"
  [t-size]="size"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  (t-change)="changeEvent('t-change', $event)"
  (t-change-model)="changeEvent('t-change-model', $event)"
  (t-error)="changeEvent('t-error', $event)"
  (t-focus)="changeEvent('t-focus', '')"
  (t-keydown)="changeEvent('t-keydown', $event)"
  (t-selected)="changeEvent('t-selected', $event)"
/>

<po-container class="po-mt-1" style="display: flex">
  <span class="po-font-text-large-bold">Events</span>
  <po-divider class="po-divider-mb-0-75"></po-divider>
  <div style="max-height: 150px" [innerHTML]="event"></div>
</po-container>

<div class="po-row po-mt-2 po-mb-2" style="display: block">
  <po-container class="po-mb-2" style="display: flex">
    <po-select
      class="po-md-4 po-lg-4"
      name="fieldValue"
      [(ngModel)]="fieldValue"
      p-label="Field Value"
      p-required
      [p-options]="fieldValueOptions"
    />

    <po-select
      class="po-md-4 po-lg-4"
      name="fieldLabel"
      [(ngModel)]="fieldLabel"
      p-label="Field Label"
      p-required
      [p-options]="fieldLabelOptions"
    />

    <po-input
      class="po-md-4 po-lg-4"
      name="heigth"
      [(ngModel)]="height"
      p-label="Height"
    />

    <div class="po-row">
      <po-switch
        class="po-md-6 po-lg-3"
        name="disabled"
        p-label="Disabled"
        [(ngModel)]="disabled"
      />

      <po-switch
        class="po-md-6 po-lg-3"
        name="Multiple"
        p-label="Multiple"
        [(ngModel)]="multiple"
      />

      <po-radio-group
        class="po-lg-6"
        name="size"
        [(ngModel)]="size"
        p-label="Size"
        p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA."
        [p-options]="sizesOptions"
      />
    </div>

    <div class="po-row">
      <po-textarea
        class="po-lg-6"
        name="filterSearchSelect"
        [(ngModel)]="filterSearchSelect"
        (p-change-model)="changeFilterSearchSelects()"
        p-help='[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]'
        p-label="Filter Search Select"
      />

      <po-textarea
        class="po-lg-6"
        name="keysLabel"
        [(ngModel)]="keysLabel"
        (p-change-model)="changeKeysLabel()"
        p-help='[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]'
        p-label="Keys Label"
      />
    </div>

    <po-textarea
      class="po-lg-6"
      name="literals"
      p-label="Literals"
      p-help='{ "placeholder": "Busca avan\xE7ada" }'
      [p-rows]="2"
      [(ngModel)]="literals"
      (p-change-model)="changeLiterals()"
    />
  </po-container>

  <po-container class="po-mb-2" style="display: flex">
    <po-checkbox-group
      name="gridPropertiesName"
      [(ngModel)]="gridPropertiesName"
      [p-columns]="4"
      p-label="Grid Properties"
      [p-options]="gridPropertiesOptions"
      (p-change)="updateGridProperties()"
    />
  </po-container>
</div>
`,xi=`import { Component } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption,
} from '@po-ui/ng-components';
import {
  ThfLookupDataColumn,
  ThfLookupDataFilterSearchSelect,
  ThfLookupDataGridProperties,
  ThfLookupDataKeysLabel,
  ThfLookupDataLiterals,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-data-labs-doc',
  templateUrl: './thf-lookup-data-labs-doc.component.html',
  standalone: false,
})
export class ThfLookupDataLabsDocComponent {
  columns: Array<ThfLookupDataColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail' },
  ];
  customFilterSearchSelect: Array<ThfLookupDataFilterSearchSelect> = [];
  customKeysLabel: Array<ThfLookupDataKeysLabel> = [];
  customLiterals: ThfLookupDataLiterals = {};
  disabled = false;
  event: string = '';
  fieldLabel: string = 'name';
  fieldValue: string = 'value';
  filterSearchSelect: string = '';
  gridProperties!: ThfLookupDataGridProperties;
  height = 450;
  keysLabel: string = '';
  literals: string = '';
  multiple = true;
  size: string = 'medium';

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Nome' },
    { value: 'nickname', label: 'Apelido' },
    { value: 'email', label: 'E-mail' },
  ];

  readonly gridPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'autoSize', label: 'AutoSize' },
    { value: 'autoSizeOnScroll', label: 'AutoSizeOnScroll' },
    { value: 'draggable', label: 'Draggable' },
    { value: 'groupable', label: 'Groupable' },
    { value: 'hideSelectAll', label: 'HideSelectAll' },
    { value: 'resizable', label: 'Resizable' },
    { value: 'selectableEntireLine', label: 'SelectableEntireLine' },
    { value: 'striped', label: 'Striped' },
    { value: 'showDraggableIcon', label: 'ShowDraggableIcon' },
    { value: 'showMoreDisabled', label: 'ShowMoreDisabled' },
    { value: 'showMoreVisible', label: 'ShowMoreVisible' },
    { value: 'sortable', label: 'Sortable' },
    { value: 'virtualScroll', label: 'VirtualScroll' },
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'Name' },
    ...this.columnsOptions,
  ];

  readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions,
  ];

  readonly gridPropertiesName: Array<string> = [
    'selectableEntireLine',
    'showMoreVisible',
    'striped',
    'sortable',
    'virtualScroll',
  ];

  changeEvent(eventDescription: any, value: any) {
    if (value instanceof KeyboardEvent) {
      value = {
        key: value.key,
        code: value.code,
        altKey: value.altKey,
        ctrlKey: value.ctrlKey,
        shiftKey: value.shiftKey,
      };
    }

    this.event =
      \`<p>\${eventDescription} - \${value ? JSON.stringify(value) : ''}</p>\` +
      this.event;
  }

  changeFilterSearchSelects() {
    try {
      this.customFilterSearchSelect = JSON.parse(this.filterSearchSelect);
    } catch {
      this.customFilterSearchSelect = [];
    }
  }

  changeKeysLabel() {
    try {
      this.customKeysLabel = JSON.parse(this.keysLabel);
    } catch {
      this.customKeysLabel = [];
    }
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = {};
    }
  }

  updateGridProperties() {
    let gridProperties = {};

    this.gridPropertiesName.forEach((properties) => {
      gridProperties = {
        ...gridProperties,
        [properties]: true,
      };
    });

    if (!this.gridPropertiesName.includes('sortable')) {
      gridProperties = {
        ...gridProperties,
        sortable: false,
      };
    }

    if (!this.gridPropertiesName.includes('striped')) {
      gridProperties = {
        ...gridProperties,
        striped: false,
      };
    }

    if (!this.gridPropertiesName.includes('selectableEntireLine')) {
      gridProperties = {
        ...gridProperties,
        selectableEntireLine: false,
      };
    }

    if (!this.gridPropertiesName.includes('showMoreVisible')) {
      gridProperties = {
        ...gridProperties,
        showMoreVisible: false,
      };
    }

    if (!this.gridPropertiesName.includes('groupable')) {
      gridProperties = {
        ...gridProperties,
        groupable: false,
      };
    }

    this.gridProperties = { ...gridProperties };
  }
}`;function Hn(d,l){if(d&1){let m=I();i(0,"div",7)(1,"po-container",8)(2,"po-select",9),g("ngModelChange",function(n){u(m);let a=x();return v(a.fieldValue,n)||(a.fieldValue=n),E(n)}),t(),i(3,"po-select",10),g("ngModelChange",function(n){u(m);let a=x();return v(a.fieldLabel,n)||(a.fieldLabel=n),E(n)}),t(),i(4,"po-input",11),g("ngModelChange",function(n){u(m);let a=x();return v(a.height,n)||(a.height=n),E(n)}),t(),i(5,"div",12)(6,"po-switch",13),g("ngModelChange",function(n){u(m);let a=x();return v(a.disabled,n)||(a.disabled=n),E(n)}),t(),i(7,"po-switch",14),g("ngModelChange",function(n){u(m);let a=x();return v(a.multiple,n)||(a.multiple=n),E(n)}),t(),i(8,"po-radio-group",15),g("ngModelChange",function(n){u(m);let a=x();return v(a.size,n)||(a.size=n),E(n)}),t()(),i(9,"div",12)(10,"po-textarea",16),g("ngModelChange",function(n){u(m);let a=x();return v(a.filterSearchSelect,n)||(a.filterSearchSelect=n),E(n)}),T("p-change-model",function(){u(m);let n=x();return E(n.changeFilterSearchSelects())}),t(),i(11,"po-textarea",17),g("ngModelChange",function(n){u(m);let a=x();return v(a.keysLabel,n)||(a.keysLabel=n),E(n)}),T("p-change-model",function(){u(m);let n=x();return E(n.changeKeysLabel())}),t()(),i(12,"po-textarea",18),g("ngModelChange",function(n){u(m);let a=x();return v(a.literals,n)||(a.literals=n),E(n)}),T("p-change-model",function(){u(m);let n=x();return E(n.changeLiterals())}),t()(),i(13,"po-container",8)(14,"po-checkbox-group",19),g("ngModelChange",function(n){u(m);let a=x();return v(a.gridPropertiesName,n)||(a.gridPropertiesName=n),E(n)}),T("p-change",function(){u(m);let n=x();return E(n.updateGridProperties())}),t()()()}if(d&2){let m=x();p(2),f("ngModel",m.fieldValue),c("p-options",m.fieldValueOptions),p(),f("ngModel",m.fieldLabel),c("p-options",m.fieldLabelOptions),p(),f("ngModel",m.height),p(2),f("ngModel",m.disabled),p(),f("ngModel",m.multiple),p(),f("ngModel",m.size),c("p-options",m.sizesOptions),p(2),f("ngModel",m.filterSearchSelect),p(),f("ngModel",m.keysLabel),p(),c("p-rows",2),f("ngModel",m.literals),p(2),f("ngModel",m.gridPropertiesName),c("p-columns",4)("p-options",m.gridPropertiesOptions)}}var Ne=(()=>{let l=class l{constructor(){this.htmlCode=Ei,this.tsCode=xi,this.columns=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail"}],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.disabled=!1,this.event="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.height=450,this.keysLabel="",this.literals="",this.multiple=!0,this.size="medium",this.columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Nome"},{value:"nickname",label:"Apelido"},{value:"email",label:"E-mail"}],this.gridPropertiesOptions=[{value:"autoSize",label:"AutoSize"},{value:"autoSizeOnScroll",label:"AutoSizeOnScroll"},{value:"draggable",label:"Draggable"},{value:"groupable",label:"Groupable"},{value:"hideSelectAll",label:"HideSelectAll"},{value:"resizable",label:"Resizable"},{value:"selectableEntireLine",label:"SelectableEntireLine"},{value:"striped",label:"Striped"},{value:"showDraggableIcon",label:"ShowDraggableIcon"},{value:"showMoreDisabled",label:"ShowMoreDisabled"},{value:"showMoreVisible",label:"ShowMoreVisible"},{value:"sortable",label:"Sortable"},{value:"virtualScroll",label:"VirtualScroll"}],this.sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.fieldLabelOptions=[{value:"name",label:"Name"},...this.columnsOptions],this.fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"]}changeEvent(r,n){n instanceof KeyboardEvent&&(n={key:n.key,code:n.code,altKey:n.altKey,ctrlKey:n.ctrlKey,shiftKey:n.shiftKey}),this.event=`<p>${r} - ${n?JSON.stringify(n):""}</p>`+this.event}changeFilterSearchSelects(){try{this.customFilterSearchSelect=JSON.parse(this.filterSearchSelect)}catch{this.customFilterSearchSelect=[]}}changeKeysLabel(){try{this.customKeysLabel=JSON.parse(this.keysLabel)}catch{this.customKeysLabel=[]}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals={}}}updateGridProperties(){let r={};this.gridPropertiesName.forEach(n=>{r=Q(O({},r),{[n]:!0})}),this.gridPropertiesName.includes("sortable")||(r=Q(O({},r),{sortable:!1})),this.gridPropertiesName.includes("striped")||(r=Q(O({},r),{striped:!1})),this.gridPropertiesName.includes("selectableEntireLine")||(r=Q(O({},r),{selectableEntireLine:!1})),this.gridPropertiesName.includes("showMoreVisible")||(r=Q(O({},r),{showMoreVisible:!1})),this.gridPropertiesName.includes("groupable")||(r=Q(O({},r),{groupable:!1})),this.gridProperties=O({},r)}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-lookup-data-labs-doc"]],standalone:!1,decls:13,vars:16,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-change","t-change-model","t-error","t-focus","t-keydown","t-selected","t-columns","t-disabled","t-field-label","t-field-value","t-filter-search-select","t-grid-properties","t-height","t-keys-label","t-literals","t-multiple","t-size"],[1,"po-mt-1",2,"display","flex"],[2,"max-height","150px",3,"innerHTML"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","heigth","p-label","Height",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],[1,"po-row"],["name","disabled","p-label","Disabled",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","Multiple","p-label","Multiple",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterSearchSelect","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]',"p-label","Filter Search Select",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","keysLabel","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]',"p-label","Keys Label",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","literals","p-label","Literals","p-help",'{ "placeholder": "Busca avan\xE7ada" }',1,"po-lg-6",3,"ngModelChange","p-change-model","p-rows","ngModel"],["name","gridPropertiesName","p-label","Grid Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"]],template:function(n,a){if(n&1){let s=I();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"thf-lookup-data",3),T("t-change",function(C){return u(s),E(a.changeEvent("t-change",C))})("t-change-model",function(C){return u(s),E(a.changeEvent("t-change-model",C))})("t-error",function(C){return u(s),E(a.changeEvent("t-error",C))})("t-focus",function(){return u(s),E(a.changeEvent("t-focus",""))})("t-keydown",function(C){return u(s),E(a.changeEvent("t-keydown",C))})("t-selected",function(C){return u(s),E(a.changeEvent("t-selected",C))}),t(),i(5,"po-container",4)(6,"span",1),e(7,"Events"),t(),o(8,"po-divider",2)(9,"div",5),t(),o(10,"app-code-accordion-doc",6),G(11,Hn,15,16,"ng-template",null,0,Z),t()}if(n&2){let s=W(12);p(4),c("t-columns",a.columns)("t-disabled",a.disabled)("t-field-label",a.fieldLabel)("t-field-value",a.fieldValue)("t-filter-search-select",a.customFilterSearchSelect)("t-grid-properties",a.gridProperties)("t-height",a.height)("t-keys-label",a.customKeysLabel)("t-literals",a.customLiterals)("t-multiple",a.multiple)("t-size",a.size),p(5),c("innerHTML",a.event,Ue),p(),c("properties",!0)("dynamicTemplate",s)("htmlCode",a.htmlCode)("tsCode",a.tsCode)}},dependencies:[B,K,y,P,fe,le,de,Ie,ge,_e,se,w],encapsulation:2});let d=l;return d})();var Qe=(()=>{let l=class l{};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-lookup-data"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Lookup-Data","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],[1,"samples-container"],["labs","",1,"samples-container"]],template:function(n,a){n&1&&(i(0,"po-page-default",0)(1,"api-thf-lookup-data")(2,"div",1)(3,"div",2),o(4,"app-thf-lookup-data-basic-doc")(5,"app-thf-lookup-data-form-doc")(6,"app-thf-lookup-data-custom-items-doc"),t()(),i(7,"div",3),o(8,"app-thf-lookup-data-labs-doc"),t()()())},dependencies:[ee,kt,je,Oe,Ge,Ne],encapsulation:2});let d=l;return d})();var Wn=["splitter"],Kn=["paneForm"],$n=()=>({label:"horizontal",value:"horizontal"}),Jn=()=>({label:"vertical",value:"vertical"}),Zn=(d,l)=>[d,l];function Xn(d,l){if(d&1){let m=I();i(0,"thf-splitter-pane",10),T("t-size-change",function(){u(m);let n=x();return E(n.changeEvent("(t-size-change)"))}),i(1,"div",11)(2,"po-widget",12),T("p-primary-action",function(){let n=u(m).index,a=x();return E(a.removePane(n))}),i(3,"div",13),e(4),t()()()()}if(d&2){let m=l.$implicit,r=l.index;c("t-resizable",m.resizable)("t-scrollable",m.scrollable)("t-size",m.size),p(4),et(" Pane Content ",r," ")}}function Yn(d,l){if(d&1){let m=I();i(0,"div",14)(1,"po-container",15),o(2,"po-dynamic-form",16,2),i(4,"div",17)(5,"po-button",18),T("p-click",function(){u(m);let n=W(3),a=x();return E(a.addPane(n.form.value))}),t()()(),i(6,"po-container",15)(7,"po-switch",19),g("ngModelChange",function(n){u(m);let a=x();return v(a.disabled,n)||(a.disabled=n),E(n)}),t(),i(8,"po-radio-group",20),g("ngModelChange",function(n){u(m);let a=x();return v(a.orientation,n)||(a.orientation=n),E(n)}),t()()(),i(9,"div",17)(10,"po-button",21),T("p-click",function(){u(m);let n=x();return E(n.restore())}),t()()}if(d&2){let m=W(3),r=x();p(2),c("p-fields",r.panesFieldsForm)("p-value",r.pane),p(3),c("p-disabled",m.form.invalid),p(2),f("ngModel",r.disabled),p(),f("ngModel",r.orientation),c("p-options",Pe(8,Zn,J(6,$n),J(7,Jn)))}}var Si=(()=>{let l=class l{constructor(){this.event="",this.panes=[],this.pane={},this.disabled=!1,this.orientation="horizontal",this.panesFieldsForm=[{property:"size",gridColumns:6,type:"number",maxValue:100,minValue:0,maxLength:3,step:5,help:"Valor em porc (%)"},{property:"scrollable",type:"boolean",gridColumns:3}],this.htmlCode=`<thf-splitter
  #splitter
  name="splitter"
  [t-disabled]="disabled"
  [t-orientation]="orientation"
  (t-layout-change)="changeEvent('(t-layout-change)')"
>
  <thf-splitter-pane
    *ngFor="let pane of panes; let i = index"
    (t-size-change)="changeEvent('(t-size-change)')"
    [t-resizable]="pane.resizable"
    [t-scrollable]="pane.scrollable"
    [t-size]="pane.size"
  >
    <div class="po-m-2">
      <po-widget p-title="Title Pane" p-primary-label="Close" (p-primary-action)="removePane(i)">
        <div class="po-font-subtitle po-text-center">Pane Content {{ i }}</div>
      </po-widget>
    </div>
  </thf-splitter-pane>
</thf-splitter>

<po-container class="po-mt-1" style="display: flex">
  <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
</po-container>

<div class="po-row po-mt-2 po-mb-2" style="display: block">
  <po-container class="po-mb-2" style="display: flex">
    <po-dynamic-form #paneForm [p-fields]="panesFieldsForm" [p-value]="pane"> </po-dynamic-form>
    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Pane"
        [p-disabled]="paneForm.form.invalid"
        (p-click)="addPane(paneForm.form.value)"
      />
    </div>
  </po-container>

  <po-container class="po-mb-2" style="display: flex">
    <po-switch class="po-md-6" name="disabled" p-label="Disabled" [(ngModel)]="disabled" />

    <po-radio-group
      class="po-md-6"
      name="orientation"
      p-label="orientation"
      [(ngModel)]="orientation"
      [p-options]="[
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' }
      ]"
    />
  </po-container>
</div>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Restore" (p-click)="restore()"> </po-button>
</div>
`,this.tsCode=`import { Component, OnInit, ViewChild } from '@angular/core';
import {
  PoDynamicFormComponent,
  PoDynamicFormField,
} from '@po-ui/ng-components';
import {
  ThfSplitterComponent,
  ThfSplitterPaneComponent,
} from '@totvs/thf-components';
 
@Component({
  selector: 'app-thf-splitter-labs-doc',
  templateUrl: './thf-splitter-labs-doc.component.html',
  styleUrl: './thf-splitter-labs-doc.component.css',
  standalone: false,
})
  export class ThfSplitterLabsDocComponent implements OnInit {
@ViewChild('splitter', { static: true }) splitter!: ThfSplitterComponent;
  @ViewChild('paneForm', { static: true }) paneForm!: PoDynamicFormComponent;

  event: string = '';
  panes: Array<ThfSplitterPaneComponent> = [];
  pane = {};
  disabled = false;
  orientation = 'horizontal';

  panesFieldsForm: Array<PoDynamicFormField> = [
    {
      property: 'size',
      gridColumns: 6,
      type: 'number',
      maxValue: 100,
      minValue: 0,
      maxLength: 3,
      step: 5,
      help: 'Valor em porc (%)'
    },
    { property: 'scrollable', type: 'boolean', gridColumns: 3 }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  restore() {
    this.event = '';
    this.panes = [];
    this.pane = {
      size: '50',
      scrollable: false
    };
  }

  addPane(_pane: any) {
    const newPane = Object.assign({}, _pane);
    newPane.size += '%';
    this.panes.push(newPane);
    this.pane = {
      size: '50',
      scrollable: false
    };
  }

  removePane(idx: number) {
    this.panes.splice(idx, 1);
  }
}`}ngOnInit(){this.restore()}changeEvent(r){this.event=r}restore(){this.event="",this.panes=[],this.pane={size:"50",scrollable:!1}}addPane(r){let n=Object.assign({},r);n.size+="%",this.panes.push(n),this.pane={size:"50",scrollable:!1}}removePane(r){this.panes.splice(r,1)}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-splitter-labs-doc"]],viewQuery:function(n,a){if(n&1&&(A(Wn,7),A(Kn,7)),n&2){let s;q(s=k())&&(a.splitter=s.first),q(s=k())&&(a.paneForm=s.first)}},standalone:!1,decls:12,vars:8,consts:[["splitter",""],["customTemplate",""],["paneForm",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","splitter",3,"t-layout-change","t-disabled","t-orientation"],[3,"t-resizable","t-scrollable","t-size","t-size-change",4,"ngFor","ngForOf"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[3,"t-size-change","t-resizable","t-scrollable","t-size"],[1,"po-m-2"],["p-title","Title Pane","p-primary-label","Close",3,"p-primary-action"],[1,"po-font-subtitle","po-text-center"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Pane",1,"po-md-3",3,"p-click","p-disabled"],["name","disabled","p-label","Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["name","orientation","p-label","orientation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(n,a){if(n&1){let s=I();i(0,"po-container")(1,"span",3),e(2,"Labs"),t(),o(3,"po-divider",4),i(4,"thf-splitter",5,0),T("t-layout-change",function(){return u(s),E(a.changeEvent("(t-layout-change)"))}),G(6,Xn,5,4,"thf-splitter-pane",6),t(),i(7,"po-container",7),o(8,"po-info",8),t(),o(9,"app-code-accordion-doc",9),G(10,Yn,11,11,"ng-template",null,1,Z),t()}if(n&2){let s=W(11);p(4),c("t-disabled",a.disabled)("t-orientation",a.orientation),p(2),c("ngForOf",a.panes),p(2),c("p-value",a.event),p(),c("properties",!0)("dynamicTemplate",s)("htmlCode",a.htmlCode)("tsCode",a.tsCode)}},dependencies:[lt,B,K,U,y,P,Tt,le,_e,me,ye,ne,ie,w],encapsulation:2});let d=l;return d})();var t0=["gridComponent"];function i0(d,l){if(d&1){let m=I();i(0,"thf-splitter-pane",9)(1,"po-widget",11),T("p-primary-action",function(){u(m);let n=x();return E(n.closePane())}),i(2,"div",12),o(3,"po-info",13),t(),i(4,"div",12),o(5,"po-info",14),t(),i(6,"div",12),o(7,"po-info",15),t(),i(8,"div",12),o(9,"po-info",16),t()()()}if(d&2){let m=x();c("t-size","30%"),p(3),c("p-value",m.selectedHero.name),p(2),c("p-value",m.selectedHero.nickname),p(2),c("p-value",m.selectedHero.email),p(2),c("p-value",m.selectedHero.city)}}var bi=(()=>{let l=class l{constructor(r,n){this.router=r,this.changeDetector=n,this.showHeroPane=!1,this.selectedHero=null,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",email:"hulksmash@marvel.com",status:1,city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",email:"spvalueerman@marvel.com",status:2,city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,email:"goku@dbz.com",city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,email:"hawkeye@marvel.com",city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,email:"nickfuckingfury@marvel.com",city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,email:"gohan@dbz.com",city:null}],this.column=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}]},{property:"city",label:"Cidade"}],this.htmlCode=`  <thf-splitter t-disabled>
    <thf-splitter-pane>
      <div class="po-lg-12 po-pt-2 po-pb-2">
        <div
          class="po-row"
          style="justify-content: space-between; align-items: center"
        >
          <p class="po-font-subtitle">Controle de Her\xF3is</p>
          <po-button
            p-icon="an an-star"
            p-label="Star"
            (p-click)="openExternalLink()"
          ></po-button>
        </div>
        <thf-grid
          #gridComponent
          [t-height]="300"
          [t-selectable]="true"
          [t-single-select]="true"
          [t-items]="items"
          [t-columns]="column"
          [t-sortable]="true"
          (t-selected)="selectItem($event)"
          (t-unselected)="closePane()"
        />
      </div>
    </thf-splitter-pane>

    @if (showHeroPane) {
    <thf-splitter-pane [t-size]="'30%'">
      <po-widget
        p-title="Her\xF3i Selecionado"
        p-primary-label="Fechar Painel"
        (p-primary-action)="closePane()"
      >
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Name"
            [p-value]="selectedHero.name"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Apelido"
            [p-value]="selectedHero.nickname"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Contato"
            [p-value]="selectedHero.email"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Reside em"
            [p-value]="selectedHero.city"
          />
        </div>
      </po-widget>
    </thf-splitter-pane>
    }
  </thf-splitter>
`,this.tsCode=`import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ThfGridColumn, ThfGridComponent } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-splitter-grid-doc',
  templateUrl: './thf-splitter-grid-doc.component.html',
  styleUrl: './thf-splitter-grid-doc.component.css',
  standalone: false,
})
export class ThfSplitterGridDocComponent implements AfterViewInit {
  @ViewChild('gridComponent', { static: true })
  grid!: ThfGridComponent;

  showHeroPane = false;
  selectedHero: any = null;

  items = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      email: 'hulksmash@marvel.com',
      status: 1,
      city: 'Lages',
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      email: 'spvalueerman@marvel.com',
      status: 2,
      city: 'Brusque',
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      email: 'goku@dbz.com',
      city: 'Guarulhos',
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      email: 'hawkeye@marvel.com',
      city: 'Campinas',
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      email: 'nickfuckingfury@marvel.com',
      city: null,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      email: 'gohan@dbz.com',
      city: null,
    },
  ];

  column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
    },
    { property: 'city', label: 'Cidade' },
  ];

  constructor(
    protected router: Router,
    protected changeDetector: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.grid.selectRowItem(this.items[0]);
    this.selectItem(this.items[0]);

    this.changeDetector.detectChanges();
  }

  openExternalLink() {
    window.open('https://github.com/po-ui/po-angular');
  }

  selectItem(hero: any) {
    if (!hero) {
      this.closePane();
      return;
    }
    this.selectedHero = {
      id: hero.id || '',
      name: hero.name || '',
      nickname: hero.nickname || '',
      email: hero.email || '',
      city: hero.city || '',
    };
    this.showHeroPane = true;
  }

  closePane() {
    this.showHeroPane = false;
    this.selectedHero = null;
    this.grid.unselectRows();
  }
}`}ngAfterViewInit(){this.grid.selectRowItem(this.items[0]),this.selectItem(this.items[0]),this.changeDetector.detectChanges()}openExternalLink(){window.open("https://github.com/po-ui/po-angular")}selectItem(r){if(!r){this.closePane();return}this.selectedHero={id:r.id||"",name:r.name||"",nickname:r.nickname||"",email:r.email||"",city:r.city||""},this.showHeroPane=!0}closePane(){this.showHeroPane=!1,this.selectedHero=null,this.grid.unselectRows()}};l.\u0275fac=function(n){return new(n||l)(R(bt),R(at))},l.\u0275cmp=b({type:l,selectors:[["app-thf-splitter-grid-doc"]],viewQuery:function(n,a){if(n&1&&A(t0,7),n&2){let s;q(s=k())&&(a.grid=s.first)}},standalone:!1,decls:15,vars:9,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["t-disabled",""],[1,"po-lg-12","po-pt-2","po-pb-2"],[1,"po-row",2,"justify-content","space-between","align-items","center"],[1,"po-font-subtitle"],["p-icon","an an-star","p-label","Star",3,"p-click"],[3,"t-selected","t-unselected","t-height","t-selectable","t-single-select","t-items","t-columns","t-sortable"],[3,"t-size"],[3,"htmlCode","tsCode"],["p-title","Her\xF3i Selecionado","p-primary-label","Fechar Painel",3,"p-primary-action"],[1,"po-row"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Apelido",1,"po-md-12",3,"p-value"],["p-label","Contato",1,"po-md-12",3,"p-value"],["p-label","Reside em",1,"po-md-12",3,"p-value"]],template:function(n,a){if(n&1){let s=I();i(0,"po-container")(1,"span",1),e(2,"Divis\xE3o din\xE2mica"),t(),o(3,"po-divider",2),i(4,"thf-splitter",3)(5,"thf-splitter-pane")(6,"div",4)(7,"div",5)(8,"p",6),e(9,"Controle de Her\xF3is"),t(),i(10,"po-button",7),T("p-click",function(){return u(s),E(a.openExternalLink())}),t()(),i(11,"thf-grid",8,0),T("t-selected",function(C){return u(s),E(a.selectItem(C))})("t-unselected",function(){return u(s),E(a.closePane())}),t()()(),xe(13,i0,10,5,"thf-splitter-pane",9),t(),o(14,"app-code-accordion-doc",10),t()}n&2&&(p(11),c("t-height",300)("t-selectable",!0)("t-single-select",!0)("t-items",a.items)("t-columns",a.column)("t-sortable",!0),p(2),Se(a.showHeroPane?13:-1),p(),c("htmlCode",a.htmlCode)("tsCode",a.tsCode))},dependencies:[U,y,P,me,ye,M,ne,ie,w],encapsulation:2});let d=l;return d})();var hi=(()=>{let l=class l{constructor(){this.optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7},rendererOption:"svg"},this.optionsPie={rendererOption:"svg"},this.categoriesColumn=["coffee","chocolate","tea"],this.evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:Ce.Column},{label:"2017",data:[93,52,18],type:Ce.Column},{label:"2020",data:[95,21,-17],type:Ce.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:Ce.Line,color:"color-10"}],this.coffeeProduction=[{label:"Brazil",data:2796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}],this.htmlCode=`<thf-splitter>
  <thf-splitter-pane>
    <po-widget p-title="Chart type column with line">
      <po-chart
        p-title="Evolution of coffee and some competitors - %"
        [p-options]="optionsColumn"
        [p-categories]="categoriesColumn"
        [p-series]="evolutionOfCoffeeAndSomeCompetitors"
      >
      </po-chart>
    </po-widget>
  </thf-splitter-pane>
  <thf-splitter-pane [t-size]="'50%'">
    <po-widget p-title="Chart type pizza">
      <po-chart p-title="Top 5 coffee producing countries (in tons)" [p-series]="coffeeProduction"> </po-chart>
    </po-widget>
  </thf-splitter-pane>
</thf-splitter>
`,this.tsCode=`import { Component } from '@angular/core';
import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'app-thf-splitter-chart-doc',
  templateUrl: './thf-splitter-chart-doc.component.html',
  styleUrl: './thf-splitter-chart-doc.component.css',
  standalone: false,
})
export class ThfSplitterChartDocComponent {
    optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7,
    },
    rendererOption: 'svg',
  };
  optionsPie: PoChartOptions = {
    rendererOption: 'svg',
  };

  categoriesColumn: Array<string> = ['coffee', 'chocolate', 'tea'];
  evolutionOfCoffeeAndSomeCompetitors: Array<PoChartSerie> = [
    { label: '2014', data: [91, 40, 42], type: PoChartType.Column },
    { label: '2017', data: [93, 52, 18], type: PoChartType.Column },
    { label: '2020', data: [95, 21, -17], type: PoChartType.Column },
    {
      label: 'Coffee consumption in Brazil',
      data: [34, 27, 79],
      type: PoChartType.Line,
      color: 'color-10',
    },
  ];
  coffeeProduction: Array<PoChartSerie> = [
    {
      label: 'Brazil',
      data: 2796,
      tooltip: 'Brazil (South America)',
      color: 'color-10',
    },
    { label: 'Vietnam', data: 1076, tooltip: 'Vietnam (Asia)' },
    { label: 'Colombia', data: 688, tooltip: 'Colombia (South America)' },
    { label: 'Indonesia', data: 682, tooltip: 'Indonesia (Asia/Oceania)' },
    { label: 'Peru', data: 273, tooltip: 'Peru (South America)' },
  ];
}
`}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-splitter-chart-doc"]],standalone:!1,decls:12,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["p-title","Chart type column with line"],["p-title","Evolution of coffee and some competitors - %",3,"p-options","p-categories","p-series"],[3,"t-size"],["p-title","Chart type pizza"],["p-title","Top 5 coffee producing countries (in tons)",3,"p-series","p-options"],[3,"htmlCode","tsCode"]],template:function(n,a){n&1&&(i(0,"po-container")(1,"span",0),e(2,"Divis\xE3o com gr\xE1ficos din\xE2micos"),t(),o(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"po-widget",2),o(7,"po-chart",3),t()(),i(8,"thf-splitter-pane",4)(9,"po-widget",5),o(10,"po-chart",6),t()()(),o(11,"app-code-accordion-doc",7),t()),n&2&&(p(7),c("p-options",a.optionsColumn)("p-categories",a.categoriesColumn)("p-series",a.evolutionOfCoffeeAndSomeCompetitors),p(),c("t-size","50%"),p(2),c("p-series",a.coffeeProduction)("p-options",a.optionsPie),p(),c("htmlCode",a.htmlCode)("tsCode",a.tsCode))},dependencies:[vt,y,P,ye,ne,ie,w],encapsulation:2});let d=l;return d})();var fi=(()=>{let l=class l{constructor(){this.htmlCode=`<thf-splitter>
          <thf-splitter-pane>
            <h4>Pane 1</h4>
          </thf-splitter-pane>

          <thf-splitter-pane>
            <thf-splitter [t-orientation]="'vertical'">
              <thf-splitter-pane>
                <h4>Pane 2</h4>
              </thf-splitter-pane>
              <thf-splitter-pane>
                <h4>Pane 3</h4>
              </thf-splitter-pane>
            </thf-splitter>
          </thf-splitter-pane>
        </thf-splitter>
`,this.tsCode=`import { Component } from '@angular/core';
  
@Component({
  selector: 'app-thf-splitter-basic-doc',
  standalone: false,
  templateUrl: './thf-thf-splitter-basic-doc.html',
})
export class ThfSplitterBasicDocComponent {
}
  `}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-splitter-basic-doc"]],standalone:!1,decls:17,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-orientation"],[3,"htmlCode","tsCode"]],template:function(n,a){n&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic"),t(),o(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"h4"),e(7,"Pane 1"),t()(),i(8,"thf-splitter-pane")(9,"thf-splitter",2)(10,"thf-splitter-pane")(11,"h4"),e(12,"Pane 2"),t()(),i(13,"thf-splitter-pane")(14,"h4"),e(15,"Pane 3"),t()()()()(),o(16,"app-code-accordion-doc",3),t()),n&2&&(p(9),c("t-orientation","vertical"),p(7),c("htmlCode",a.htmlCode)("tsCode",a.tsCode))},dependencies:[y,P,ne,ie,w],encapsulation:2});let d=l;return d})();var r0=()=>[bi,hi,fi];function l0(d,l){d&1&&(i(0,"div",3),o(1,"app-thf-splitter-basic-doc")(2,"app-thf-splitter-grid-doc")(3,"app-thf-splitter-chart-doc"),t())}function d0(d,l){d&1&&o(0,"po-loading-overlay",4),d&2&&c("p-screen-lock",!1)}var vi=(()=>{let l=class l{};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-splitter"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Splitter","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],["labs","",1,"samples-container"],[1,"samples-container"],[3,"p-screen-lock"]],template:function(n,a){n&1&&(i(0,"po-page-default",0)(1,"api-thf-splitter")(2,"div",1),We(3,l0,4,0)(4,d0,1,1),Ke(5,3,r0,null,4),$e(),t(),i(7,"div",2),o(8,"app-thf-splitter-labs-doc"),t()()())},dependencies:[ht,ee,Ft,Si],encapsulation:2});let d=l;return d})();var gi=(()=>{let l=class l{};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-splitter-pane"]],standalone:!1,decls:2,vars:0,consts:[["p-title","THF-Splitter-Pane","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"]],template:function(n,a){n&1&&(i(0,"po-page-default",0),o(1,"api-thf-splitter-pane"),t())},dependencies:[ee,_t],encapsulation:2});let d=l;return d})();var m0=[{path:"thf-grid",component:ei},{path:"thf-lookup",component:li},{path:"thf-lookup-data",component:Qe},{path:"thf-splitter",component:vi},{path:"thf-splitter-pane",component:gi}],yi=(()=>{let l=class l{};l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=Ee({type:l}),l.\u0275inj=ue({imports:[Ve.forChild(m0),Ve]});let d=l;return d})();var js=(()=>{let l=class l{};l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=Ee({type:l}),l.\u0275inj=ue({imports:[we,ut,Et,Le,wt,Dt,It,yi,St]});let d=l;return d})();export{js as DocumentationModule};
