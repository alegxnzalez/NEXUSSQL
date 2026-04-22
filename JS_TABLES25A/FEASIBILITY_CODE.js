// FEASIBILITY_CODE.js

window.FEASIBILITY_CODE = {
  "tables": {
    "FEASIBILITY_CODE": {
      "columns": {
        "FEASIBILITY_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The feasibility code such as FEASIBLE, TIME_INFEASIBLIE, EQUIPMENT_INFEASIBLE, etc "
        },
        "FEASIBILITY_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Description of the feasibility code"
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        }
      },
      "fk_tables": [
        "ROUTE_INSTANCE_LEG",
        "SHIPMENT",
        "SHIPMENT_INFEASIBILITY",
        "WORK_ASSIGNMENT"
      ]
    }
  }
};
