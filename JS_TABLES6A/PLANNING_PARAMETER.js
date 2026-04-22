// PLANNING_PARAMETER.js

window.PLANNING_PARAMETER = {
  "tables": {
    "PLANNING_PARAMETER": {
      "columns": {
        "PLANNING_PARAMETER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PLANNING_PARAMETER_SET",
          "info": "Associates the planning parameter with a particular set.  This is used to organize the planning parameters into logical groupings. "
        },
        "PLANNING_PARAM_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PLANNING_PARAMETER_QUALIFIER",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID."
        },
        "PLANNING_PARAM_VALUE": {
          "type": "VARCHAR2(255)",
          "nullable": false
        },
        "PLANNING_PARAM_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
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
