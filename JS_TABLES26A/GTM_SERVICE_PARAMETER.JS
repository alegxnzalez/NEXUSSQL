// GTM_SERVICE_PARAMETER.js

window.GTM_SERVICE_PARAMETER = {
  "tables": {
    "GTM_SERVICE_PARAMETER": {
      "columns": {
        "GTM_SERVICE_PARAMETER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_SERVICE_PARAMETER_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "GTM_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_SERVICE"
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
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the OTM Release version"
}
      },
      "fk_tables": [
        "GTM_PC_SERVICE_PARAMETER",
        "GTM_SERVICE_PARAMETER_DETAIL"
]
    }
  }
};