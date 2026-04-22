// EBR_TABLE.js

window.EBR_TABLE = {
  "tables": {
    "EBR_TABLE": {
      "columns": {
        "TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true,
          "info": "This column represents table name used by application.  This table is actually Editioning view on the database.  Application always uses this name to interact with database. "
        },
        "BASE_TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "This column represents base table name associated with Editioning view.  Application should not interact with base table name. "
        },
        "IS_MODIFIED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "This flag represents that underlying base table has been modified and it requires update of the corresponding Editioning view.  Migration keeps track of modified tables using this flag.  This flag should be reset for all tables to N before starting of the migration or installation of the OTM, GTM, and FTI schemas."
        }
      },
      "fk_tables": []
    }
  }
};
