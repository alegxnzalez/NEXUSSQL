// GTM_BOND_REMARK.js

window.GTM_BOND_REMARK = {
  "tables": {
    "GTM_BOND_REMARK": {
      "description": "This will stores remarks for any bond.",
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
        "GTM_BOND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_BOND",
          "info": "This is the bond identifier Gid for Gtm system."
},
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REMARK_QUAL",
          "info": "This is qualifier for remarks on bond."
},
        "REMARK_TEXT": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "This is value for remarks on bond."
},
        "REMARK_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "This is sequence or order for the remarks on bond."
}
      },
      "fk_tables": []
    }
  }
};