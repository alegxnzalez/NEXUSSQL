// GTM_BOND_REFNUM.js

window.GTM_BOND_REFNUM = {
  "tables": {
    "GTM_BOND_REFNUM": {
      "description": "This will stores reference numbers for any bond.",
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
        "GTM_BOND_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_BOND_REFNUM_QUALIFIER",
          "info": "This is qualifier for reference number."
},
        "REFNUM_VALUE": {
          "type": "VARCHAR2(255)",
          "nullable": false,
          "key_value": true,
          "info": "This is value for reference number."
}
      },
      "fk_tables": []
    }
  }
};