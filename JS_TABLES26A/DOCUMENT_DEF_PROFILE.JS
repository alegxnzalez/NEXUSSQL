// DOCUMENT_DEF_PROFILE.js

window.DOCUMENT_DEF_PROFILE = {
  "tables": {
    "DOCUMENT_DEF_PROFILE": {
      "columns": {
        "DOCUMENT_DEF_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "DOCUMENT_DEF_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true
},
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
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
}
      },
      "fk_tables": [
        "DOCUMENT_DEF_PROFILE_D",
        "NFRC_RULE"
]
    }
  }
};