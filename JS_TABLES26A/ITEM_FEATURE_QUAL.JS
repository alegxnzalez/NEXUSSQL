// ITEM_FEATURE_QUAL.js

window.ITEM_FEATURE_QUAL = {
  "tables": {
    "ITEM_FEATURE_QUAL": {
      "columns": {
        "ITEM_FEATURE_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "ITEM_FEATURE_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
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
        "ITEM_FEATURE",
        "OB_LINE_ATTRIBUTE",
        "OB_SU_CONTENT_ATTRIBUTE",
        "ORDER_RELEASE_LINE_ATTRIBUTE"
]
    }
  }
};