// GTM_PORT_QUALIFIER.js

window.GTM_PORT_QUALIFIER = {
  "tables": {
    "GTM_PORT_QUALIFIER": {
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
        "GTM_PORT_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_PORT_QUALIFIER_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
}
      },
      "fk_tables": [
        "GTM_BOND_PORT",
        "GTM_LICENSE_PORT",
        "GTM_TRANSACTION_PORT"
]
    }
  }
};