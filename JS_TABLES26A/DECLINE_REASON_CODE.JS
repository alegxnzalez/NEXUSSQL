// DECLINE_REASON_CODE.js

window.DECLINE_REASON_CODE = {
  "tables": {
    "DECLINE_REASON_CODE": {
      "description": "This table is used to store the decline reason code for a tender declined by the service provider.",
      "columns": {
        "DECLINE_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "DECLINE_REASON_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
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
}
      },
      "fk_tables": []
    }
  }
};