// TABLE_SET_DETAIL.js

window.TABLE_SET_DETAIL = {
  "tables": {
    "TABLE_SET_DETAIL": {
      "description": "This table is associated with Table_Set. It contains the related tables in GC3 that are associated with the functional groups in Table_Set table.",
      "columns": {
        "TABLE_SET": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TABLE_SET"
},
        "TABLE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "key_value": true
},
        "OWNER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Indicates that the table shown in table_name belongs to OTM or FTI. It wil be considered as OTM if owner is null."
}
      },
      "fk_tables": []
    }
  }
};