// DEPENDENCY_SERVICE_D.js

window.DEPENDENCY_SERVICE_D = {
  "tables": {
    "DEPENDENCY_SERVICE_D": {
      "description": "The Dependency Service D table describes all of the details of the dependency service . For example 'based on' for time offset based dependency service",
      "columns": {
        "DEPENDENCY_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DEPENDENCY_SERVICE"
},
        "DEPENDENCY_SERVICE_PARAM": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "key_value": true
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DATA_QUERY_TYPE"
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