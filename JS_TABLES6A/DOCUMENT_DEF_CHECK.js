// DOCUMENT_DEF_CHECK.js

window.DOCUMENT_DEF_CHECK = {
  "tables": {
    "DOCUMENT_DEF_CHECK": {
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
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DOCUMENT_DEF",
          "info": "Document Type "
        },
        "SAVED_CONDITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_CONDITION",
          "info": "Saved condition - must be met for validation to pass. "
        },
        "ERROR_TRANSLATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "If validation fails, an error message to display. "
        },
        "SOLUTION_TRANSLATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "If validation fails, a solution message to display. "
        },
        "REVIEW_STATUS": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "ALL",
            "PREVIEW",
            "IN REVIEW",
            "FINAL"
          ],
          "info": "State of document to apply validation. Validation can be applied when a document is being previewed, reviewed, finalized or indepedent of state. "
        },
        "XPATH_ROOT": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "Root of XPath testing. This is based on the integration XML of the document's business object. "
        },
        "XPATH_TEST": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "XPath condition, relative to the XPath root, that must be met for validation. If the condition is on a child branch, it must validate for all matching branches. "
        },
        "AUTO_ASSIGN_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "AUTO_ASSIGN_RULE",
          "info": "If validation fails, an auto assign rule to force a default value onto the document. "
        },
        "DOCUMENT_DEF_CHECK_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique ID for the validation rule "
        },
        "DOCUMENT_DEF_CHECK_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "OUT_XML_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "OUT_XML_PROFILE"
        },
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "data query type for which the document validation applies to in the document definition"
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": []
    }
  }
};
