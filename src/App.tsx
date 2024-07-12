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
  const data :DataManager = new DataManager(diagramItems as JSON[]);
  const dataSource : DataSourceModel = {
    id : "Id",
    parentId : "Team",
    dataManager : data
  }
  const diagramLayout : LayoutModel = {
    type : "OrganizationalChart",
    margin : {top : 20},
    horizontalSpacing : 50,
    verticalSpacing : 50,
    horizontalAlignment : "Center",
    verticalAlignment : "Center"
  }
  const defaultNodeSetting = (obj : NodeModel) =>{
    obj.annotations = [{style:{color:"white"}, content :(
      obj.data as {Role:"String"}).Role
    }];
    obj.style = {
      fill : "#6BA5D7",
      strokeColor : "None",
    }
    obj.width = 70;
    obj.height = 50;
    obj.margin = {
      top:5,
      bottom:5,
      left:5,
      right:5
    }
    return obj;
  }
  const defaultConnectorSetting = (obj : ConnectorModel) =>{
    obj.style = {
      strokeWidth :2,
      strokeColor:"#6BA5D7"
    }
    if(obj.targetDecorator?.style){
      obj.targetDecorator.style = {
        fill : "#6BA5D7",
        strokeColor: "#6BA5D7"
      }
    }
    obj.type = "Orthogonal"
    return obj;
  }
  return (
    <div>
      <DiagramComponent
        id="container"
        width={"100%"}
        height={"750px"}
        dataSourceSettings={dataSource}
        layout={diagramLayout}
        getNodeDefaults={defaultNodeSetting}
        getConnectorDefaults={defaultConnectorSetting}
      >
      <Inject services={[DataBinding, HierarchicalTree]}/>
      </DiagramComponent>
    </div>
  );
}

export default App;
