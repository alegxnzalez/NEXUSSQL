// PI_RESIDUE_COMPAT_D.js

window.PI_RESIDUE_COMPAT_D = {
  "tables": {
    "PI_RESIDUE_COMPAT_D": {
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
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PACKAGED_ITEM",
          "info": "The GID for the Packaged Item."
},
        "PACKAGED_ITEM_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PACKAGED_ITEM_PROFILE",
          "info": "The GID for the Packaged Item Profile."
},
        "LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "The GID for the Location Profile where the compatibility is applicable."
},
        "PI_RESIDUE_COMPAT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PI_RESIDUE_COMPAT",
          "info": "The GID for the Packaged Item Residue Compatibility record."
},
        "SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number for the Packaged Item Residue Compatibility detail record."
}
      },
      "fk_tables": []
    }
  }
};