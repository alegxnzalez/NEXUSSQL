// WORKBENCH_TEMPLATE.js

window.WORKBENCH_TEMPLATE = {
  "tables": {
    "WORKBENCH_TEMPLATE": {
      "columns": {
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
        "WORKBENCH_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GID of the Workbench Layout Template"
},
        "WORKBENCH_TEMPLATE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Name of the Workbench Layout Template"
},
        "WORKBENCH_TEMPLATE_DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Description of the Workbench Layout Template"
},
        "WORKBENCH_TEMPLATE_JSON": {
          "type": "CLOB",
          "nullable": true,
          "info": "JSON of the Workbench Layout Template"
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "The release in which the record is added."
}
      },
      "fk_tables": []
    }
  }
};