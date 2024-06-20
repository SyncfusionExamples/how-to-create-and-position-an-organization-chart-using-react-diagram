import {
  DiagramComponent,
  DataSourceModel,
  LayoutModel,
  DataBinding,
  HierarchicalTree,
  Inject,
  NodeModel,
  ConnectorModel
} from "@syncfusion/ej2-react-diagrams";
import {DataManager} from "@syncfusion/ej2-data";
function App() {
  const diagramItems : object[] = [
    {
      Id: "parent",
      Role: "Project Management",
    },
    {
      Id: 1,
      Role: "R&D Team",
      Team: "parent",
    },
    {
      Id: 3,
      Role: "Philosophy",
      Team: "1",
    },
    {
      Id: 4,
      Role: "Organization",
      Team: "1",
    },
    {
      Id: 5,
      Role: "Technology",
      Team: "1",
    },
    {
      Id: 7,
      Role: "Funding",
      Team: "1",
    },
    {
      Id: 8,
      Role: "Resource Allocation",
      Team: "1",
    },
    {
      Id: 9,
      Role: "Targeting",
      Team: "1",
    },
    {
      Id: 11,
      Role: "Evaluation",
      Team: "1",
    },
    {
      Id: 156,
      Role: "HR Team",
      Team: "parent",
    },
    {
      Id: 13,
      Role: "Recruitment",
      Team: "156",
    },
    {
      Id: 113,
      Role: "Training",
      Team: "12",
    },
    {
      Id: 112,
      Role: "Employee Relation",
      Team: "156",
    },
    {
      Id: 14,
      Role: "Record Keeping",
      Team: "12",
    },
    {
      Id: 15,
      Role: "Compensations & Benefits",
      Team: "12",
    },
    {
      Id: 16,
      Role: "Compliances",
      Team: "12",
    },
    {
      Id: 17,
      Role: "Production & Sales Team",
      Team: "parent",
    },
    {
      Id: 119,
      Role: "Design",
      Team: "17",
    },
    {
      Id: 19,
      Role: "Operation",
      Team: "17",
    },
    {
      Id: 20,
      Role: "Support",
      Team: "17",
    },
    {
      Id: 21,
      Role: "Quality Assurance",
      Team: "17",
    },
    {
      Id: 23,
      Role: "Customer Interaction",
      Team: "17",
    },
    {
      Id: 24,
      Role: "Support and Maintenance",
      Team: "17",
    },
    {
      Id: 25,
      Role: "Task Coordination",
      Team: "17",
    },
  ]
  const remoteData : DataManager = new DataManager(diagramItems as JSON[]);
  const dataSource : DataSourceModel = {
    id:"Id",
    parentId:"Team",
    dataManager :remoteData
  }
  const diagramLayout : LayoutModel = {
    type:"OrganizationalChart",
    margin:{top:20},
    horizontalSpacing:25,
    verticalSpacing:30,
    horizontalAlignment:"Left",
    verticalAlignment:"Center"
  }
  const defaultNodeSetting = (defaultNode:NodeModel) =>{
    defaultNode.shape = {
      type : "Text",
      content:(defaultNode.data as {Role:"string"}).Role,
    }
    defaultNode.style = {
      fill:"None",
      strokeColor:"None",
      bold:true,
      color:"white"
    }
    defaultNode.backgroundColor = "#6BA5D7";
    defaultNode.width = 90;
    defaultNode.height = 60;
    defaultNode.margin= {
      left : 5,
      right:5,
      top:5,
      bottom:5
    }
    return defaultNode;
  }
  const defaultConnectorSetting = (defaultConnector:ConnectorModel) =>{
    defaultConnector.style = {
      strokeWidth:2,
      strokeColor:"#6BA5D7"
    }
    if(defaultConnector.targetDecorator?.style){
      defaultConnector.targetDecorator.style={
        fill:"#6BA5D7",
        strokeColor:"#6BA5D7"
      }
    }
    defaultConnector.type = "Orthogonal";
    return defaultConnector;
  }
  return (
    <div>
      <DiagramComponent
        id="container"
        width={"100%"}
        height={"750px"}
        dataSourceSettings={dataSource}
        layout={diagramLayout}
        getConnectorDefaults={defaultConnectorSetting}
        getNodeDefaults={defaultNodeSetting}
      >
        <Inject services = {[DataBinding, HierarchicalTree]}/>
      </DiagramComponent>
    </div>
  );
}

export default App;
