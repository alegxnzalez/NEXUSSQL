// SERVICE_EXTERNAL_ENGINE_PARM.js

window.SERVICE_EXTERNAL_ENGINE_PARM = {
  "tables": {
    "SERVICE_EXTERNAL_ENGINE_PARM": {
      "description": "Parameters for external service time engines.",
      "columns": {
        "SERVICE_EXTERNAL_ENGINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SERVICE_EXTERNAL_ENGINE",
          "info": "External engine this parameter belongs to."
},
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Country code for this parameter, or '*' for all."
},
        "PARM": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Parameter name."
},
        "VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Parameter value."
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