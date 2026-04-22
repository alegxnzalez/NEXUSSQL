// PATCH_LOG_D.js

window.PATCH_LOG_D = {
  "tables": {
    "PATCH_LOG_D": {
      "columns": {
        "PATCH_LOG_D_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "PATCH_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "foreign_key": "PATCH_LOG",
          "info": "Patch name which usually match with script file name"
},
        "BUG_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "foreign_key": "PATCH_LOG",
          "info": "bug number for which patch is getting applied"
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
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "ERROR_MESSAGE": {
          "type": "VARCHAR2(4000)",
          "nullable": true
},
        "DATAMIG_TASK_OWNER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Owner of the task, corrosponds to DBA_PARALLEL_EXECUTE_TASKS.TASK_OWNER;"
},
        "DATAMIG_TASK_NAME": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "Contains name of the task created within data migration patch script. You can query DBA_PARALLEL_EXECUTE_TASKS for more data about task specified by task_name."
},
        "DATAMIG_TASK_STATUS": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Owner of the task, corrosponds to DBA_PARALLEL_EXECUTE_TASKS.TASK_STATUS;"
},
        "DATAMIG_CHUNK_SIZE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Data migration has divided table by ROWID in chunks of size specified by this column, query DBA_PARALLEL_EXECUTE_CHUNKS about detail of each chunk"
},
        "DATAMIG_PARALLEL_DEGREE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Data migration used parallel_degree specified by this column"
},
        "COMMENTS": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Any additional comments recorded by patch"
}
      },
      "fk_tables": []
    }
  }
};