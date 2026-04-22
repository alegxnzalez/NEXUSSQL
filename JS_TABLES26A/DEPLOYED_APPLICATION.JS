// DEPLOYED_APPLICATION.js

window.DEPLOYED_APPLICATION = {
  "tables": {
    "DEPLOYED_APPLICATION": {
      "description": "Defines a GC3 application that is deployable within an EJB container.",
      "columns": {
        "DEPLOYED_APPLICATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "DEPLOYED_APPLICATION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "EAR_FILE_NAME": {
          "type": "VARCHAR2(150)",
          "nullable": false,
          "info": "EAR file holding beans and cache sizes for this application"
},
        "STARTUP_PROPERTIES_FILE_PATH": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Optional properties file holding startup classes for this application"
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
      "fk_tables": []
    }
  }
};