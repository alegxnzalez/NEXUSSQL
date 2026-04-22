// VAT_CODE_ORDERED_SET.js

window.VAT_CODE_ORDERED_SET = {
  "tables": {
    "VAT_CODE_ORDERED_SET": {
      "description": "Allows storage of a list of VAT codes which must be used by the tax calculation in a specific order.",
      "columns": {
        "VAT_CODE_ORDERED_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Gid for the name of the ordered set of VAT Codes"
},
        "VAT_CODE_ORDERED_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Xid for the name of the ordered set of VAT Codes"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "User description for the set of ordered VAT codes"
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
        "VAT_CODE_ORDERED_SET_D",
        "VAT_PROVINCIAL_CNFG_PERSP_D"
]
    }
  }
};