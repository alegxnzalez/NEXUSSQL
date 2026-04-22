// VAT_CODE_ORDERED_SET_D.js

window.VAT_CODE_ORDERED_SET_D = {
  "tables": {
    "VAT_CODE_ORDERED_SET_D": {
      "description": "Defines the sequence in which VAT codes that are members of this set should be applied",
      "columns": {
        "VAT_CODE_ORDERED_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VAT_CODE_ORDERED_SET",
          "info": "Id for the VAT code ordered set that this list belongs to."
},
        "SEQUENCE_NO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "info": "User defined sequence that the corresponding VAT code should be applied when this ordered set is used by the VAT calculation logic."
},
        "VAT_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "VAT_CODE",
          "info": "VAT code gid to be used"
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