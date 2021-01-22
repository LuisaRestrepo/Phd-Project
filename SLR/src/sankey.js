/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_material);

//am4core.useTheme(am4themes_animated);
//am4core.useTheme(am4themes_kelly);
//am4core.useTheme(am4themes_myTheme);
// Themes end

var chart = am4core.create("chartdiv", am4charts.SankeyDiagram);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in



chart.data = [
    { from: "PAPERS", to: "Planning-YES", value: 16 },
    { from: "PAPERS", to: "Planning-NO", value: 0 },
    { from: "Planning-YES", to: "Dependent", value: 2 },
    { from: "Planning-NO", to: "", value: 0 },
    { from: "Planning-YES", to: "Independent", value: 14 },
    { from: "Dependent", to: "Energy-efficiency", value: 1 },
    { from: "Dependent", to: "Scalability", value: 0 },
    { from: "Dependent", to: "Performance", value: 1 },
    { from: "Dependent", to: "Maintainability", value: 0 },
    { from: "Dependent", to: "Reliability", value: 1 },
    { from: "Dependent", to: "Others", value: 1 },
    { from: "Independent", to: "Energy-efficiency", value: 3 },
    { from: "Independent", to: "Scalability", value: 4 },
    { from: "Independent", to: "Performance", value: 8 },
    { from: "Independent", to: "Maintainability", value: 3 },
    { from: "Independent", to: "Reliability", value: 5 },
    { from: "Independent", to: "Others", value: 3 },
    { from: "Energy-efficiency", to: "System modeling (UML)", value: 1 },
    { from: "Energy-efficiency", to: "Natural language", value: 4 },
    { from: "Energy-efficiency", to: "Mathematical specification", value: 1 },
    { from: "Scalability", to: "System modeling (UML)", value: 2 },
    { from: "Scalability", to: "Natural language", value: 4 },
    { from: "Scalability", to: "Mathematical specification", value: 0 },
    { from: "Performance", to: "System modeling (UML)", value: 4 },
    { from: "Performance", to: "Natural language", value: 9 },
    { from: "Performance", to: "Mathematical specification", value: 0 },
    { from: "Maintainability", to: "System modeling (UML)", value: 3 },
    { from: "Maintainability", to: "Natural language", value: 4 },
    { from: "Maintainability", to: "Mathematical specification", value: 0 },
    { from: "Reliability", to: "System modeling (UML)", value: 2 },
    { from: "Reliability", to: "Natural language", value: 6 },
    { from: "Reliability", to: "Mathematical specification", value: 0 },
    { from: "Others", to: "System modeling (UML)", value: 3 },
    { from: "Others", to: "Natural language", value: 4 },
    { from: "Others", to: "Mathematical specification", value: 1 },
    { from: "System modeling (UML)", to: "Cyber", value: 7 },
    { from: "System modeling (UML)", to: "Network", value: 2 },
    { from: "System modeling (UML)", to: "Physical", value: 0 },
    { from: "Natural language", to: "Cyber", value: 12 },
    { from: "Natural language", to: "Network", value: 4 },
    { from: "Natural language", to: "Physical", value: 2 },
    { from: "Mathematical specification", to: "Cyber", value: 1 },
    { from: "Mathematical specification", to: "Network", value: 0 },
    { from: "Mathematical specification", to: "Physical", value: 1 },
    { from: "Cyber", to: "Cloud-service", value: 3 },
    { from: "Cyber", to: "Client-server", value: 2 },
    { from: "Cyber", to: "Edge computing", value: 1 },
    { from: "Cyber", to: "Layered", value: 2 },
    { from: "Cyber", to: "N/A", value: 7 },
    { from: "Network", to: "Cloud-service", value: 1 },
    { from: "Network", to: "Client-server", value: 1 },
    { from: "Network", to: "Edge computing", value: 2 },
    { from: "Network", to: "Layered", value: 0 },
    { from: "Network", to: "N/A", value: 1 },
    { from: "Physical", to: "Cloud-service", value: 0 },
    { from: "Physical", to: "Client-server", value: 0 },
    { from: "Physical", to: "Edge computing", value: 1 },
    { from: "Physical", to: "Layered", value: 1 },
    { from: "Physical", to: "N/A", value: 0 },
    { from: "Cloud-service", to: "MAPE-K", value: 2 },
    { from: "Cloud-service", to: "Agents", value: 0 },
    { from: "Cloud-service", to: "Others2", value: 3 },
    { from: "Client-server", to: "MAPE-K", value: 2 },
    { from: "Client-server", to: "Agents", value: 0 },
    { from: "Client-server", to: "Others2", value: 0 },
    { from: "Edge computing", to: "MAPE-K", value: 2 },
    { from: "Edge computing", to: "Agents", value: 0 },
    { from: "Edge computing", to: "Others2", value: 3 },
    { from: "Layered", to: "MAPE-K", value: 1 },
    { from: "Layered", to: "Agents", value: 1 },
    { from: "Layered", to: "Others2", value: 2 },
    { from: "N/A", to: "MAPE-K", value: 6 },
    { from: "N/A", to: "Agents", value: 1 },
    { from: "N/A", to: "Others2", value: 3 },
    { from: "MAPE-K", to: "Web-application", value: 2 },
    { from: "MAPE-K", to: "Web-service", value: 3 },
    { from: "MAPE-K", to: "Component-based", value: 6 },
    { from: "MAPE-K", to: "Other", value: 3 },
    { from: "Agents", to: "Web-application", value: 0 },
    { from: "Agents", to: "Web-service", value: 0 },
    { from: "Agents", to: "Component-based", value: 1 },
    { from: "Agents", to: "Other", value: 0 },
    { from: "Others2", to: "Web-application", value: 0 },
    { from: "Others2", to: "Web-service", value: 2 },
    { from: "Others2", to: "Component-based", value: 3 },
    { from: "Others2", to: "Other", value: 3 },
    { from: "Web-application", to: "Physical components", value: 2 },
    { from: "Web-application", to: "Model representation", value: 0 },
    { from: "Web-service", to: "Physical components", value: 2 },
    { from: "Web-service", to: "Model representation", value: 2 },
    { from: "Component-based", to: "Physical components", value: 2 },
    { from: "Component-based", to: "Model representation", value: 7 },
    { from: "Other", to: "Physical components", value: 2 },
    { from: "Other", to: "Model representation", value: 3 },
    { from: "Physical components", to: "Integration-Yes", value: 7 },
    { from: "Physical components", to: "Integration-No", value: 0 },
    { from: "Model representation", to: "Integration-Yes", value: 9 },
    { from: "Model representation", to: "Integration-No", value: 3 },
    { from: "Integration-Yes", to: "UnitTesting-Yes", value: 0 },
    { from: "Integration-Yes", to: "UnitTesting-No", value: 13 },
    { from: "Integration-No", to: "UnitTesting-Yes", value: 0 },
    { from: "Integration-No", to: "UnitTesting-No", value: 2 },
    { from: "UnitTesting-Yes", to: "IntegrationTesting-Yes", value: 0 },
    { from: "UnitTesting-Yes", to: "IntegrationTesting-No", value: 0 },
    { from: "UnitTesting-No", to: "IntegrationTesting-Yes", value: 7 },
    { from: "UnitTesting-No", to: "IntegrationTesting-No", value: 7 },
    { from: "IntegrationTesting-Yes", to: "Simulation", value: 5 },
    { from: "IntegrationTesting-Yes", to: "Small-scale", value: 3 },
    { from: "IntegrationTesting-Yes", to: "Real-world", value: 1 },
    { from: "IntegrationTesting-No", to: "Simulation", value: 4 },
    { from: "IntegrationTesting-No", to: "Small-scale", value: 1 },
    { from: "IntegrationTesting-No", to: "Real-world", value: 1 },
    { from: "Simulation", to: "T-Scalability", value: 2 },
    { from: "Simulation", to: "T-Performance", value: 4 },
    { from: "Simulation", to: "T-Energy efficiency", value: 2 },
    { from: "Simulation", to: "T-Relaibility", value: 2 },
    { from: "Small-scale", to: "T-Scalability", value: 2 },
    { from: "Small-scale", to: "T-Performance", value: 3 },
    { from: "Small-scale", to: "T-Energy efficiency", value: 1 },
    { from: "Small-scale", to: "T-Relaibility", value: 1 },
    { from: "Real-world", to: "T-Scalability", value: 1 },
    { from: "Real-world", to: "T-Performance", value: 2 },
    { from: "Real-world", to: "T-Energy efficiency", value: 1 },
    { from: "Real-world", to: "T-Relaibility", value: 1 },
    { from: "T-Scalability", to: "Maintenance-Yes", value: 2 },
    { from: "T-Scalability", to: "Maintenance-No", value: 2 },
    { from: "T-Performance", to: "Maintenance-Yes", value: 4 },
    { from: "T-Performance", to: "Maintenance-No", value: 5 },
    { from: "T-Energy efficiency", to: "Maintenance-Yes", value: 2 },
    { from: "T-Energy efficiency", to: "Maintenance-No", value: 2 },
    { from: "T-Relaibility", to: "Maintenance-Yes", value: 4 },
    { from: "T-Relaibility", to: "Maintenance-No", value: 1 }
];

//let hoverState = chart.links.template.states.create("hover");
//hoverState.properties.fillOpacity = 1;

var linkTemplate = chart.links.template;
//linkTemplate.fillOpacity = 0.5;

chart.orientation = "vertical";

chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";

// for right-most label to fit
chart.minNodeSize = 0.09; // tamaño links
//chart.nodeAlign = "bottom";
//chart.paddingLeft = 80;
//chart.paddingRight = 80;

//chart.links.template.propertyFields.id = "id";
//chart.links.template.colorMode = "fromNode";
//chart.links.template.colorMode = "toNode";
//chart.links.template.colorMode = "solid";
//chart.links.template.colorMode = "gradient";
//chart.links.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
//chart.links.template.fill = am4core.color("#ED7D31");
//chart.links.template.fillOpacity = 0.1;
//linkTemplate.strokeOpacity = 0;
//chart.links.template.tooltipText = "";

//chart.links.template.colorMode = "toNode";
//chart.links.template.fillOpacity = 0.5;


// make nodes draggable
var nodeTemplate = chart.nodes.template;
nodeTemplate.height = 15;
nodeTemplate.width = 30;
nodeTemplate.stroke = am4core.color("#fff");
nodeTemplate.strokeWidth = 2; // delineado nodes
nodeTemplate.nameLabel.locationY = 0.5;
nodeTemplate.nameLabel.label.fill = am4core.color("#fff");
nodeTemplate.nameLabel.label.fontWeight = "bold";;

// make nodes draggable
// var nodeTemplate = chart.nodes.template;
// nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
// nodeTemplate.showSystemTooltip = true;
// nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer

// function am4themes_myTheme(target) {
//     if (target instanceof am4core.ColorSet) {
//         target.list = [
//             am4core.color("#5B9BD5"),
//             am4core.color("#FFC000"),
//             am4core.color("#ED7D31"),
//             am4core.color("#70AD47"),
//             am4core.color("#7C7C7C")
//             //am4core.color("#4472C4"),
//             //am4core.color("#3BC2A3")
//         ];


//     }
//}


chart.exporting.menu = new am4core.ExportMenu();
chart.exporting.menu.align = "left";
chart.exporting.menu.verticalAlign = "top";