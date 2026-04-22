// GTM_AGENCY_CODE.js

window.GTM_AGENCY_CODE = {
  "tables": {
    "GTM_AGENCY_CODE": {
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
        "AGENCY_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "key_value": true
},
        "AGENCY_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "AGENCY_CODE_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": true
},
        "AGENCY_CODE": {
          "type": "VARCHAR2(50)",
          "nullable": false
}
      },
      "fk_tables": [
        "GTM_DENIED_PARTY"
]
    }
  }
};