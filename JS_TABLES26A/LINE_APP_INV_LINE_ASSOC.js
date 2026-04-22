// LINE_APP_INV_LINE_ASSOC.js

window.LINE_APP_INV_LINE_ASSOC = {
  "tables": {
    "LINE_APP_INV_LINE_ASSOC": {
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
        "LINE_APPROVE_TOLERANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LINE_APPROVE_TOLERANCE",
          "info": "ID of LINE_APPROVE_TOLERANCE."
},
        "SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Line refnum association sequence."
},
        "A_REFNUM_QUAL_TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "Indicates the to be associated refnum qualifier table (e.g., invoice_lineitem_refnum_qual)."
},
        "A_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "Indicates the to be associated refnum qualifier ID."
},
        "AW_REFNUM_QUAL_TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "Indicates the associate with refnum qualifier table (e.g., shipment_refnum_qual)."
},
        "AW_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "Indicates the associate with refnum qualifier ID."
}
      },
      "fk_tables": []
    }
  }
};