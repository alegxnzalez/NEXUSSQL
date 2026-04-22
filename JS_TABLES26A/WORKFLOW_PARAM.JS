// WORKFLOW_PARAM.js

window.WORKFLOW_PARAM = {
  "tables": {
    "WORKFLOW_PARAM": {
      "description": "Contains the list of control parameters used by each workflow. For example, the RETENDER_SHIPMENT workflow is kicked off when a carrier has not responded in time (or has not accepted the shipment), so that the shipment can be retendered to other carriers.  A parameter in the WORKFLOW_PARAM table can be set for the maximum number of retenders before the tender process is cancelled.",
      "columns": {
        "WORKFLOW_INFO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "WORKFLOW_INFO",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "PARAMETER": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "VALUE": {
          "type": "VARCHAR2(255)",
          "nullable": false
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
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": []
    }
  }
};