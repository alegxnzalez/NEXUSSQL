// PATCH_LOG.js

window.PATCH_LOG = {
  "tables": {
    "PATCH_LOG": {
      "columns": {
        "PATCH_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "info": "Patch name which usually match with script file name "
        },
        "BUG_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true,
          "info": "bug number for which patch is getting applied "
        },
        "VERSION": {
          "type": "VARCHAR2(15)",
          "nullable": false,
          "info": "Version of the patch.  19 will be patches for migraiton from 18 to 19. "
        },
        "STATUS": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "values": [
            "STARTED",
            "PATCH_IN_PROGRESS",
            "WAITING_ON_PENDING_DML",
            "COMPLETED",
            "ERROR",
            "TRIGGER_COMPILE_STARTED",
            "TRIGGER_COMPILE_ENDED",
            "DML_STARTED",
            "DML_ENDED"
          ]
        },
        "START_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "END_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "SUBJECT": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Subject line of the BUG from BUGDB "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "COMMENTS": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Any additional comments recorded by patch"
        }
      },
      "fk_tables": [
        "PATCH_LOG_D"
      ]
    }
  }
};
