// DOCUMENT_SET.js

window.DOCUMENT_SET = {
  "tables": {
    "DOCUMENT_SET": {
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
        "DOCUMENT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique identifier for the document set. "
        },
        "DOCUMENT_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The unique external identifier for the document set. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The description about the document set. "
        },
        "DOCUMENT_SET_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The name of the document set. "
        },
        "OWNER_DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "Indicates the owner data query type of the document set. "
        },
        "REPLY_TO_INV_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "The qualifier to identify the involved party contact of the object specified by the document set that will be used as reply-to for email notifications. "
        },
        "REPLY_TO_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT",
          "info": "The reply-to contact for email notification. This is not retrieved from the object and will be used for all of the objects to which this document set is assigned. "
        },
        "ZIP_DOCUMENTS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates whether the documents are to be compressed to a zip file or sent as individual documents in the email. "
        },
        "SEND_PARTIAL_DOC_TYPES": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates whether to send partial document types of the document set or to send all the document types."
        }
      },
      "fk_tables": [
        "DOCUMENT_SET_D",
        "DOCUMENT_SET_SUBSC_IPQ",
        "OBJECT_DOCUMENT_SET"
      ]
    }
  }
};
