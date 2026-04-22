// GTM_BOND_PORT.js

window.GTM_BOND_PORT = {
  "tables": {
    "GTM_BOND_PORT": {
      "description": "This table stores the port details for which the bond is applicable.",
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
        "GTM_PORT_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_PORT_QUALIFIER",
          "info": "This is qualifier for ports on bond."
},
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION",
          "info": "This is the port location applicable to the bond."
}
      },
      "fk_tables": []
    }
  }
};