// GTM_DECL_MESSAGE.js

window.GTM_DECL_MESSAGE = {
  "tables": {
    "GTM_DECL_MESSAGE": {
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
        "GTM_DECL_MESSAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GTM Declaration Message GID is a unique key across all domains. "
        },
        "GTM_DECL_MESSAGE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GTM Declaration Message XID is a unique key in a particular domain. "
        },
        "MESSAGE_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date on which message is received or sent. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description for the message. "
        },
        "SENDER_ID": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "ID of the sender of the message. "
        },
        "RECEIVER_ID": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "ID of the receiver of the message. "
        },
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Country code "
        },
        "IS_INBOUND": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "This field specifies if the given message is inbound or not. "
        },
        "STATUS": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "CREATED",
            "SENT",
            "RECEIVED",
            "ERROR",
            "PROCESSING",
            "PROCESSED"
          ],
          "info": "It is the Status of the message. It may have values as Created, Sent, Received, Error, Processing or processed. The default value is Created. "
        },
        "BS_STATUS_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_GROUP",
          "info": "Status Group ID. "
        },
        "BS_STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "Message Function Code (original, additional, accepted, cancelled etc.) "
        },
        "BS_STATUS_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_REASON_CODE",
          "info": "Status Reason code GID, eg. Reason Code or Error. "
        },
        "GTM_TRANSACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GTM Transaction ID for given the message. "
        },
        "MESSAGE_CLOB": {
          "type": "CLOB",
          "nullable": true,
          "info": "Message CLOB. "
        },
        "GTM_DECL_XML_CLOB": {
          "type": "CLOB",
          "nullable": true,
          "info": "GTM Declaration XML CLOB "
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 1. "
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 2. "
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 3. "
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 4. "
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 5. "
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 6. "
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 7. "
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 8. "
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 9. "
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 10. "
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 11. "
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 12. "
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 13. "
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 14. "
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 15. "
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 16. "
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 17. "
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 18. "
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 19. "
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "User Defined Attribute 20. "
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "User Defined Attribute Number 1. "
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "User Defined Attribute Number 2. "
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "User Defined Attribute Number 3. "
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "User Defined Attribute Number 4. "
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "User Defined Attribute Number 5. "
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "User Defined Attribute Number 6. "
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "User Defined Attribute Number 7. "
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "User Defined Attribute Number 8. "
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "User Defined Attribute Number 9. "
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "User Defined Attribute Number 10. "
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "User Defined Attribute Date 1. "
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "User Defined Attribute Date 2. "
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "User Defined Attribute Date 3. "
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "User Defined Attribute Date 5. "
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "User Defined Attribute Date 6. "
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "User Defined Attribute Date 7. "
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "User Defined Attribute Date 8. "
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "User Defined Attribute Date 9. "
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "User Defined Attribute Date 10. "
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "User Defined Attribute Date 4. "
        },
        "BS_STATUS_GROUP_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Status Group Code "
        },
        "BS_STATUS_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Status Code "
        },
        "TEST_INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "T",
            "P"
          ],
          "info": "Indicates whether the message sent for filing is test message or its production message, Government will take necessary actions for the production messages. "
        },
        "ACTION": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Action Name "
        },
        "OUT_XML_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OUT_XML_PROFILE",
          "info": "This field represents out XML profile used. Which is a foreign key to OUT_XML_PROFILE table."
        }
      },
      "fk_tables": [
        "GTM_DECL_MESSAGE_ADDL_INFO",
        "GTM_DECL_MESSAGE_REFNUM",
        "GTM_DECL_MESSAGE_REMARK"
      ]
    }
  }
};
