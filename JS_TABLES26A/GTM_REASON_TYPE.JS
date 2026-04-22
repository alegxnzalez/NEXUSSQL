// GTM_REASON_TYPE.js

window.GTM_REASON_TYPE = {
  "tables": {
    "GTM_REASON_TYPE": {
      "description": "Stores the types of reasons, by which reason codes can be grouped",
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
        "GTM_REASON_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Reason Type GID"
},
        "GTM_REASON_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Reason Type XID"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description of the Reason Type"
}
      },
      "fk_tables": [
        "GTM_REASON_CODE"
]
    }
  }
};