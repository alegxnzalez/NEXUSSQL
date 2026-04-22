// PI_RESIDUE_COMPAT.js

window.PI_RESIDUE_COMPAT = {
  "tables": {
    "PI_RESIDUE_COMPAT": {
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
        "PI_RESIDUE_COMPAT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the Packaged Item Residue Compatibility record."
},
        "PI_RESIDUE_COMPAT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the Packaged Item Residue Compatibility record."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "The description of the Packaged Item Residue Compatibility record."
}
      },
      "fk_tables": [
        "PI_RESIDUE_COMPAT_D"
]
    }
  }
};