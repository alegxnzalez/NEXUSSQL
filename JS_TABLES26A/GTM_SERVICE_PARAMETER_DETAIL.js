// GTM_SERVICE_PARAMETER_DETAIL.js

window.GTM_SERVICE_PARAMETER_DETAIL = {
  "tables": {
    "GTM_SERVICE_PARAMETER_DETAIL": {
      "columns": {
        "GTM_SERVICE_PARAMETER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_SERVICE_PARAMETER"
},
        "PARAMETER_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "key_value": true
},
        "IS_DISABLED": {
          "type": "VARCHAR2(1)",
          "nullable": true
},
        "THRESHOLD": {
          "type": "NUMBER",
          "nullable": true
},
        "WEIGHT": {
          "type": "NUMBER",
          "nullable": true
},
        "MATCH_DEFAULT": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
                    "MATCH",
                    "NO_MATCH"
          ]
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
        "BACKWARD_THRESHOLD": {
          "type": "NUMBER",
          "nullable": true
},
        "MATCH_DIRECTION": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
                    "FORWARD",
                    "BACKWARD",
                    "BOTH"
          ]
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the OTM Release version"
}
      },
      "fk_tables": []
    }
  }
};