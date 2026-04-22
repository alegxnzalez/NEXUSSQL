// GTM_CODE_MAPPING.js

window.GTM_CODE_MAPPING = {
  "tables": {
    "GTM_CODE_MAPPING": {
      "description": "External Code Mappings",
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
        "GTM_CODE_MAPPING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GTM external code mapping GID"
},
        "GTM_CODE_MAPPING_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GTM external code mapping XID"
},
        "GTM_CODE_MAPPING_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "AES FILING MAPPING",
                    "SPLIT LINE CONFIGURATION MAPPING"
          ],
          "info": "GTM mapping type."
}
      },
      "fk_tables": [
        "GTM_CODE_MAPPING_D"
]
    }
  }
};