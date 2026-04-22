// GTM_STR_COMPONENT_REFNUM.js

window.GTM_STR_COMPONENT_REFNUM = {
  "tables": {
    "GTM_STR_COMPONENT_REFNUM": {
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
        "GTM_STRUCTURE_COMPONENT_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_STRUCTURE_COMPONENT"
},
        "GTM_STRUCTURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_STRUCTURE_COMPONENT"
},
        "GTM_STR_COMP_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_STR_COMPONENT_REFNUM_QUAL"
},
        "GTM_STR_COMP_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true
}
      },
      "fk_tables": []
    }
  }
};