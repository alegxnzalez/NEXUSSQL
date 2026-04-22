// MATCH_RULE_REFNUM.js

window.MATCH_RULE_REFNUM = {
  "tables": {
    "MATCH_RULE_REFNUM": {
      "description": "The value of the specified match refnum qualifier will be matched against the corresonding match with refnum value for the match refnum qualifer table (m_refnum_qual_table_name) and match with refnum qualifier table (mw_refnum_qual_table_name).",
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
        "MATCH_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MATCH_RULE",
          "info": "Id of the match rule"
},
        "MATCH_RULE_REFNUM_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "match rule refnum sequence"
},
        "M_REFNUM_QUAL_TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "It indicate the match refnum qualifier table (e.g., invoice_tn_refnum_qual)."
},
        "M_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "It indicate the match refnum qualifier ID(e.g., invoice_tn_refnum_qual)"
},
        "MW_REFNUM_QUAL_TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "It indicate the match with refnum qualifier table (e.g., shipment_refnum_qual, su_refnum_qual)."
},
        "MW_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "It indicate the match with refnum qualifier id (e.g., shipment_refnum_qual)."
}
      },
      "fk_tables": []
    }
  }
};