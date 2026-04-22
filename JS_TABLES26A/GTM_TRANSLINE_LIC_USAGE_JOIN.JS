// GTM_TRANSLINE_LIC_USAGE_JOIN.js

window.GTM_TRANSLINE_LIC_USAGE_JOIN = {
  "tables": {
    "GTM_TRANSLINE_LIC_USAGE_JOIN": {
      "description": "This table contains the related license line usages of each assigned license line of transaction/declaration line",
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
        "GTM_TRANS_LINE_LICENSE_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANS_LINE_LICENSE",
          "info": "The sequence number for the license line assigned to the trade transaction."
},
        "GTM_LL_USAGE_SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number of the license line usage."
}
      },
      "fk_tables": []
    }
  }
};