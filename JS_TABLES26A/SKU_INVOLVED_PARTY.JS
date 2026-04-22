// SKU_INVOLVED_PARTY.js

window.SKU_INVOLVED_PARTY = {
  "tables": {
    "SKU_INVOLVED_PARTY": {
      "columns": {
        "SKU_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SKU"
},
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOLVED_PARTY_QUAL"
},
        "INVOLVED_PARTY_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT"
},
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COM_METHOD"
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "IS_PERMANENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": true
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