// BN_CONTEXT.js

window.BN_CONTEXT = {
  "tables": {
    "BN_CONTEXT": {
      "columns": {
        "BN_CONTEXT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Internal ID of the context."
},
        "BN_CONTEXT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "External id of the context."
},
        "BN_CONTEXT_CLASS": {
          "type": "VARCHAR2(500)",
          "nullable": false,
          "info": "Name of the java class implementing the context."
},
        "IS_EXTERNAL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if this BN Context is available for end user configuration in a reference number generation or if it is for internal use"
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
      "fk_tables": [
        "BN_TYPE"
]
    }
  }
};