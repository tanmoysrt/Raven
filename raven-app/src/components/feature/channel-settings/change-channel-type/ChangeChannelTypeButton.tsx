import { ChannelListItem } from '@/utils/channel/ChannelListProvider'
import { Hash, Lock } from 'lucide-react'
import { ChangeChannelTypeModal } from './ChangeChannelTypeModal'
import { useState } from 'react'
import { Button, Dialog } from '@radix-ui/themes'
import { DIALOG_CONTENT_CLASS } from '@/utils/layout/dialog'
interface ChangeChannelTypeButtonProps {
    channelData: ChannelListItem
}

export const ChangeChannelTypeButton = ({ channelData }: ChangeChannelTypeButtonProps) => {

    const [open, setOpen] = useState(false)
    const onClose = () => {
        setOpen(false)
    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger>
                <Button color='gray' variant='surface'>
                    {channelData.type === 'Public' ? <Lock size='16' /> : <Hash size='16' />}
                    Change to a {channelData.type === 'Public' ? 'private' : 'public'} channel
                </Button>
            </Dialog.Trigger>
            <Dialog.Content className={DIALOG_CONTENT_CLASS}>
                <ChangeChannelTypeModal
                    onClose={onClose}
                    channelData={channelData} />
            </Dialog.Content>
        </Dialog.Root>
    )
}