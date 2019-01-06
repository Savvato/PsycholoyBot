﻿using Microsoft.Bot.Builder;
using Microsoft.Bot.Builder.Dialogs;
using PsychologyBot.Core.Bot.States;

namespace PsychologyBot.Core.Bot.Accessors
{
    public class ConversationStateAccessors
    {
        public ConversationStateAccessors(IPropertyManager conversationState)
        {
            DialogStateAccessor = conversationState.CreateProperty<DialogState>(nameof(DialogState));
            RegistrationStateAccessor = conversationState.CreateProperty<RegistrationState>(nameof(RegistrationState));
            MessageStateAccessor = conversationState.CreateProperty<MessageState>(nameof(MessageState));
        }

        public IStatePropertyAccessor<DialogState> DialogStateAccessor { get; }

        public IStatePropertyAccessor<RegistrationState> RegistrationStateAccessor { get; }

        public IStatePropertyAccessor<MessageState> MessageStateAccessor { get; }
    }
}